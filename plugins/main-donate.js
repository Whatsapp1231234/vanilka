
let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `
    ╭──❉〔⳹ ❋ཻུ۪۪⸙ *МЕНЮ* ⳹ ❋ཻུ۪۪ 〕
    │        ➸ *>>АДМИН<<*
    │
    │😎 включить антиссылку
    │😎 выключить антиссылку
    │😎 включить антиараб
    │😎 выключить антиараб
    │😎 включить антиудаление
    │😎 выключить антиудаление 
    │😎 группу открыть/закрыть 
    │😎 снести @
    │😎 внимание 
    │😎 вызов
    │😎 инфогруппы
    │😎 админы
    │😎 молчуны
    │😎 ссылка
    │😎 сброситьссылку
    │
    │    ➸ *>>УЧАСТНИКИ <<*
    │
    │😎 стикер/с
    │😎 плей
    │😎 украсть
    │😎 поцелуй
    │😎 хлопок
    │😎 подщечину
    │😎 тикток
    │😎 картинки
    │😎 поиск
    │😎 поиск2
    │
    │    ➸ *>>СОЗДАТЕЛЬ<<*
    │
    │😎 датьпрем @ 
    │😎 удалитьпрем @ 
    │😎 банчат
    │😎 листбан
    │😎 бан @ 
    │😎 объявления 
    │😎 кеш
    │😎 перезагрузка
    │😎 обновить
    │😎 чатаренды
    │😎 срок
    ╰─────────❉
    
    *❏ 「 Ванилька」:*
`
let img = 'https://sun6-23.userapi.com/impg/G3keES8_SlsWTeN2h83GN4toL_yxwsn5y_FiXA/-fQ4cNXqLvo.jpg?size=720x714&quality=95&sign=acc80065d0fadc46fe9615a2299916ae&c_uniq_tag=IVla3iE7hhoac1wZJsfUUTo4QH5E5aCYKf_4VKVPWng&type=album'
conn.sendFile(m.chat, img, 'img.jpg', don, m)

}
handler.help = ['менюю']
handler.tags = ['main']
handler.command = ['менюю',] 

export default handler
