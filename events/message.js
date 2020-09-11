 const frapuhin = require('../frapuhin.json');
 module.exports = message => {
  let client = message.client;
  if (message.author.bot) return;
  if (!message.content.startsWith(frapuhin.prefix)) return;
  let command = message.content.split(' ')[0].slice(frapuhin.prefix.length);
  let params = message.content.split(' ').slice(1);
  let perms = client.elevation(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    if (perms < cmd.conf.permLevel) return;
    
    cmd.run(client, message, params, perms);
  }

}; 