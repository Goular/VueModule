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
    url: `http://dl.stream.qqmusic.qq.com/C400${musicData.songmid}.m4a?fromtag=38&vkey=19DEBA917CEC1243B2D2749F8D2F1450CE0D680CDF372957102798685D13C1F23E3F0A5B6CDD93A46ED1336B7602128E3A27591BC9E47174&guid=15011688`

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
