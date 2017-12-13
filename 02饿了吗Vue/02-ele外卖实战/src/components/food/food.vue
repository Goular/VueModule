<template>
  <transition name="fade">
    <div v-show="showFlag" class="food" ref="food">
      <div class="food-content">
        <div class="image-header">
          <img :src="food.image">
          <div class="back" @click="hide">
            <i class="icon-arrow_lift"></i>
          </div>
        </div>
        <div class="content">
          <h1 class="title">{{food.name}}</h1>
          <div class="detail">
            <span class="sell-count">月售{{food.sellCount}}份</span>
            <span class="rating">好评率{{food.rating}}</span>
          </div>
          <div class="price">
            <span class="now">¥{{food.price}}</span><span class="old" v-show="food.oldPrice">¥{{food.oldPrice}}</span>
          </div>
          <div class="cartcontrol-wrapper">
            <cartcontrol :food="food" @increment="incrementTotal"></cartcontrol>
          </div>
          <transition name="buy">
            <div @click.stop.prevent="addFirst" class="buy" v-show="!food.count || food.count === 0">加入购物车</div>
          </transition>
        </div>
        <split v-show="food.info"></split>
        <div class="info" v-show="food.info">
          <h1 class="title">商品信息</h1>
          <p class="text">{{food.info}}</p>
        </div>
        <split></split>
      </div>
    </div>
  </transition>
</template>

<script text="text/ecmascript-6">
  import Vue from 'vue'
  import BScroll from 'better-scroll'
  import split from 'components/split/split'
  import cartcontrol from 'components/cartcontrol/cartcontrol'

  export default {
    props: {
      food: {
        type: Object
      }
    },
    data() {
      return {
        showFlag: false
      }
    },
    methods: {
      show() {
        this.showFlag = true
        // 在show方法执行的时候创建betterscroll nextTick用于刷新高度
        this.$nextTick(() => {
          if (!this.scroll) {
            this.scroll = new BScroll(this.$refs.food, {
              click: true
            })
          } else {
            this.scroll.refresh()
          }
        })
      },
      hide() {
        this.showFlag = false
      },
      addFirst(event) {
        // 解决better-scroll在浏览器点击的问题
        if (!event._constructed) {
          return
        }
        // 为Vue添加不同的属性
        Vue.set(this.food, 'count', 1)
      },
      incrementTotal(target) {
        // 从子控件传递过来触发此方法
        this.$emit('increment', event.target)
      }
    },
    components: {
      cartcontrol,
      split
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .food
    position: fixed
    left: 0
    top: 0
    bottom: 48px
    z-index: 30
    width: 100%
    background: #fff
    &.fade-enter-active, &.fade-leave-active
      transition: all 0.2s linear
      transform: translate3d(0, 0, 0)
    &.fade-enter, &.fade-leave-active
      opacity: 0
      transform: translate3d(100%, 0, 0)
    .image-header
      position: relative
      width: 100%
      height: 0
      /* padding-top / padding-bottom 百分比会以width长度做百分比参考*/
      /* padding-left / padding-right 百分比会以height长度做百分比参考*/
      padding-top: 100%
      /* 由于网络图片的大小是不确定的，所以限制显示的高度宽度有必要*/
      img
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
      .back
        position: absolute
        top: 10px
        left: 0
        .icon-arrow_lift
          display: block
          padding: 10px
          font-size: 20px
          color: #fff
    .content
      position: relative
      padding: 18px
      .title
        line-height: 14px
        margin-bottom: 8px
        font-size: 14px
        font-weight: 700
        color: rgb(7, 17, 27)
      .detail
        margin-bottom: 18px
        line-height: 10px
        height: 10px
        font-size: 0
        .sell-count, .rating
          font-size: 10px
          color: rgb(147, 153, 159)
        .sell-count
          margin-right: 12px
      .price
        font-weight 700
        line-height 24px
        .now
          margin-right 8px
          font-size 14px
          color rgb(240, 20, 20)
        .old
          font-size 10px
          color rgb(147, 153, 159)
          text-decoration line-through
      .cartcontrol-wrapper
        position: absolute
        right: 12px
        bottom: 12px
      .buy
        position: absolute
        right: 18px
        bottom: 18px
        z-index: 10
        height: 24px
        line-height: 24px
        padding: 0 12px
        box-sizing: border-box
        border-radius: 12px
        font-size: 10px
        color: #fff
        background: rgb(0, 160, 220)
        &.buy-enter-active, &.buy-leave-active
          transition: all 0.2s
          opacity: 0
        &.buy-enter, &.buy-leave-active
          opacity: 0
    .info
      padding: 18px
      .title
        line-height: 14px
        margin-bottom: 6px
        font-size: 14px
        color: rgb(7, 17, 27)
        font-weight: 400
      .text
        line-height: 24px
        padding: 0 8px
        font-size: 12px
        color: rgb(77, 85, 93)
</style>
