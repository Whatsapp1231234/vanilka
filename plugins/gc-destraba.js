let handler = async (m, { conn }) => {
m.reply(global.destraba)
}
handler.command = /^(список)$/i
export default handler

global.destraba = `

ღ꧁ *КОМАНДЫ ВАНИЛЬКИ* ꧂ღ
>>>>>>>>>>>>>>>>>>>>>>
💟 #группу закрыть/открыть
💟 #включить/выключить антиссылка
💟 #включить/выключить антиссылка 2
💟 #включить /выключить приветствие
💟 #снести @/или выделить сообщение
💟 #добавить (номер) 
💟 #внимание 
💟 #неспать  
💟 #инфогруппы
💟 #датьадмина @
💟 #снятьадмина @
💟 #стикер / #с (выбрать картинку)
💟 #вкартинку (стикер в картинку) 
💟 #tiktok ссылка
💟 #включить/выключить  антиараб
💟 #админы
💟 #молчуны
`
