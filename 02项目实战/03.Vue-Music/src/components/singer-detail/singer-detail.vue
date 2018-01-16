<template>
  <transition name="slide">
    <div class="singer-detail"></div>
  </transition>
</template>

<script text="text/ecmascript-6">
  import {mapGetters} from 'vuex'
  import {getSingerDetail} from '../../api/singer'
  import {ERR_OK} from '../../api/config'

  export default {
    computed: {
      ...mapGetters([
        'singer'
      ])
    },
    created() {
      this._getDetail()
    },
    methods: {
      _getDetail() {
        // 处理边界的常用手段,如果当前页面获取不到页面的singer，那么我们就退出当前的页面,返回到singer页面
        if (!this.singer.id) {
          this.$router.push('/singer')
          return
        }
        getSingerDetail(this.singer.id).then((res) => {
          if (res.code === ERR_OK) {
            console.log(res.data.list)
          }
        })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .singer-detail
    position: fixed
    z-index: 100
    top: 0
    left: 0
    right: 0
    bottom: 0
    background: $color-background

  .slide-enter-active, .slide-leave-active
    transition: all 0.5s

  .slide-enter, slide-leave-to
    transform: translate3d(100%, 0, 0)
</style>
