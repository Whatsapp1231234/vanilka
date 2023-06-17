//import db from '../lib/database.js'

let handler = async (m, { conn, text }) => {
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw '✳️ Пометти пользователя'
  let txt = text.replace('@' + who.split`@`[0], '').trim()
  if (!txt) throw '✳️ Введите количество * опыта*, которое вы хотите добавить'
  if (isNaN(txt)) throw ' 🔢 только цифры'
  let xp = parseInt(txt)
  let exp = xp
  
  if (exp < 1) throw '✳️ Минимально  *1*'
  let users = global.db.data.users
  users[who].exp += xp

  await m.reply(`≡ *XPВСТАВКА*
┌──────────────
▢  *Общий:* ${xp}
└──────────────`)
 conn.fakeReply(m.chat, `▢ Recibiste \n\n *+${xp} XP*`, who, m.text)
}

handler.help = ['addxp <@user>']
handler.tags = ['econ']
handler.command = ['addxp'] 
handler.rowner = true

export default handler

