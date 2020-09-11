
const Discord = require("discord.js");
const ms = require("ms");
const frapuhin = require('../frapuhin.json')
const db = require("quick.db")
const moment = require('moment');

exports.run = async (client, message, args, bot, params, perms, guild) => {
if(!message.member.roles.get(frapuhin.mutehammer) && !message.member.hasPermission('ADMINISTRATOR') && !message.member.roles.get(frapuhin.tacsahipleri)) return message.channel.send(new Discord.RichEmbed().setDescription(`Bu komutu kullanmaya erişimin yok <:dddd:726173581028884511>`)).then(msg => {msg.delete(5000)});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
let member = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
if(!member) return message.channel.send(`Bir kullanıcı etiketlemeli veya ID yazmalısın`).then(msg => msg.delete(6000))
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  let mutetime = args[1]
  .replace(`saniye`, `s`)
  .replace(`dakika`, `m`)
  .replace(`saat`, `h`)
  .replace(`gün`, `d`)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  let vakit = mutetime
  .replace("m", " Dakika")
  .replace("s", " Saniye")
  .replace("h", " Saat")
  .replace("d", " Gün")
  .replace("w", " Hafta")
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  let mute = message.guild.roles.find(r => r.name === "Chat Mute");
        
if(!mute){
      mute = await message.guild.createRole({
        name: "Chat Mute",
        color: "#818386",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(mute, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }
if(!mutetime) return message.channel.send(`Bir mute süre girmelisin! | Seçeneklerin; 1s/1m/1h/1d/1w`).then(msg => msg.delete(6000))
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let reason = args.slice(2).join(" ");
if (!reason) return message.channel.send(`Bir mute sebebi girmelisin | Örnek; küfür, spam, reklam`).then(msg => msg.delete(6000))
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 message.react(frapuhin.tikemoji)
 setTimeout(function() {member.addRole(mute.id)}, 1000);
db.set(`muteli_${message.guild.id + user.id}`, 'muteli')
db.set(`süre_${message.mentions.users.first().id + message.guild.id}`, mutetime)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  let ares2 = member.guild.channels.get(frapuhin.cezabilgikanal)
    let ares = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription(`${member} Kullanıcısı **${message.author.username}#${message.author.discriminator}** Tarafından Yazı Kanallarında Susturuldu.\n───────────────\n**Susturulma Süresi:** \`${vakit}\`\n**Susturulma Nedeni:** \`${reason}\`\n**Mute Atılan Kanal:** <#${message.channel.id}>`)
    .setTimestamp()
    .setColor(0x00000);
    ares2.send(ares);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    setTimeout(() => {
    let ares = new Discord.RichEmbed()
    .setTitle(`Chat Mute | Süresi Doldu`)
    .setDescription(`**${member}** Kullanıcısının Mute Yediği **${reason}** Cezası Sona Ermiştir. <${frapuhin.tikemoji}>`)
    .setFooter(`${client.user.tag}`, client.user.avatarURL)
    .setColor('GREEN');
    ares2.send(ares)

db.delete(`muteli_${message.guild.id + user.id}`)
    user.removeRole(mute.id)
  }, ms(mutetime)); 
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['geçici-sustur', 'gsustur', 'mute', 'muted', 'sustur', 'muteleme', 'chatmute', 'yazimute', 'yazımute']
};

exports.help = {
  name: 'sustur',
  description: 'Belirttiğiniz kullanıcıyı süreli susturur.',
  usage: 'sustur [Kullanıcı] [Süre]'
};