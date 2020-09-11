const Discord = require('discord.js');
const frapuhin = require('../frapuhin.json');

exports.run = async (client, message, args) => {
  if(!message.member.roles.get(frapuhin.banhammer) && !message.member.roles.get(frapuhin.tacsahipleri) && !message.member.hasPermission('ADMINISTRATOR') && !message.member.roles.get(frapuhin.tacsahipleri)) return message.channel.send(`Bu komutu kullanmaya erişimin yok`).then(msg => msg.delete(4000))
  let yashinu = await require('quick.db').fetch(`prefix_${message.guild.id}`) || frapuhin.prefix
  if(!args[0] || isNaN(args[0])) return message.reply(`Yasaklanmış Kullanıcı ID'sı Girmelisin! => \`${yashinu}banbilgi ID\``)
  try {
    message.guild.fetchBan(args.slice(0).join(' '))
    .then(({ user, reason }) => message.channel.send(new Discord.RichEmbed().setAuthor(user.tag, user.avatarURL).setColor('RANDOM').addField('Banlanan Kullanıcı', `${user.tag} \`(${user.id})\``).addField('Ban Sebebi', `${reason}`)))
  } catch(err) { message.reply('Belirtilen Kullanıcı Sunucudan Yasaklı Gözükmüyor!') }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['banbilgi', 'baninfo'],
  permLevel: 0
};

exports.help = {
  name: 'ban-bilgi',
  description: "IDsi girilen kullanıcının ban bilgilerini gösterir.",
  usage: 'ban-bilgi <id>',
  kategori: 'yetkili'
};