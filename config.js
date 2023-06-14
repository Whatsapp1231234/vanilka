import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['79524197466', 'ZloiAdmiN', true],
  ['79524197466'], 
  ['77072763560'] 
] //Numeros de owner 

global.mods = ['77072763560'] 
global.prems = ['77072763560']
global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a', 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.packname = 'VaNiLkA' 
global.author = '@fg98' 
global.fgig = '▢ https://chat.whatsapp.com/FoDRpFvrXfY2M9RufqAGCq\n' 
global.dygp = 'https://chat.whatsapp.com/FoDRpFvrXfY2M9RufqAGCq'
global.fgsc = 'https://chat.whatsapp.com/FoDRpFvrXfY2M9RufqAGCq' 
global.fgyt = 'https://chat.whatsapp.com/FoDRpFvrXfY2M9RufqAGCq'
global.fgpyp = 'https://chat.whatsapp.com/FoDRpFvrXfY2M9RufqAGCq'
global.fglog = 'https://i.imgur.com/Owmb93c.png' 

global.wait = '*⌛ _Загрузка..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
