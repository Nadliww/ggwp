let fs = require('fs')
const { UploadFileUgu } = require('../lib/uploader')

let teleph = async(M, prefix, quoted, mime, msg, bob) => {
try {
let q1 = M.quoted ? M.quoted : M
if (!mime)return M.reply(`Balas Video/Image Dengan Caption !sticker`)
if (/image/.test(mime)) {
let buff = await bob.downloadAndSaveMediaMessage(msg.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage, 'image')
 let teph = await UploadFileUgu(buff)
M.reply(`Buat apa tuh om?👀\n\n_hash : ${teph.hash}_\n_name : ${teph.name}_\n_url : ${teph.url}_\n_size : ${teph.size}_`)
await fs.unlinkSync(buff)
}
} catch (e) {
 M.reply('「 ❗ 」reply media')
}
}

module.exports = teleph
