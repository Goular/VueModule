<template>
  <div v-show="showFlag" class="food">

  </div>
</template>

<script text="text/ecmascript-6">
  export default {
    data() {
      return {
        showFlag: false
      }
    },
    props: {
      food: {
        type: Object
      }
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

</style>
