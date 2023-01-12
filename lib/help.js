const fs = require('fs')
const { getLimit, getBalance, cekGLimit } = require("../lib/limit")


exports.listMenu = ( listmenu, M, sender, prefix, pushname, isOwner, isPremium, balance, limit, limitCount, glimit, gcount ) => {
var Media = ""
var Owner = ""
var Asupan = ""
var Group = ""
var Topup = ""
var Islam = ""
var Primbon
var Convert = ""
var Download = ""
var Random = ""
var TextPro = ""
var Fun = ""
var Stalk = "" 
var Game = ""
var Usr = ""
var Anime = ""
var Gen = ""
var number = 0


Object.keys(listmenu.media).forEach((i) => {number++
Media += `\n  ≻ *${prefix}` + listmenu.media[i] + "*"})

Object.keys(listmenu.owner).forEach((i) => {number++
Owner += `\n  ≻ *${prefix}` + listmenu.owner[i] + "*"})

Object.keys(listmenu.fun).forEach((i) => {number++
Fun += `\n  ≻ *${prefix}` + listmenu.fun[i] + "*"})

Object.keys(listmenu.primbon).forEach((i) => {number++
Primbon += `\n  ≻ *${prefix}` + listmenu.primbon[i] + "*"})

Object.keys(listmenu.islam).forEach((i) => {number++
Islam += `\n  ≻ *${prefix}` + listmenu.islam[i] + "*"})

Object.keys(listmenu.convert).forEach((i) => {number++
Convert += `\n  ≻ *${prefix}` + listmenu.convert[i] + "*"})

Object.keys(listmenu.asupan).forEach((i) => {number++
Asupan += `\n  ≻ *${prefix}` + listmenu.asupan[i] + "*"})

Object.keys(listmenu.group).forEach((i) => {number++
Group += `\n  ≻ *${prefix}` + listmenu.group[i] + "*"})

Object.keys(listmenu.topup).forEach((i) => {number++
Topup += `\n  ≻ *${prefix}` + listmenu.topup[i] + "*"})

Object.keys(listmenu.textpro).forEach((i) => {number++
TextPro += `\n  ≻ *${prefix}` + listmenu.textpro[i] + "*"})

Object.keys(listmenu.random).forEach((i) => {number++
Random += `\n  ≻ *${prefix}` + listmenu.random[i] + "*"})

Object.keys(listmenu.stalker).forEach((i) => {number++
Stalk += `\n  ≻ *${prefix}` + listmenu.stalker[i] + "*"})

Object.keys(listmenu.download).forEach((i) => {number++
Download += `\n  ≻ *${prefix}` + listmenu.download[i] + "*"})

Object.keys(listmenu.user_data).forEach((i) => {number++
Usr += `\n  ≻ *${prefix}` + listmenu.user_data[i] + "*"})

Object.keys(listmenu.anime).forEach((i) => {number++
Anime += `\n  ≻ *${prefix}` + listmenu.anime[i] + "*"})

Object.keys(listmenu.generator).forEach((i) => {number++
Gen += `\n  ≻ *${prefix}` + listmenu.generator[i] + "*"})

Object.keys(listmenu.game).forEach((i) => {number++
Game += `\n  ≻ *${prefix}` + listmenu.game[i] + "*"})

return `Kategori User : ${Usr}

Kategori Islam : ${Islam}

Kategori Anime : ${Anime}

Kategori Random :  ${Random}

Kategori TextPro : ${TextPro}

Kategori TopUp : ${Topup}

Kategori Stalk :  ${Stalk}

Kategori Fun = ${Fun}

Kategori Primbon : ${Primbon}

Karegori Media : ${Media}

Kategori Convert : ${Convert}

Kategori Asupan : ${Asupan}

Kategori Download :  ${Download}

Kategori Group :  ${Group}

Kategori Owner :  ${Owner}

Kategori Game : ${Game}

Kategori Generator : ${Gen}
`
}