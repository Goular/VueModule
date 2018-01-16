import * as types from './mutation-types.js'

// 创建相关的修改方法
const matutations = {
  [types.SET_SINGER](state, singer) {
    state.singer = singer
  }
}
export default matutations
