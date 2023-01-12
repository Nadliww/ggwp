let { getBuffer, getRandom } = require('../lib/myfunc')
let { youtube } = require('../lib/scrape')
let fs = require('fs')

let ytvideo = async(M, reply, q, bobSend, prefix, msg, bob) => {
try {
   if(!q)return reply('link?')      
   let nuh = await youtube(q)
      const { title, link, size, quality,  } = nuh                 
  await getBuffer(link)
      .then(async result => {
   	    let ranV = getRandom('.mp4')
        await fs.writeFileSync('./lib/' + ranV, result)
        const buff = './lib/' + ranV    
        console.log(result)                

     if (link === 'undefined') return msg.reply('Link tidak dapat di akses!')
     msg.reply('Sending.....') 
         let vid = {
          video: {
           url: buff
           }, 
          caption:"*[❗] Done️*\n" + '```' + title + '```',     
          contextInfo:{
           externalAdReply:{
             showAdAttribution: true,
             mediaType: 1
            }
           }
         }
        bob.sendMessage(M.chat, vid, { quoted : msg })
       setTimeout(() => { fs.unlinkSync(buff) }, 10000)

       })
   } catch (e) {
     M.reply('「 ❗ 」error!')
}
}
module.exports = ytvideo