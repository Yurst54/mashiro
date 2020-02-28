const reqEvent = (event) => require(`../events/${event}`);
module.exports = client => {
  client.on('ready', () => reqEvent('ready')(client));
  client.on('message', reqEvent('message'));
  client.on('messageUpdate', reqEvent('mesajduzenleme'));
  client.on('guildMemberUpdate', reqEvent('guildMemberUpdate'));
    client.on('disconnect', reqEvent('disconnect'));
    client.on('reconnecting', reqEvent('reconnecting'));
   client.on('guildMemberAdd', reqEvent('giriş'));
  client.on('guildMemberAdd', reqEvent('guildMemberAdd'));
  client.on('guildMemberRemove', reqEvent('çıkış'));
};
