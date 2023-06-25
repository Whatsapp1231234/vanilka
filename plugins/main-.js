
let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `
    ≡  *Моя создательца ᴮᴼᵀ*

    ▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬
    http://wa.me/+77072763560
    ▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬
    
    *❏ 「Лёлька」:*
`
let img = 'https://sun9-31.userapi.com/c4163/u26607837/82143173/x_d30e21fd.jpg'
conn.sendFile(m.chat, img, 'img.jpg', don, m)

}
handler.help = ['создатель']
handler.tags = ['main']
handler.command = ['создатель',] 

export default handler
