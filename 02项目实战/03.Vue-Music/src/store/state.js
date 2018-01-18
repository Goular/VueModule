import {playMode} from '../common/js/config'

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
  currentIndex: -1
}
export default state
