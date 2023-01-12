const fs = require('fs')

// report owner
global.report = {
        err: '*REPORT ERROR FOTUR*',
}


global.raw = {
       fbz: 'https://raw.githubusercontent.com/FebriansyahXd/mentahan/master',
}


// Nomor Owner
global.ownerNumber = ["628811929177@s.whatsapp.net"]
global.owner = ["628811929177"]
global.ownerName = ["Aprilia"]


// Nama Bot
global.botName = 'Loli - Bot'


// EXIF
global.packname = 'LOLI'
global.author = 'Aprilia'


// OTHERS
global.sessionName = 'Boby'
global.Mode = 'Public'
global.mess = {
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    query: 'Command harus disertai Query..',
    link: 'Command harus disertai Link/Url',
    wait: '```「▰▰▰▱▱▱▱▱▱▱」Loading...```',
    done: 'Berhasil..',
    wrongFormat: 'Perintah Salah!!\nSertakan Link setelah Command..',
    example1: 'Welcome @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @subject (Group Name)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)'
,
    example2: 'Good Bye @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @subject (Group Name)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)',
    rules : `Isi Sendiri!!`
}



// Path Img/Media
global.pathImg = fs.readFileSync('./media/boby.jpg')
global.fakeImg = fs.readFileSync('./media/boby.jpg')

