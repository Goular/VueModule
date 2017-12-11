<template>
  <div class="goods">
    <div class="menu-wrapper" ref="menuWrapper">
      <ul>
        <li v-for="(item, index) in goods" class="menu-item border-1px"
            :class="{'current':currentIndex === index}" @click="selectMenu(index, $event)">
          <span class="text">
            <span v-show="item.type>0" class=" icon" :class="classMap[item.type]"></span>{{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper" ref="foodsWrapper">
      <ul>
        <li v-for="item in goods" class="food-list food-list-hook">
          <h1 class="title">{{item.name}}</h1>
          <ul>
            <li v-for="food in item.foods" class="food-item">
              <div class="icon">
                <img :src="food.icon"/>
              </div>
              <div class="content">
                <h2 class="name">{{food.name}}</h2>
                <p class="desc">{{food.description}}</p>
                <div class="extra">
                  <span>月售{{food.sellCount}}份</span>
                  <span class="count">好评{{food.rating}}</span>
                </div>
                <div class="price">
                  <span class="now">¥{{food.price}}</span><span class="old"
                                                                v-show="food.oldPrice">¥{{food.oldPrice}}</span>
                </div>
                <!--添加购物车商品按钮控件模块-->
                <div class="cartControl-wrapper">
                  <cartControl :food='food' @increment="incrementTotal"></cartControl>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <shop-cart ref="shopCart" :select-foods="selectFoods" :delivery-price="seller.deliveryPrice"
               :min-price="seller.minPrice"></shop-cart>
  </div>
</template>

<script text="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import shopCart from 'components/shopcart/shopcart'
  import cartControl from 'components/cartcontrol/cartcontrol'

  const ERR_OK = 1
  export default {
    props: {
      seller: {
        type: Object
      }
    },
    data() {
      return {
        goods: [],
        listHeight: [],
        scrollY: 0,
        selectedFood: {}
      }
    },
    created() {
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
    },
    mounted() {
      this.$http.get('http://www.blog.com/api/goods').then(response => {
        let obj = response.body
        if (obj.status === ERR_OK) {
          this.goods = obj.data
          this.$nextTick(() => {
            this._initScroll()
            this._calculateHeight()
          })
        }
      }, response => {
        // error callback
        let obj = response.body
        console.log('---打印错误信息---')
        console.dir(obj)
        console.log('---打印错误信息---')
      })
    },
    computed: {
      currentIndex() {
        for (let i = 0; i < this.listHeight.length; i++) {
          let height = this.listHeight[i]
          let height2 = this.listHeight[i + 1]
          if (!height2 || (this.scrollY >= height && this.scrollY < height2)) {
            return i
          }
        }
        return 0
      },
      selectFoods() {
        let foods = []
        this.goods.forEach((good) => {
          good.foods.forEach((food) => {
            if (food.count) {
              foods.push(food)
            }
          })
        })
        return foods
      }
    },
    methods: {
      // 初始化滚动控件
      _initScroll() {
        this.menuScroll = new BScroll(this.$refs.menuWrapper, {click: true})
        this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {click: true, probeType: 3})
        // 添加foodsScroll控件二级Dom滚动事件触发
        this.foodsScroll.on('scroll', (pos) => {
          this.scrollY = Math.abs(Math.round(pos.y))
        })
      },
      _calculateHeight() {
        let foodList = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook')
        // 第一个item的初始高度为0
        let height = 0
        this.listHeight.push(height)
        for (let i = 0; i < foodList.length; i++) {
          let item = foodList[i]
          height += item.clientHeight
          this.listHeight.push(height)
        }
      },
      selectMenu(index, event) {
        // 如果没有这个属性的话，说明不是better-scroll的内容，这样我们最好就是直接放弃不执行事件内容
        if (!event._constructed) {
          return
        }
        let foodList = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook')
        let el = foodList[index]
        // time 滚动动画执行的时长,两秒内容到达指定的区域
        this.foodsScroll.scrollToElement(el, 300)
      },
      incrementTotal(target) {
        // 从子控件传递过来触发此方法
        this.$refs.shopCart.drop(target)
      }
    },
    components: {
      cartControl,
      shopCart
    }
  }
</script>

<style lang="stylus" rel="stylesheet">
  @import "goods.styl"
</style>
