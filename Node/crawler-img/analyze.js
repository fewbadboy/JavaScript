const cheerio = require('cheerio')
function findImg(dom, callback) {
  let $ = cheerio.load(dom)
  $('.card-img-top', '.masonry ').each(function(i, ele) {
    let src= 'https:' + $(this).attr('src')
    callback(src, i)
  })
}

module.exports = {
  findImg
}