const Discord = require("discord.js");
const ms = require("ms");
const frapuhin = require('../frapuhin.json')
const db = require("quick.db")
const moment = require('moment');

exports.run = async (client, message, args, bot, params, perms, guild) => {
if(!message.member.roles.get(frapuhin.mutehammer) && !message.member.hasPermission('ADMINISTRATOR') && !message.member.roles.get(frapuhin.tacsahipleri)) return message.channel.send(new Discord.RichEmbed().setDescription(`Bu komutu kullanmaya erişimin yok <:dddd:726173581028884511>`)).then(msg => {msg.delete(5000)});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  let süre = args[1]
  .replace(`saniye`, `s`)
  .replace(`dakika`, `m`)
  .replace(`saat`, `h`)
  .replace(`gün`, `d`)
  .replace(`hafta`, `w`)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  let vakit = süre
  .replace("m", " Dakika")
  .replace("s", " Saniye")
  .replace("h", " Saat")
  .replace("d", " Gün")
  .replace("w", " Hafta")
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let member = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
let reason = args.slice(2).join(" ");
if(!member) return message.channel.send(`Bir kullanıcı etiketlemeli veya ID yazmalısın`).then(msg => msg.delete(6000))
if(!reason) return message.channel.send(`Bir mute sebebi girmelisin | Örnek; küfür, spam, reklam`).then(msg => msg.delete(6000))
if(!süre) return message.channel.send(`Bir mute süre girmelisin! | Seçeneklerin; 1s/1m/1h/1d/1w`).then(msg => msg.delete(6000))
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let log = member.guild.channels.get(frapuhin.cezabilgikanal)
message.guild.members.get(member.id).setMute(true)
message.react(frapuhin.tikemoji) 
    let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription(`${member} Kullanıcısı **${message.author.username}#${message.author.discriminator}** Tarafından Ses Kanallarında Susturuldu.\n───────────────\n**Susturulma Süresi:** \`${vakit}\`\n**Susturulma Nedeni:** \`${reason}\`\n**Mute Atılan Kanal:** <#${message.channel.id}>`)
    .setTimestamp()
    .setColor(0x00000)
log.send(embed)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////           
setTimeout(async () =>{
message.guild.members.get(member.id).setMute(false)                                                     
let embed2 = new Discord.RichEmbed()
    .setTitle(`Ses Mute | Süresi Doldu`)
    .setDescription(`**${member}** Kullanıcısının Mute Yediği **${reason}** Cezası Sona Ermiştir. <${frapuhin.tikemoji}>`)
    .setFooter(`${client.user.tag}`, client.user.avatarURL)
    .setColor('GREEN')
log.send(embed2)
                
}, ms(süre))
} 

exports.conf = {
  enabled: true,
  guildOnly: true,
    aliases: ["sesmute", "ses-mute","sesm", "muteses", "mute-ses", "voicemute", "vmute"],
};

exports.help = {
  name: '',
};