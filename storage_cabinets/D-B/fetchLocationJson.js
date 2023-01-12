const fs = require('fs')
JSON_DATA = {
    anti55: JSON.parse(fs.readFileSync('./message/group/antiNo_55.json')),
    anti9: JSON.parse(fs.readFileSync('./message/group/antiNo_9.json')),
    welcome: JSON.parse(fs.readFileSync('./message/group/welcome.json'))
}

exports.anti55JSON = JSON_DATA.anti55;
exports.anti9JSON = JSON_DATA.anti9;
exports.welcomeJSON = JSON_DATA.welcome;
