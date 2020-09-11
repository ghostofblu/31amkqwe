const Discord = require("discord.js")
const frapuhin = require('../frapuhin.json')
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
exports.run = async function(client, message, args) {
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
if(!message.member.roles.get(frapuhin.transporter) && !message.member.roles.get(frapuhin.sahip) && !message.member.hasPermission('ADMINISTRATOR') && !message.member.roles.get(frapuhin.tacsahipleri)) return message.channel.send(`Bu komutu kullanmaya erişimin yok`).then(msg => msg.delete(4000))
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const user = message.mentions.members.first()
if (!user) 
return message.reply("Bir Kullanıcı Etiketlemelisin.").catch(console.error)
if (!user.voiceChannel || user.voiceChannel.id === null || user.voiceChannel.id === NaN || user.voiceChannel.id === undefined)
return message.reply(`**Etiketlediğin Kullanıcı Zaten Ses Kanalına Bağlı Değil!**`).catch(console.error)
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
user.setVoiceChannel(null).then(() => {
message.channel.send(`**Başarıyla **${user}** İsimli Kullanıcının Bağlantısı Ses Kanalından Kesildi!**`)
})
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
exports.conf = {
enabled: true,
guildOnly: true,
aliases: ["bağlantı-kes" ,"kes"],
permLevel: 0
}
exports.help = {
name: 'bağlantı-kes', //Dcs Ekibi
description: 'Kullanıcının Bağlantısını Keser!',
usage: 'bağlantı-kes <kullanıcı> '
}