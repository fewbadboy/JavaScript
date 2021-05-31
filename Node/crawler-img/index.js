const request = require('request')
const path = require('path')
const fs = require('fs')
const config = require('./config')
const analyze = require('./analyze')

function start() {
  request(config.url, function(err, res, body) {
    if(!err && res) {
      analyze.findImg(body, downLoad)
    }
  })
}

function downLoad(url, i) {
  let ext = url.split('.').pop()
  request(url).pipe(fs.createWriteStream(path.join(config.imgDir, i + '.' + ext), {
    'encoding': 'utf8'
  }))
}

start()