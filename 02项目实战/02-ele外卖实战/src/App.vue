<template>
  <div>
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <keep-alive>
      <router-view :seller="seller"></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
  import header from './components/header/header.vue'
  import {urlParse} from 'common/js/util'

  const ERR_OK = 1
  export default {
    name: 'app',
    data() {
      return {
        seller: {
          id: (() => {
            let queryParam = urlParse()
            console.log(queryParam)
            return queryParam.id
          })()
        }
      }
    },
    components: {
      'v-header': header
    },
    methods: {},
    mounted() {
      this.$http.get('http://www.blog.com/api/sellers?id=' + this.seller.id).then(response => {
        let obj = response.body
        if (obj.status === ERR_OK) {
          // this.seller = obj.data
          // 由于需要合并seller传递过来的id，如果obj.data直接赋值，会覆盖掉id，所以使用ES6的对象合并
          this.seller = Object.assign({}, this.seller, obj.data)
          console.dir(this.seller)
        }
      }, response => {
        // error callback
        let obj = response.body
        console.dir(obj)
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "common/stylus/mixin.styl"

  .tab
    display: flex
    width: 100%
    height: 40px
    line-height: 40px
    // border-bottom: 1px solid rgba(7, 17, 27, 0.1)
    border-1px(rgba(7, 17, 27, 0.1))
    .tab-item
      flex: 1
      text-align: center
      & > a
        display: block
        font-size: 14px
        color: rgb(77, 85, 93)
        &.active
          color: rgb(240, 20, 20)
</style>
