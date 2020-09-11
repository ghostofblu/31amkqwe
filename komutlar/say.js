 const Discord = require('discord.js')
 const frapuhin = require('../frapuhin.json')
 exports.run = async (client ,message, guild) => {
 const voiceChannels = message.guild.channels.filter(c => c.type === 'voice');
 const sayilar = [frapuhin.s0,frapuhin.s1,frapuhin.s2,frapuhin.s3,frapuhin.s4,frapuhin.s5,frapuhin.s6,frapuhin.s7,frapuhin.s8,frapuhin.s9];
 var taguye = message.guild.members.filter(member => member.user.username.includes(frapuhin.tag)).size
 var renkler = [0x350349, 0xfb1a1e, 0x220d02, 0x7554e7, 0xdb8f7c];
 var randomrenk = Math.floor(Math.random() * renkler.length);
 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 function numberToEmojis(number) {let finalString = "";String(number).split("").forEach(number => {finalString += " " + sayilar[Number(number)];});return finalString;}
 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  let count = 0;
  let kayitsiz = frapuhin.unregister
  let erkekrol = frapuhin.erkekrolID
  let kadinrol = frapuhin.kadınrolID
  let booster  = frapuhin.booster
 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
  let kayıtsız = message.guild.members.filter(r=>r.roles.has(kayitsiz)).size 
  let erkek    = message.guild.members.filter(r=>r.roles.has(erkekrol)).size
  let kadin    = message.guild.members.filter(r=>r.roles.has(kadinrol)).size
  let boost    = message.guild.members.filter(r=>r.roles.has(booster)).size 
 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const ares = new Discord.RichEmbed()
  .setAuthor(`Anlık Sunucu Bilgilendirme`, client.user.avatarURL)
  .setDescription(`
  ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
  **Toplam Üye Sayısı・** \`${message.guild.memberCount}\`
  **Çevrimiçi Üye Sayısı ・** \`${message.guild.members.filter(m => !m.user.bot && m.user.presence.status !== "offline").size}\`
  **Seslideki Üye Sayısı・**\`${count}\`
  **Taglı Üye Sayısı・** \`${taguye}\`
  **Sunucudaki Booster Sayısı・** \`${boost}\`
  ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬`)
  .setColor(renkler[randomrenk])
  .setFooter(`Author : ${frapuhin.yapimci}`)
  message.channel.send(ares)
  message.react(frapuhin.tikemoji)
  };
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['say', 'SAY', 'Say', 'sAy', 'saY', 'bilgilendirme', 'sbilgi', 'sunucubilgi', 'sunucub'],
  kategori: "AVATAR KOMUTLARI",
  permLevel: 0
};

exports.help = {
  name: 'say',
  description: 'say',
  usage: 'say'
};
