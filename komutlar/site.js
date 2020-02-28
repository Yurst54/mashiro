const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x36393E)
    .setDescription('Özel mesajlarını kontrol et!');
    message.channel.sendEmbed(ozelmesajkontrol) }
    const pingozel = new Discord.RichEmbed()
    .setColor(0x36393E)
    .addField('» **Site**','**[Link](http://mashiro-html.glitch.me)**',true)
    .addField('» **Dashboard**','**[Link](http://dashboard.mashirobt.glitch.me)**',true)
    .addField('» **Bot Kontrol Sitesi**','**[Link](http://panel-botumut.glitch.me)**')
    .addField('» **Kod Paylaşım Sitesi**','**[Link](http://zenoxhastebin.glitch.me)**',true)
  
    return message.author.sendEmbed(pingozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Site Yapım', 'Botun Sitesi', 'Web', 'Site'],
  permLevel: 0
};

exports.help = {
  name: 'site',
  category:'Dashboard',
  description: 'Botun Sitesini Atar ',
  usage: 'site'
};