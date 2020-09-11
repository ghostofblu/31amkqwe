const Discord = require("discord.js");

 exports.run = async (client ,message, guild) => {
    const voiceChannels = message.guild.channels.filter(c => c.type === 'voice');
    let count = 0;
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    message.channel.send(`Ses Kanallarında Toplam **"${count}"** Kişi Bulunmakta`)
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['seslidekiüyeler', 's-sayı', 'sesli', 'sessay', 'ses', 'sesli-say'], 
    permLevel: 0
};

exports.help = {
    name: 'seslidekisayı',
    description: 'Seslide Kaç Kişi Olduğunu Söyler',
    usage: 'seslidekisayı'
};