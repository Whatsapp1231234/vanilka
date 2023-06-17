
let war = global.maxwarn
let handler = async (m, { conn, text, args, groupMetadata, usedPrefix, command }) => {      
        let who
        if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
        else who = m.chat
        if (!who) throw `✳️ Пометьте или упомяните кого-нибудь\n\n📌 например : ${usedPrefix + command} @user`
        if (!(who in global.db.data.users)) throw `✳️ Пользователя нет в моей базе данных`
        let name = conn.getName(m.sender)
        let warn = global.db.data.users[who].warn
        if (warn < war) {
            global.db.data.users[who].warn += 1
            m.reply(`
⚠️ *Пользователь Предупрежден* ⚠️

▢ *Админ:* ${name}
▢ *Пользователь:* @${who.split`@`[0]}
▢ *Предупреждает:* ${warn + 1}/${war}
▢ *Разон:* ${text}`, null, { mentions: [who] }) 
            m.reply(`
⚠️ *РЕКЛАМА* ⚠️
Вы получили предупреждение от администратора

▢ *Предупреждает:* ${warn + 1}/${war} 
Если вы получите *${war}* предупреждения вы будете автоматически удалены из группы`, who)
        } else if (warn == war) {
            global.db.data.users[who].warn = 0
            m.reply(`⛔ Пользователь превысил *${war}* предупреждения, следовательно, будут удалены`)
            await time(3000)
            await conn.groupParticipantsUpdate(m.chat, [who], 'удалить')
            m.reply(`♻️ Вы были исключены из группы *${groupMetadata.subject}* потому что он был предупрежден *${war}* разы`, who)
        }
}
handler.help = ['предуприждение @user']
handler.tags = ['group']
handler.command = ['предуприждение'] 
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler

const time = async (ms) => {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
