<template>
  <div class="goods">
    <div class="menu-wrapper" ref="menuWrapper">
      <ul>
        <li v-for="(item, index) in goods" class="menu-item border-1px">
          <span class="text">
            <span v-show="item.type>0" class=" icon" :class="classMap[item.type]"></span>{{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper" ref="foodsWrapper">
      <ul>
        <li v-for="item in goods" class="food-list">
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
                  <span class="now">¥{{food.price}}</span><span class="old" v-show="food.oldPrice">¥{{food.oldPrice}}</span>
                </div>
                <div class="cartControl-wrapper">

                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script text="text/ecmascript-6">
  import BScroll from 'better-scroll'

  const ERR_OK = 1
  export default {
    props: {
      seller: {
        type: Object
      }
    },
    data() {
      return {
        goods: Array
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
          })
        }
      }, response => {
        // error callback
        let obj = response.body
        console.dir(obj)
      })
    },
    methods: {
      // 初始化滚动控件
      _initScroll() {
        this.menuScroll = new BScroll(this.$refs.menuWrapper, {})
        this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {})
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet">
  @import "goods.styl"
</style>
