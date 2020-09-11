const Discord = require("discord.js"); 
exports.run = (client, message, args) => { 
const frapuhin = require('../frapuhin.json')

if(message.author.id !== message.guild.owner.user.id) {}
if(message.author.id !== frapuhin.sahip, frapuhin.sahip2) {} 
if(!message.member.roles.get(frapuhin.transporter)  && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`Bu komutu kullanmaya erişimin yok`).then(msg => msg.delete(4000))
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let kanal = args[1]; 
let kullanici = message.mentions.members.first()  
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
if (!kanal) return message.channel.send(`*Doğru Kullanım; ${frapuhin.prefix}taşı @Kullanıcı Kanal ID*`)
if (!kullanici) return message.channel.send(`*Doğru Kullanım; ${frapuhin.prefix}taşı @Kullanıcı Kanal ID*`) 
if (!kullanici.voiceChannel) return message.channel.send(`Bu Kullanıcı Hiçbir Ses Kanalında Bulunmuyor!`)
if (!message.member.voiceChannel) return message.reply.send(`Bir Ses Kanalında Bulunman Gerekiyor.`)
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
message.react(frapuhin.tikemoji)
kullanici.setVoiceChannel(`${kanal}`)
.then(() => message.channel.send(`**${kullanici}** Kullanıcısı \`${message.author.tag}\` Kullanıcısı Tarafından **${message.member.voiceChannel.name}** Kanalına Taşındı.`)) 
} 

exports.conf = { 

enabled: true,
guildOnly: true, 
aliases: ['üyeyitaşı', 'taşı', 'tası', 'tasi'], 
permLevel: 0
 }; 

exports.help = { 
name: 'taşı', 
description: 'İstediğiniz kişiniyi bir sesli kanaldan diğerine taşır.', 
usage: 'taşı [kullanıcı] [kanal id]' 
};