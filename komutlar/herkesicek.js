const Discord = require('discord.js')
const frapuhin = require('../frapuhin.json') 
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
exports.run = async (client ,message ,args) => {
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
if(message.author.id !== frapuhin.sahip)
if(message.author.id !== frapuhin.sahip2) return message.channel.send(`Bu komutu kullanmaya erişimin yok`).then(msg => msg.delete(4000))
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const id = args[0]
if (!id)
return message.reply("Kullancılar Hangi Odaya Çekilsin ? ID Yazmalısın.")
message.guild.members.filter(a => a.voiceChannel).forEach(x => x.setVoiceChannel(id))
message.channel.send(`Bütün Sesli Kanaldaki Üyeler **<#${id}>** İsimli Odaya Taşındı!`)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["herkesicek", "herkesi-cek", "herkesiçek", "herkesi-çek"],
  permLevel: 0
};

exports.help = {
  name: "allcek"
};