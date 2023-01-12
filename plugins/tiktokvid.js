let fs = require('fs')
let tiktok = require('../lib/tiktok2')

let ttvid = async(M, q, bob ) => {

 if(!q)return M.reply('masukan parameter url')
 tiktok(q).then(data =>{
 console.log(data)
 })
 
 }
module.exports = ttvid