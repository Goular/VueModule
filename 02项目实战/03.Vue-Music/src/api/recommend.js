import jsonp from 'common/js/jsonp'
import axios from 'axios'
import {commonParams, options} from './config'

// 获取推荐内容
export function getRecommend() {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

  // 对象合并
  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  })

  return jsonp(url, data, options)
}

// 获取歌单内容
export function getDiscList() {
  // 慕课网的项目网址
  // let url = '/api/getDiscList'
  let url = 'https://blog.jiagongwu.com/api/music/getDiscList'
  const data = Object.assign({}, commonParams, {
    platform: 'yqq',
    hostUin: 0,
    sin: 0,
    ein: 29,
    sortId: 5,
    needNewCode: 0,
    categoryId: 10000000,
    rnd: Math.random(),
    format: 'json'
  })
  return axios.get(url, {params: data}).then((res) => {
    return Promise.resolve(res.data)
  })
}

// 获取推荐的歌单信息
export function getSongList(disstid) {
  const url = 'https://blog.jiagongwu.com/api/music/getSongList/' + disstid

  const data = Object.assign({}, commonParams, {
    uin: 0,
    format: 'json',
    platform: 'h5',
    needNewCode: 1,
    new_format: 1,
    pic: 500,
    disstid,
    type: 1,
    json: 1,
    utf8: 1,
    onlysong: 0,
    picmid: 1,
    nosign: 1,
    song_begin: 0,
    song_num: 15
  })

  return axios.get(url, {params: data}).then((res) => {
    let data = res.data
    if (data.status === 1) {
      let ret = data.data
      return Promise.resolve(JSON.parse(ret))
    }
  })
}
