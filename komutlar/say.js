const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db');
const moment = require('moment');

exports.run = async (client, message, params) => {  
  
  const say = new Discord.RichEmbed()
  .setThumbnail(message.guild.iconURL)
  .setColor("0x36393E")
  .addField(`» Say Komutu!`,`» Şuanda bu sunucuda ${message.guild.memberCount} kullanıcı bulunuyor. <:yep:626890043083980816> `, true)
  .addField(`» Teşekkürler!`,`» Botumu kullandığın için teşekkür ederim. <:happy:629009261573308417> `, true)
  return message.channel.send(say);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'say',
  description: 'Sunucuda kaç kişi olduğunu yazar.',
  usage: '+say yazarak veya direk say yazarak komutu kullanabilirsiniz!',
  category: 'Kullanıcı'
};