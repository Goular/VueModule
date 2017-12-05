<template>
  <div class="goods">
    <div class="menu-wrapper">
      <ul>
        <li v-for="(item,index) in goods" class="menu-item border-1px">
          <span clas="text">
            <span v-show="item.type>0" class="icon" :class="classMap[item.type]"></span>{{item.name}}
          </span>
        </li>
      </ul>
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
