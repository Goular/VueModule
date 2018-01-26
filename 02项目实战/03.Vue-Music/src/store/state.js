import {playMode} from '../common/js/config'
import {loadSearch, loadPlay, loadFavorite} from '../common/js/cache'

const state = {
  singer: {},
  // 是否进行播放
  playing: false,
  // 是否进行全屏设置
  fullScreen: false,
  // 默认歌手的未排序的列表
  playList: [],
  // 播放排序后的列表
  sequenceList: [],
  // 播放模式
  mode: playMode.sequence,
  // 当前播放个的索引
  currentIndex: -1,
  // 添加歌单的对象
  disc: {},
  // 获取顶部列表
  topList: {},
  // 浏览历史
  searchHistory: loadSearch(),
  // 播放历史
  playHistory: loadPlay(),
  // 喜爱歌曲的列表
  favoriteList: loadFavorite()
}
export default state
