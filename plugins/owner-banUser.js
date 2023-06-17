//import db from '../lib/database.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
   let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    else who = m.chat
    let user = global.db.data.users[who]
    if (!who) throw `✳️ Пометьте или упомяните кого-нибудь\n\n📌 Ejemplo : ${usedPrefix + command} @user`
    let users = global.db.data.users
    users[who].banned = true
    conn.reply(m.chat, `
✅ BANEADO

───────────
@${who.split`@`[0]} вы больше не сможете использовать мои команды `, m, { mentions: [who] })
}
handler.help = ['бан @user']
handler.tags = ['owner']
handler.command = /^бан$/i
handler.rowner = true

export default handler
