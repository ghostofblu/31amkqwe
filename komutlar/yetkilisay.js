const codare = require('discord.js'); 
const frapuhin = require('../frapuhin.json')

exports.run = async(client, message) => {
 const numbers = [frapuhin.s0,frapuhin.s1,frapuhin.s2,frapuhin.s3,frapuhin.s4,frapuhin.s5,frapuhin.s6,frapuhin.s7,frapuhin.s8,frapuhin.s9];
 function numberToEmojis(number) {let finalString = "";String(number).split("").forEach(number => {finalString += " " + numbers[Number(number)];});return finalString;}
  let yetkili = message.guild.roles.get('731203820859949077');  
  let ses = message.guild.members.filter(kullanici => kullanici.highestRole.position >= yetkili.position && !kullanici.voiceChannel && !kullanici.user.bot && kullanici.presence.status !== "offline"); 
  message.channel.send(`Seste Olmayan Yetkili Sayısı **${numberToEmojis(ses.size)}**\n\n${ses.map(y => y).join('\n')}`)
  message.react(frapuhin.tikemoji)
   }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yetkili-say', 'yetkilisay', 'Yetkilisay', 'Yetkili-say'],
  permLevel: 3
};

exports.help = { 
  name: 'yetkilisay', 
  description: 'Seste olmayan yetkilileri gösterir.',
  usage: 'yetkilisay',
};
