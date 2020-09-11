const Discord = require('discord.js');
const frapuhin = require('../frapuhin.json')
const client = new Discord.Client();
////////////////////////////////////////////////////////////////////////////////////////////////////////
exports.run = function(bot, message, args, member, client, level) {
const m = args.join(' ');
if(!m) return message.channel.send('Lütfen bir silinicek mesaj sayısı giriniz!');
if(!message.member.roles.get(frapuhin.tacsahipleri) && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`Bu komutu kullanmaya erişimin yok`).then(msg => msg.delete(4000))
if(m < 2) return message.channel.send('En az 2 mesaj silebilirsiniz!')
if(m > 100) return message.channel.send('En fazla 100 adet mesaj silebilirsiniz!')
message.channel.bulkDelete(m);
message.channel.send(`Bu Kanaldaki **${m}** Tane Mesaj Başarıyla Silinmiştir <${frapuhin.tikemoji}>\nMesajları Silen Yetkili: **<@${message.author.id}>**`).then(msg => msg.delete(3000))
};
////////////////////////////////////////////////////////////////////////////////////////////////////////
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['temizle','delete','sil'],
  permLevel: 0 
};

exports.help = {
  name: 'temizle',
  description: 'Belirlediğiniz miktarda mesaj siler',
  category:'yetkili',
  usage: 'sil 100' 
}
