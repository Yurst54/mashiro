const Discord = require('discord.js');

exports.run = (client, message, params) => {
  const embed = new Discord.RichEmbed()
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**<a:shardr:666980258121121802>》 Yapımcım 《<a:shardr:666980258121121802> **", `<@662380951053139988>`)

 
  return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yapımcım'],
  permLevel: 0
};

exports.help = {
  name: 'yapımcım',
  category: 'Kullanıcı',
  description: 'Botun Yapımcısını Gösterir',
  usage: 'yapımcım'
};