const Discord = require('discord.js');
const superagent = require('superagent');


exports.run = (client, msg, args) => {
  if (msg.channel.nsfw === true) {
    superagent.get('https://nekobot.xyz/api/image')
    .query({ type: 'hentai'})
    .end((err, response) => {
             const xdxd = new Discord.RichEmbed()
    .setImage(response.body.message)
    .setColor(0x36393E)
    msg.channel.send(xdxd)
    });
  } else {
    const xdxdxd = new Discord.RichEmbed()
    .setDescription(`<:dnd:616578130588729344> Bu kanal bir NSFW kanalı değil!`)
    .setColor(0x36393E)
    msg.channel.send(xdxdxd)
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'hentai',
  category: '+18',
  description: 'NSFW Komutu!',
  usage: 'hentai'
};