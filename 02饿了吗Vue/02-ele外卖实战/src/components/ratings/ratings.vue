<template>
  <div class="ratings">
    <div class="ratings-content">
      <div class="overview">
        <div class="overview-left">
          <h1 class="score">{{seller.score}}</h1>
          <div class="title">综合评分</div>
          <div class="rank">高于周边商家{{seller.rankRate}}%</div>
        </div>
        <div class="overview-right">
          <div class="score-wrapper">
            <span class="title">服务态度</span>
            <star :size="36" :score="seller.serviceScore"></star>
            <span class="score">{{seller.serviceScore}}</span>
          </div>
          <div class="score-wrapper">
            <span class="title">商品评分</span>
            <star :size="36" :score="seller.foodScore"></star>
            <span class="score">{{seller.foodScore}}</span>
          </div>
          <div class="delivery-wrapper">
            <span class="title">送达时间</span>
            <span class="delivery">{{seller.deliveryTime}}分钟</span>
          </div>
        </div>
      </div>
      <split></split>
      <ratingselect :ratings="ratings" :select-type="selectType"
                    :only-content="onlyContent"></ratingselect>
    </div>
  </div>
</template>

<script text="text/ecmascript-6">
  import star from 'components/star/star'
  import ratingselect from 'components/ratingselect/ratingselect'
  import split from 'components/split/split'

  // eslint-disable-next-line
  const POSITIVE = 0
  // eslint-disable-next-line
  const NEGATIVE = 1
  const ALL = 2
  const ERR_OK = 1

  export default {
    props: {
      seller: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        ratings: [],
        showFlag: false,
        selectType: ALL,
        onlyContent: true
      }
    },
    mounted() {
      this.$http.get('http://www.blog.com/api/ratings').then(response => {
        let obj = response.body
        if (obj.status === ERR_OK) {
          this.ratings = obj.data
          this.$nextTick(() => {
            // this._initScroll()
            // this._calculateHeight()
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
    components: {
      star,
      ratingselect,
      split
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet">
  .ratings
    position: absolute
    top: 174px
    bottom: 0
    left: 0
    width: 100%
    overflow: hidden
    .overview
      display: flex
      padding: 18px 0
      .overview-left
        flex: 0 0 137px
        padding: 6px 0
        width: 137px
        border-right: 1px solid rgba(7, 17, 27, 0.1)
        text-align: center
        /* 解决在IPhone5下显示异常的问题，需要采用媒体搜索*/
        @media only screen and (max-width: 320px)
          flex: 0 0 110px
          width: 110px
        .score
          margin-bottom: 6px
          line-height: 28px
          font-size: 24px
          color: rgb(255, 153, 0)
        .title
          margin-bottom: 8px
          line-height: 12px
          font-size: 12px
          color: rgb(7, 17, 27)
        .rank
          line-height: 10px
          font-size: 10px
          color: rgb(147, 153, 159)
      .overview-right
        flex 1
        padding 6px 0 6px 24px
        @media only screen and (max-width 320px)
          padding-left 6px
        .score-wrapper
          line-height 18px
          margin-top 8px
          font-size 0
          .title
            display inline-block
            vertical-align top
            line-height 18px
            font-size 12px
            color rgb(7, 17, 27)
          .star
            display inline-block
            margin 0 12px
            vertical-align top
          .score
            display inline-block
            vertical-align top
            line-height 18px
            font-size 12px
            color rgb(266, 153, 0)
        .delivery-wrapper
          font-size 0
          .title
            display inline-block
            vertical-align top
            line-height 18px
            font-size 12px
            color rgb(7, 17, 27)
          .delivery
            display inline-block
            margin-left 12px
            vertical-align top
            line-height 18px
            font-size 12px
            color rgb(147, 153, 159)
</style>