//By Papah-Chan
/*
import fs from 'fs'
import fetch from 'node-fetch'
import moment from 'moment-timezone'
import knights from 'knights-canvas'

let handler = m => m
handler.all = async function (m) {
    let name = await conn.getName(m.sender)
    let sap = ['Hai', 'Ohayo', 'Kyaa', 'Halo', 'Nyann']
    let sapa = ['Hai', 'Ohayo', 'Kyaa', 'Halo', 'Nyann'].getRandom()
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let ppa = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
	let pp = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
	try {
		pp = await this.profilePictureUrl(m.sender, 'image')
	} catch (e) {
	} finally {
		
        //global.bg = await (await fetch(img)).buffer()
		global.doc = pickRandom(["application/vnd.ms-excel", "application/vnd.openxmlformats-officedocument.presentationml.presentation", "application/msword", "application/pdf"])
		
		// Module 
		global.fetch = import('node-fetch')
		global.bochil = import('@bochilteam/scraper')
		
		const _uptime = process.uptime() * 1000
        
		// Ini untuk command crator/owner
		global.kontak2 = [
         [owner[0], await this.getName(owner[0] + '@s.whatsapp.net'), 'ᴅᴇᴠᴇʟᴏᴩᴇʀ ʙᴏᴛ', 'mr.familia13@gmail.com', true],
         [owner[1], await this.getName(owner[1] + '@s.whatsapp.net'), 'ᴅᴇᴠᴇʟᴏᴩᴇʀ ʙᴏᴛ', 'FokusDotId13@gmail.com', true], // Kalo mau di tambah tinggal copy 1baris ini di tempel di bawahnya trs di edit dikit!
        ]

		// ucapan ini mah
		global.ucapan = ucapan()
		
		// pesan sementara
		global.ephemeral = '86400' // 86400 = 24jam, kalo ingin di hilangkan ganti '86400' jadi 'null' atau ''
		let ente = await conn.resize(hwaifu.getRandom(), 300, 150)
		// Acumalaka
		global.terkadang = ente
		// externalAdReply atau text with thumbnail. gatau bahasa Inggris? coba translate!
		global.adReply = {
			contextInfo: {
				forwardingScore: 9999,
				//isForwarded: true, // ini biar ada tulisannya diteruskan berkali-kali, jika ingin di hilangkan ganti true menjadi false
				externalAdReply: { // Bagian ini sesuka kalian berkreasi :'v
                    showAdAttribution: true,
					title: global.ucapan,
					body: "Hallo " + name,
					mediaUrl: sgc,
					description: 'simple bot esm',
					previewType: "PHOTO",
					thumbnail: await (await fetch(pp)).buffer(),
					sourceUrl: "https://github.com/WH-MODS-BOT",					
				}
			}
		}
//----------------------------------------------------------------------------------------------------------------------------------------------------------------
	//	global.fakeig = {
    //     contextInfo: { externalAdReply: { showAdAttribution: true,
  //          mediaUrl: "https://Instagram.com/_ctzhid",
   //         mediaType: "VIDEO",
   //         description: "https://Instagram.com/_ctzhid", 
   //         title: 'Simple Bot VAMSES',
   //         body: wm,
   //         thumbnailUrl: pp,
    //        sourceUrl: sgc
//    }
//    } }
		global.fakeig = {
		fileLength: fsizedoc, seconds: fsizedoc,
				contextInfo: {
					externalAdReply: {
						showAdAttribution: true,
						mediaUrl: sig,
						mediaType: 'VIDEO',
						description: 'Follow: ' + sig,
						title: '👋 ' + sapa + ' Kak :> ' + name,
						body: botdate,
						thumbnailUrl: pp,
						sourceUrl: sgc
					}
				}
			}
		global.fakefb = {
			fileLength: fsizedoc, seconds: fsizedoc,
				contextInfo: {
					externalAdReply: {
						showAdAttribution: true,
						mediaUrl: sfb,
						mediaType: 'VIDEO',
						description: 'Follow: ' + sfb,
						title: '👋 ' + sapa + ' Kak :> ' + name,
						body: botdate,
						thumbnailUrl: pp,
						sourceUrl: sfb
					}
				}
			}
			global.faketik = {
			fileLength: fsizedoc, seconds: fsizedoc,
				contextInfo: {
					externalAdReply: {
						showAdAttribution: true,
						mediaUrl: snh,
						mediaType: 'VIDEO',
						description: 'Follow: ' + snh,
						title: '👋 ' + sapa + ' Kak :> ' + name,
						body: botdate,
						thumbnailUrl: pp,
						sourceUrl: snh
					}
				}
			}
			global.fakeyt = {
			fileLength: fsizedoc, seconds: fsizedoc,
				contextInfo: {
					externalAdReply: {
						showAdAttribution: true,
						mediaUrl: syt,
						mediaType: 'VIDEO',
						description: 'Follow: ' + syt,
						title: '👋 ' + sapa + ' Kak :> ' + name,
						body: botdate,
						thumbnailUrl: pp,
						sourceUrl: syt
					}
				}
			}
//----------------------------------------------------------------------------------------------------------------------------------------------------------------
		// Fake 🤥
		global.ftroli = { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message: { orderMessage: { itemCount: 9999999999999999999999999999999999999999999999999999999, status: 1, surface: 1, message: wm, orderTitle: wm, sellerJid: '0@s.whatsapp.net' } } }
//----------------------------------------------------------------------------------------------------------------------------------------------------------------
		global.fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg'), thumbnail: fs.readFileSync('./thumbnail.jpg'),sendEphemeral: true}}}
//----------------------------------------------------------------------------------------------------------------------------------------------------------------
        global.fvn = {
            key: { 
                 fromMe: false,
                 participant: `0@s.whatsapp.net`, ...(m.chat ? 
            { remoteJid: "6289508503105-1625305606@g.us" } : {}) 
                       },
            message: { 
               audioMessage: {
                        mimetype:'audio/ogg; codecs=opus',
                        seconds: 999999999999,
                        ptt: true
                               }
                             } 
                            }
//----------------------------------------------------------------------------------------------------------------------------------------------------------------
                global.ftextt = {
            key: { 
                 fromMe: false,
                 participant: `0@s.whatsapp.net`, ...(m.chat ? 
            { remoteJid: "6289508503105-1625305606@g.us" } : {}) 
                       },
            message: { 
               extendedTextMessage: {
                        text:wm,
                        title: wm,
                        jpegThumbnail: fs.readFileSync('./thumbnail.jpg')
                               }
                             } 
                            }
//----------------------------------------------------------------------------------------------------------------------------------------------------------------
                  global.fliveLoc = {
            key:
            { fromMe: false,
            participant: `0@s.whatsapp.net`, ...(m.chat  ? 
            { remoteJid: "status@broadcast" } : {}) },
            message: { "liveLocationMessage": { "caption":"by : VAMSES","h": `${wm}`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg')}}
           }
//----------------------------------------------------------------------------------------------------------------------------------------------------------------               
                  global.fliveLoc2 = {
            key:
            { fromMe: false,
            participant: `0@s.whatsapp.net`, ...(m.chat ? 
            { remoteJid: "status@broadcast" } : {}) },
            message: { "liveLocationMessage": { "title": "VAMSES","h": wm, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg')}}
           }
//----------------------------------------------------------------------------------------------------------------------------------------------------------------               
                   global.ftoko = {
       key: {
                   fromMe: false,
                   participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "6289508503105@s.whatsapp.net" } : {})
               },
               message: {
                   productMessage: {
                       product: {
                           productImage:{
                               mimetype: "image/jpeg",
                               jpegThumbnail: fs.readFileSync('./thumbnail.jpg') //Gambarnye
                           },
                           title: wm, //Kasih namalu 
                           description: "Simple Bot Esm", 
                           currencyCode: "USD",
                           priceAmount1000: "20000000",
                           retailerId: "Ghost",
                           productImageCount: 1
                       },
                           businessOwnerJid: `0@s.whatsapp.net`
               }
           }
       }
//---------------------------------------------------------------------------------------------------------------------------------------------------------------- 
                     global.fdocs = {
           key : {
                  participant : '0@s.whatsapp.net'
                               },
              message: {
                           documentMessage: {
                           title: wm, 
                           jpegThumbnail: fs.readFileSync('./thumbnail.jpg')
                                 }
                               }
                             }
//----------------------------------------------------------------------------------------------------------------------------------------------------------------               
                    global.fgclink = {
           key : {
               fromMe : false,
               participant: '0@s.whatsapp.net',
               remoteJid: "0@s.whatsapp.net"
           },
           message: {
               groupInviteMessage: {
                   groupJid: "6289508503105-1625305606@g.us",
                   inviteCode: 'null',
                   groupName: 'Kawan VAMSES', 
                   caption: wm, 
                   jpegThumbnail: fs.readFileSync('./thumbnail.jpg')
               }
           }
       }
//---------------------------------------------------------------------------------------------------------------------------------------------------------------- 
                    global.fgif = {
            key: { 
                 fromMe: false,
                 participant: `0@s.whatsapp.net`, ...(m.chat ? 
            { remoteJid: "6289508503105-1625305606@g.us" } : {}) 
                       },
            message: { 
                        videoMessage: { 
                        title: wm,
                        h: `Hmm`,
                        seconds: '999999999', 
                        gifPlayback: 'true', 
                        caption: wm,
                        jpegThumbnail: fs.readFileSync('./thumbnail.jpg')
                               }
                              }
                             }
//----------------------------------------------------------------------------------------------------------------------------------------------------------------
                global.fvid = {
                                key: {
                                    participant: '0@s.whatsapp.net'
                                },
                                message: {
                                    videoMessage: {
                                        title: wm,
                                        h: `Hmm`,
                                        seconds: 999999999999,
                                        caption: '👋 ' + sap.getRandom() + ' Kak :> ' + name,
                                        jpegThumbnail: fs.readFileSync('./thumbnail.jpg')
                                    }
                                }
                            }
//----------------------------------------------------------------------------------------------------------------------------------------------------------------
                            global.fpoll = {
                                key: {
                                    participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast'
                                },
                                message: {
                                    pollCreationMessage: {
                                        name: '👋 Hay Kak :> ' + name
                                    }
                                }
                            }
//---------------------------------------------------------------------------------------------------------------------------------------------------------------- 
                            global.fpayment = {
                                "key": {
                                    "remoteJid": "0@s.whatsapp.net",
                                    "fromMe": false,
                                    "id": "BAE595C600522C9C",
                                    "participant": "0@s.whatsapp.net"
                                },
                                "message": {
                                    "requestPaymentMessage": {
                                        "currencyCodeIso4217": wm,
                                        "amount1000": fsizedoc,
                                        "requestFrom": "0@s.whatsapp.net",
                                        "noteMessage": {
                                            "extendedTextMessage": {
                                                "text": "Hai Kak " + name
                                            }
                                        },
                                        "expiryTimestamp": fsizedoc,
                                        "amount": {
                                            "value": fsizedoc,
                                            "offset": fsizedoc,
                                            "currencyCode": wm
                                        }
                                    }
                                }
                            }
//---------------------------------------------------------------------------------------------------------------------------------------------------------------- 
        let pft = [global.ftroli, global.fkontak, global.fpayment, global.fvn, global.ftextt, global.fliveLoc, global.fliveLoc2, global.ftoko, global.fdocs, global.fgclink, global.fgif, global.fvid, global.fpoll]
        global.fakes = pft.getRandom()
    }
}

export default handler 

function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    let res = "Selamat malam 🌙"
    if (time >= 4) {
        res = "Selamat pagi 🌄"
    }
    if (time > 10) {
        res = "Selamat siang ☀️"
    }
    if (time >= 15) {
        res = "Selamat sore 🌅"
    }
    if (time >= 18) {
        res = "Selamat malam 🌙"
    }
    return res
}

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
*/


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update ${__filename}`)
	delete require.cache[file]
	require(file)
})