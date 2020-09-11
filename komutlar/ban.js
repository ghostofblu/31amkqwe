const Discord = require('discord.js');
const frapuhin = require('../frapuhin.json')
var banlar = {};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
exports.run = async(xajes, message, args, client) => {
if(!message.member.roles.get(frapuhin.banhammer) && !message.member.roles.get(frapuhin.tacsahipleri) && !message.member.hasPermission('ADMINISTRATOR') && !message.member.roles.get(frapuhin.tacsahipleri)) return message.channel.send(`Bu komutu kullanmaya erişimin yok`).then(msg => msg.delete(4000))
  if (!message.mentions.members.first()) return message.reply(`Bir üyeyi etiketlemelisin!`);
  if (!args.join(' ').replace(/[^a-zA-ZığüşöçĞÜŞİÖÇ]+/g, "")) return message.reply(`Bir sebep belirtmelisin!`);
  var logKanali = frapuhin.banlogkanal; 
  var banLimit = 2;
  var filter = msj => msj.author.id === message.author.id && msj.author.id !== xajes.user.id;
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  if (message.mentions.members.size > 1) {
    let mesaj = await message.channel.send(new Discord.RichEmbed().setDescription(`${message.mentions.members.array().join(', ')} Üyelerini sunucudan yasaklıyorum. Kabul ediyor musun? (evet/hayır)`));
    message.channel.awaitMessages(filter, { max: 1, time: 10000 }).then(collected => {
      if(collected.first().content.toLowerCase() === "hayır") return mesaj.edit(`Banlama işlemip başarıyla iptal edildi <${frapuhin.tikemoji}>`)
      if(collected.first().content.toLowerCase() === "evet") {
        let sebep = args.join(' ').replace(/[^a-zA-ZığüşöçĞÜŞİÖÇ]+/g, "");
        message.mentions.members.forEach(async uye => {
          if (banlar[message.author.id] > banLimit) return message.reply('Ban limitini doldurdun. Ban Limiti: **2**');
          if (uye.id === message.author.id) return message.reply(`D-dostum kendini niye yasaklamaya çalışıyorsun deli manyak :face_with_hand_over_mouth:`);
          if (uye.highestRole.position >= message.member.highestRole.position) return message.reply(`Yasaklamaya çalıştığın ${uye} kullanıcısı senin yetkilerinden yüksek`);
          if (!uye.bannable) return message.channel.send(`${uye} Kullanıcısını banlamaya yetkim yetmiyor!`)
          await message.guild.ban(uye.id, { reason: sebep });
          banlar[message.author.id] = banlar[message.author.id] ? banlar[message.author.id]+1 : 1;
          setTimeout(() => {
            banlar[message.author.id] = banlar[message.author.id]-1;
          }, 10*60*1000)
        });
        mesaj.edit(new Discord.RichEmbed().setFooter(`${client.user.tag}`, client.user.avatarURL).setImage('https://cdn.discordapp.com/attachments/660894924664864878/660895579349581864/kod_icin.gif').setDescription(`${message.mentions.members.filter(a => !message.guild.members.has(a.id)).array().join(', ')} Kullancıları Başarıyla ${message.author} Tarafından **${sebep}** Gerekçesiyle Sunucudan Yasaklandı!`));
        xajes.channels.get(logKanali).send(new Discord.RichEmbed().setFooter(`${client.user.tag}`, client.user.avatarURL).setTimestamp().setImage('https://cdn.discordapp.com/attachments/660894924664864878/660895579349581864/kod_icin.gif').setDescription(`${message.mentions.members.filter(a => !message.guild.members.has(a.id)).array().join(', ')} Kullanıcıları Başarıyla ${message.author} Tarafından **${sebep}** Gerekçesiyle Sunucudan Yasaklandı!`));
      };
    });
  } else {
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    let uyemiz = message.mentions.members.first();
    let mesaj = await message.channel.send(new Discord.RichEmbed().setDescription(`${uyemiz} Üyesini sunucudan yasaklıyorum. Kabul ediyor musun? (evet/hayır)`));
    message.channel.awaitMessages(filter, { max: 1, time: 10000 }).then(async collected => {
      if(collected.first().content.toLowerCase() === "hayır") return mesaj.edit(`Banlama işlemip başarıyla iptal edildi <${frapuhin.tikemoji}>`)
      if(collected.first().content.toLowerCase() === "evet") {
        if (banlar[message.author.id] > banLimit) return message.reply('Ban limitini doldurdun (2)');
        let sebep = args.join(' ').replace(/[^a-zA-ZığüşöçĞÜŞİÖÇ]+/g, "");
        if (uyemiz.id === message.author.id) return mesaj.edit(new Discord.RichEmbed().setDescription(`Kendini yasaklayacak kadar sorunlu musun?`));
        if (uyemiz.highestRole.position >= message.member.highestRole.position) return mesaj.edit(new Discord.RichEmbed().setDescription(`Yasaklamaya çalıştığın ${uyemiz} kullanıcı senin yetkilerinden yüksek`));
        if (!uyemiz.bannable) return mesaj.edit(new Discord.RichEmbed().setDescription(`${uyemiz} Kullanıcısını banlamaya yetkim yetmiyor!`));
        await message.guild.ban(uyemiz.id, { reason: sebep });
        banlar[message.author.id] = banlar[message.author.id] ? banlar[message.author.id]+1 : 1;
          setTimeout(() => {
            banlar[message.author.id] = banlar[message.author.id]-1;
          }, 10*60*1000)
        mesaj.edit(new Discord.RichEmbed().setFooter(`${client.user.tag}`, client.user.avatarURL).setImage('https://cdn.discordapp.com/attachments/660894924664864878/660895579349581864/kod_icin.gif').setDescription(`${uyemiz} Kullanıcısı ${message.author} Tarafından **${sebep}** Gerekçesiyle Sunucudan Yasaklandı!`));
        xajes.channels.get(logKanali).send(new Discord.RichEmbed().setFooter(`${client.user.tag}`, client.user.avatarURL).setTimestamp().setImage('https://cdn.discordapp.com/attachments/660894924664864878/660895579349581864/kod_icin.gif').setDescription(`${uyemiz} Kullanıcısı ${message.author} Tarafından **${sebep}** Gerekçesiyle Sunucudan Yasaklandı!`));
      };
    });
  };
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['yasakla', 'ban'],
  permLevel: 0
};

exports.help = { 
  name: 'ban', 
  description: 'Yasaklamanızı sağlar. (Birden fazla yasaklayabilirsiniz)',
  usage: 'ban @kullanıcılar sebep',
  kategori: 'yetkili'
};