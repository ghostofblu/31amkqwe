const Discord = require("discord.js")
const frapuhin = require('../frapuhin.json')

exports.run = async (client, message, args) => {
if(message.author.id !== message.guild.owner.user.id) {}
if(message.author.id !== frapuhin.sahip, frapuhin.sahip2) {} 
if(!message.member.roles.get(frapuhin.transporter) && !message.member.hasPermission('ADMINISTRATOR') && !message.member.roles.get(frapuhin.tacsahipleri)) return message.channel.send(`Bu komutu kullanmaya erişimin yok`).then(msg => msg.delete(4000))
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let kullanici = message.mentions.members.first();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
if (!kullanici) return message.channel.send(`*Doğru Kullanım; ${frapuhin.prefix}çek @Kullanıcı*`).then(msg => msg.delete(6000))
if (!kullanici.voiceChannel) return message.channel.send(`Bu Kullanıcı Hiçbir Ses Kanalında Bulunmuyor!`).then(msg => msg.delete(6000))
if (!message.member.voiceChannel) return message.channel.send(`Bir Ses Kanalında Bulunman Gerekiyor.`).then(msg => msg.delete(6000))
if (message.member.voiceChannel.id === kullanici.voiceChannel.id) return message.channel.send(`Bu Kullanıcıyla Aynı Kanalda Bulunuyorsunuz.`).then(msg => msg.delete(6000))
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    const filter = (reaction, user) => {
 message.react(frapuhin.tikemoji)
        return ['✅', '❌'].includes(reaction.emoji.name) && user.id === kullanici.id;
    };
    let teklif = new Discord.RichEmbed()
        .setColor("BLUE")
        .setDescription(`${kullanici}, ${message.author} Kullanıcısı Seni **${message.member.voiceChannel.name}** Odası Cekicek Kabul Ediyor musun?`)
    let mesaj = await message.channel.send(teklif)
    await mesaj.react("✅")
    await mesaj.react("❌")
    mesaj.awaitReactions(filter, {
        max: 1,
        time: 70000,
        errors: ['time']
    }).then(collected => {
        const reaction = collected.first();
        if (reaction.emoji.name === '✅') {
            let kabul = new Discord.RichEmbed()
                .setColor("GREEN")
                .setDescription(`${kullanici} Adlı Kullanıcı Odaya Çekme Teklifini Kabul Etti <${frapuhin.tikemoji}>`)
            message.channel.send(kabul)
            kullanici.setVoiceChannel(message.member.voiceChannel)
        } else {
            let redd = new Discord.RichEmbed()
                .setColor("RED")
                .setDescription(`${kullanici} Adlı Kullanıcı Odaya Çekilme Teklifi Reddetti <${frapuhin.tikunlem}>`);
            message.channel.send(redd).then(msg => msg.delete(30000))
        }})}

exports.conf = {
    enabled: true,
    runIn: ["text"],
    aliases: ["çek", "cek", "Çek", "ÇEK", "Cek", "CEK", "transporter", "trans"],
    permLevel: 0
};

exports.help = {
    name: "odayaçek",
    description: "Etiketlediğiniz kullanıcıyı odaya çeker",
    usage: "çek @kullanıcı"
}; 