// 异步操作与异步响应
import * as types from './mutation-types'
import {playMode} from '../common/js/config'
import {shuffle} from '../common/js/utils'

export const selectPlay = function ({commit}, {list, index}) {
  commit(types.SET_SEQUENCE_LIST, list)
  commit(types.SET_PLAYLIST, list)
  commit(types.SET_CURRENT_INDEX, index)
  commit(types.SET_FULL_SCREEN, true)
  commit(types.SET_PLAYING_STATE, true)
}

export const randomPlay = function ({commit}, {list}) {
  commit()
}
