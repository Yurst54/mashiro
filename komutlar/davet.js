const Discord = require('discord.js');
const loglar = require('../loglar.json');

var prefix = loglar.prefix;

exports.run = async (client, message, params, args) => {

  const yardım = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`Mashiro`, client.user.avatarURL)
      .setThumbnail(client.user.avatarURL)
      .addField("Destek Sunucusu Açıldı: ", `[Tıkla](https://discord.gg/kNEfApn)`)    
      .addField("Botuma Oy Ver Pls: ", `[Tıkla](https://mashirobotlistt.glitch.me/bot/670232470414688256)`) 
      .addField("Botun Sitesi", `[Tıkla](https://mashiro-html.glitch.me)`)
      .addField("Botu Ekle: ", `[Tıkla](https://discordapp.com/api/oauth2/authorize?client_id=672084416503218177&permissions=8&scope=bot)`)  
  .setFooter(`${message.author.username} tarafından istendi. | © Mashiro Bot.  `, message.author.avatarURL)
  return message.channel.sendEmbed(yardım);

};


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['sunucu'],
    permLevel: 0
  };

  exports.help = {
    name: 'davet',
    description: 'yardım',
    usage: 'davet'
  };
