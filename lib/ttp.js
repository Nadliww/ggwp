const cp = require("child_process");
async function ttp(q) {
var url = cp.execSync(`curl 'https://fontmeme.com/loadme_21.php' \
  -H 'Content-Type: application/x-www-form-urlencoded; charset=UTF-8' \
  -H 'Accept: */*' \
  -H 'X-Requested-With: XMLHttpRequest' \
  -H 'User-Agent: Mozilla/5.0 (Linux; Android 11; M2003J15SC) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Mobile Safari/537.36' \
  -H 'Referer: https://fontmeme.com/cuphead-font/#textstyle' \
  --data-raw 'name=AlegreyaSansSC-Bold.ttf&text=${text}&size=65&style_color=FFFFFF&style_effect=Style-Cupadow&style_pa=&style_ol=&style_col=000000' \
  --compressed`)+''
return url
}

module.exports = { ttp }