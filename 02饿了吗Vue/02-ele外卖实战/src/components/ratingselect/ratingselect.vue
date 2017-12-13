<template>

</template>

<script text="text/ecmascript-6">
  const POSITIVE = 0
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

</style>
