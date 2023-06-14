//import db from '../lib/database.js'

let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
	
const sections = [
   {
	title: `≡ Список опций`,
	rows: [
	{title: "🔮 | Приветствие", rowId: `${usedPrefix + command} приветствие`},
	{title: "🌎 | Public", rowId: `${usedPrefix + command} public`},
	{title: "🔞 | 18+", rowId: `${usedPrefix + command} 18+`},
	{title: "🧬 | Антиараб", rowId: `${usedPrefix + command} антиараб`},
	{title: "🔗 | Антиссылка", rowId: `${usedPrefix + command} антиссылка`},
    {title: "🚫 | Антиудаление", rowId: `${usedPrefix + command} антиудаление`},
	{title: "⏏️ | Автоуровень", rowId: `${usedPrefix + command} автоуровень`},
	{title: "🗣️ | Чатбот", rowId: `${usedPrefix + command} чатбот`},
	{title: "🔎 | Слежка", rowId: `${usedPrefix + command} слежка`},
	{title: "📑 | Документ", rowId: `${usedPrefix + command} документ`},
	{title: "🛡️ | Ботадмин", rowId: `${usedPrefix + command} ботадмин`},
	{title: "💬 | OnlyPv", rowId: `${usedPrefix + command} onlydm`},
	{title: "👥 | OnlyGp", rowId: `${usedPrefix + command} onlygp`}
	]
    },
]

const listMessage = {
  text: '\nСписок доступных для включения и отключения функций',
  footer: fgig,
  title: `≡ Список автоматических функций`,
  buttonText: "Нажми здесь",
  sections
}

  let isEnable = /включить|enable|(turn)?on|1/i.test(command)
  let chat = global.db.data.chats[m.chat]
  let user = global.db.data.users[m.sender]
  let bot = global.db.data.settings[conn.user.jid] || {}
  let type = (args[0] || '').toLowerCase()
  let isAll = false, isUser = false
  switch (type) {
    case 'приветствие':
    case 'bv':
    case 'bienvenida':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.welcome = isEnable
      break
      
      case 'слежка':
      case 'detector':
        if (!m.isGroup) {
         if (!isOwner) {
           global.dfail('group', m, conn)
          throw false
        }
       } else if (!isAdmin) {
         global.dfail('admin', m, conn)
         throw false
       }
       chat.detect = isEnable
     break
    
    case 'антиудаление':
    case 'delete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.delete = !isEnable
      break

    case 'документ':
    case 'documento':
    if (m.isGroup) {
        if (!(isAdmin || isOwner)) return dfail('admin', m, conn)
      }
    chat.useDocument = isEnable
    break
    case 'public':
    case 'publico':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['self'] = !isEnable
      break
    case 'антиссылка':
    case 'antilinkwa':
    case 'antilinkwha':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLink = isEnable
      break
      
      case 'антиараб':
      case 'sololatino':
      case 'onlylatinos':
      case 'onlylat':
      case 'onlylatan':
      case 'sololatan':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.onlyLatinos = isEnable
      break
      
      case 'nsfw':
      case '18+':
       if (m.isGroup) {
         if (!(isAdmin || isOwner)) {
           global.dfail('admin', m, conn)
            throw false
           }}
    chat.nsfw = isEnable          
    break

    case 'автоуровень':
    isUser = true
     user.autolevelup = isEnable
     break
     
     case 'чатбот':
     case 'autosimi':
     case 'autosimsimi':
      isUser = true
      user.chatbot = isEnable
     break
     
    case 'ботадмин':
    case 'restringir':
      isAll = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      bot.restrict = isEnable
      break
    
    case 'onlypv':
    case 'onlydm':
    case 'onlymd':
    case 'solopv':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['pconly'] = isEnable
      break
      
    case 'gponly':
    case 'onlygp':
    case 'grouponly':
    case 'sologp':
    case 'sologrupo':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['gconly'] = isEnable
      break
      
    default:
      if (!/[01]/.test(command)) return m.reply(`
≡ Список автоматических функций

┌─⊷ *Для админов*
▢ приветствие
▢ антиссылка
▢ слежка 
▢ документ
▢ 18+
▢ антиараб
└───────────── 
┌─⊷ *Для пользователей*
▢ автоуровень
▢ чатбот 
└─────────────
┌─⊷ *Для владельца*
▢ public
▢ solopv
▢ sologp
└─────────────
*📌 Пример :*
*${usedPrefix}включить* приветствие
*${usedPrefix}выключить* приветствие
`)
      throw false
}

m.reply(`
✅ *${type}* Функция *${isEnable ? 'Включена' : 'Выключена'}* ${isAll ? 'для бота' : isUser ? '' : 'для группы'}
`.trim()) 

}
handler.help = ['вкл', 'выкл'].map(v => v + 'ючить <опция>')
handler.tags = ['ючить']
handler.command = /^((en|dis)able|(вкл|выкл)ючить|(turn)?o(n|ff)|[01])$/i

export default handler
