<template>
  <div class="goods">
    <div class="menu-wrapper">

    </div>
    <div class="foods-wrapper"></div>
  </div>
</template>

<script text="text/ecmascript-6">
  const ERR_OK = 1
  export default {
    props: {
      seller: {
        type: Object
      }
    },
    data() {
      return {
        goods: []
      }
    },
    mounted() {
      this.$http.get('http://www.blog.com/api/goods').then(response => {
        let obj = response.body
        if (obj.status === ERR_OK) {
          this.goods = obj.data
        }
      }, response => {
        // error callback
        let obj = response.body
        console.dir(obj)
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet">
  @import "goods.styl"
</style>
