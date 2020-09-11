const Discord = require('discord.js')
const db = require('quick.db');
 
exports.run = async (client, message, args) => {


       
  let mlog = message.mentions.channels.first()
  let sıfırla = db.fetch(`seslog_${message.guild.id}`)
if(args[0] === "sıfırla") {
    if(!sıfırla) {
      message.channel.send(`Ses Log Kanalı zaten ayarlı değil.`)
                     
      return
    }
    db.delete(`seslog_${message.guild.id}`)
    message.channel.send(`Ses Log Kanalı başarıyla sıfırlandı.`)
               
    return
  }
  if (!mlog) {
    return message.channel.send(
    `Ses Log Olacak Kanalı etiketlemelisin.`)                      
  }
 
  db.set(`seslog_${message.guild.id}`, mlog.id)
     message.channel.send(`✅ Ses Log Kanalı başarıyla ${mlog} olarak ayarlandı.`)
 
  };
   
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['seslog'],
    permLevel: 4
}
 
exports.help = {
    name: 'ses-log-ayarla',
    description: 'Ses Log Kanalını Ayarlar!.',
    usage: '-ses-log #kanal'
}