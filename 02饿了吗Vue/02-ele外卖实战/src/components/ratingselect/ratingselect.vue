<template>
  <div class="ratingselect">
    <div class="rating-type border-1px">
      <span class="block positive" :class="{'active':selectType===2}">{{desc.all}}<span class="count">47</span></span>
      <span class="block positive" :class="{'active':selectType===0}">{{desc.positive}}<span
        class="count">50</span></span>
      <span class="block negative" :class="{'active':selectType===1}">{{desc.negative}}<span
        class="count">16</span></span>
    </div>
    <div class="switch" :class="{'on':onlyContent}">
      <span class="icon-check_circle"></span>
      <span class="text">只看到有内容的评价</span>
    </div>
  </div>
</template>

<script text="text/ecmascript-6">
  // eslint-disable-next-line
  const POSITIVE = 0
  // eslint-disable-next-line
  const NEGATIVE = 1
  const ALL = 2
  export default {
    props: {
      ratings: {
        type: Array,
        default() {
          return []
        }
      },
      selectType: {
        type: Number,
        default: ALL
      },
      onlyContent: {
        type: Boolean,
        default: false
      },
      desc: {
        type: Object,
        default() {
          return {
            all: '全部',
            positive: '满意',
            negative: '不满意'
          }
        }
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"

  .ratingselect
    .rating-type
      padding: 18px 0
      margin: 0 18px
      border-1px(rgba(7, 17, 27, 0.1))
      font-size: 0
      .block
        display: inline-block
        padding: 8px 12px
        margin-right: 8px
        border-radius: 1px
        line-height: 16px
        font-size: 12px
        color: rgb(77, 85, 93)
        &.active
          color: #fff
        .count
          margin-left: 2px
          font-size: 8px
        &.positive
          background: rgba(0, 160, 220, 0.2)
          &.active
            background: rgb(0, 160, 220)
        &.negative
          background: rgba(77, 85, 93, 0.2)
          &.active
            background: rgb(77, 85, 93)
    .switch
      padding: 12px
      line-height: 24px
      font-size: 12px
      color: rgb(147, 153, 159)
      border: 1px solid rgba(1, 17, 27, 0.1)
      font-size: 0
      &.on
        .icon-check_circle
          color: #00c850
      .icon-check_circle
        display: inline-block
        vertical-align: top
        margin-right: 4px
        font-size: 24px
      .text
        font-size: 12px
</style>
