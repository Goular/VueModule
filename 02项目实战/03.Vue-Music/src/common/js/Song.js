export default class Song {
  constructor({id, mid, singer, name, album, duration, image, url}) {
    this.id = id
    this.mid = mid
    this.singer = singer
    this.name = name
    this.album = album
    this.duration = duration
    this.image = image
    this.url = url
  }
}

export function createSong(musicData) {
  return new Song({
    id: musicData.songid,
    mid: musicData.songmid,
    singer: filterSinger(musicData.singer),
    name: musicData.songname,
    album: musicData.albumname,
    duration: musicData.interval,
    image: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${musicData.albummid}.jpg?max_age=2592000`,
    // url: `http://ws.stream.qqmusic.qq.com/${musicData.songid}.m4a?fromtag=46`
    // 下面这个地址会经常变，只能到QQ音乐去抓这个网址的规律回来，再去拼接
    url: `http://dl.stream.qqmusic.qq.com/C400${musicData.songmid}.m4a?guid=1375586099&vkey=5BF6AB9DDC4E4F233D0DC9014037575624C37BEE955F32C77E6DA7EF9EDED80BF65D4EFD0181494518223E1E6DFA62CFFE5E34CC31C14CB3`
  })
}

function filterSinger(singer) {
  let ret = []
  if (!singer) {
    return ''
  }
  singer.forEach((s) => {
    ret.push(s.name)
  })
  return ret.join('/')
}
