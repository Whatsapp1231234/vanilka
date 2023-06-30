
let handler = async (m, {conn, usedPrefix}) => {
	
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let user = global.db.data.users[who]
    if (!(who in global.db.data.users)) throw `✳️ Пользователя нет в моей базе данных`
    conn.reply(m.chat, `
┌───⊷ *БАЛАНС* ⊶
▢ *📌Имя* : _@${who.split('@')[0]}_
▢ *💎Алмазы* : _${user.diamond}_
▢ *⬆️XP* : _Общий ${user.exp}_
└──────────────

`)
}
handler.help = ['баланс']
handler.tags = ['econ']
handler.command = ['bal', 'diamantes', 'diamond', 'баланс'] 

export default handler
