import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'

/**Owner number**/
global.owner = [
  /*['6282328303332', '️<Owner>'],
  ['62895605887712', '<Admin>'],
  ['6283190403329', '<Moderator>'],*/
  ['6282321720820', '<TEAMCREATORLOKPADI>', true ]
  // [number, dia creator/owner?, dia developer?]
] // Put your number here
global.mods = [] // Want some help?
global.prems = ['6282321720820'] // Premium user has unlimited limit
global.girlfren = ['6281376576713'] // Your gf/pacar

//Api website
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  zenz: 'https://zenzapis.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll',
  'https://zenzapis.xyz': 'BagasPrdn'
}

// Sticker WM
global.packname = 'TEAMCREATORLOKPADI'
global.author = 'Muhammad Andriani'
global.wm = "TEAMCREATORLOKPADI"
global.multiplier = 69 // The higher, The harder levelup

//
global.eror = 'eror bodo'
global.wait = 'Process...'
global.render = 'wait render'
global.webs = 'ngapain bang??'//Your Website
global.logo = "https://telegra.ph/file/af8b3e6b324a00f73ea83.png"//Your logo
global.gcwangsaf = "https://chat.whatsapp.com/IO1wWOPlB5j6hcYM5IdC9f"//Link Group whatsapp

//Donasi
global.saweria = ""// website saweria.co
global.dana = [""]
global.pulsa = [""]//pulsa here
global.trakteer = ""//Link url https://
global.paypal = ""//paypal email
global.gopay = ""//Numver for Payment digital Gopay Gojek


//Rpg
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: '🧬',
      limit: '🌌',
      health: '❤️',
      strength: '🦹‍♀️',
      mana: '🪄',
      stamina: '⚡',
      agility: '🤸‍♂️',
      intelligence: '🧠',
      exp: '✉️',
      pointxp: '📧',
      money: '💵',
      potion: '🥤',
      gems: '🍀',
      crystal: '🔮',
      diamond: '💎',
      darkcrystal: '♠️',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      trash: '🗑',
      armor: '🥼',
      sword: '🗡️',
      arc: '🏹',
      bow: '🏹',
      magicwand: '⚕️',
      keyiron: '🗝️',
      keygold: '🔑',
      knife: '🔪',
      wood: '🪵',
      rock: '🪨',
      string: '🕸️',
      horse: '🐎',
      cat: '🐈',
      dog: '🐕',
      fox: '🦊',
      cow: '🐄',
      bull: '🐃',
      tiger: '🐅',
      lion: '🦁',
      giraffe: '🦒',
      elephant: '🐘',
      snake: '🐍',
      dragon: '🐉',
      chicken: '🐓',
      petFood: '🍖',
      iron: '⛓️',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}


let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
