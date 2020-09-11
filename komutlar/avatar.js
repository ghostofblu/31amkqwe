const Discord = require('discord.js');
exports.run = (client, message, args) => {
let mention = message.mentions.users.first();
let sender = "";
if (message.channel.guild.member(message.author).nickname == null) {
  sender = message.author.username;
} else {
  sender = message.channel.guild.member(message.author).nickname;
}
if (mention != null || mention != undefined) {
  var name = mention.username + "'s ";
  if (mention.username.endsWith("s")) {
    name = mention.username + "' ";
  }
  let kişi = client.users.get(message.member.id)
  let avatar = kişi.avatarURL.split('?')[0]
  const avatarEmbedOther = new Discord.RichEmbed()
  .setColor(0xffff00)
  .setDescription(`<a:aresqwe:752212205683867799> [Avatar Arried!](${kişi.avatarURL}) <a:aresqwe:752212205683867799>`)
  .setImage(avatar)
  .setFooter(`© ${kişi.id}`)
  message.channel.sendEmbed(avatarEmbedOther);
  return;
} else {
  let kişi = client.users.get(message.member.id)
  let avatar = kişi.avatarURL.split('?')[0]
  const avatarEmbedYou = new Discord.RichEmbed()
  .setColor(0xffff00)
  .setDescription(`<a:aressx:752578304820772965> [Avatar Arried!](${kişi.avatarURL}) <a:aressx:752578304820772965>`)
  .setImage(avatar)
  .setFooter(`© ${kişi.id}`)
  message.channel.sendEmbed(avatarEmbedYou).then(msg => msg.delete(30000))
  return;
}
message.channel.sendMessage("KANALA AVATAR'I GONDEREMIYORUM !?");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['avatar', 'pp', 'gavatar', 'Avatar'],
  kategori: "AVATAR KOMUTLARI",
  permLevel: 0
};

exports.help = {
  name: 'av',
  description: 'Etiketlediğiniz veya kendinizin profil fotosunu gösterir.',
  usage: 'av @etiket ya da avatar'
};