//Sunucu Resim Değiştir Komutu
const Discord = require('discord.js');
const Jimp = require('jimp'); 

exports.run = (client, message, args) => {
    if (!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('Sunucu resmi değiştir;').setDescription(message.author.tag + ', bu komutu kullanmak için gerekli izinlere sahip değilsin.').setFooter('Mashiro', client.user.avatarURL).setTimestamp());
    if (!message.guild) {
    return message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('Sunucu resmi değiştir;').setDescription(message.author.tag + ', bu komutu direkt mesajda kullanamazsın.').setFooter('Mashiro', client.user.avatarURL).setTimestamp()); }
    const sayMessage = args.join(' ');
    if (sayMessage.length < 1) return message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('Sunucu resmi değiştir;').setDescription(message.author.tag + ', kullanım: -sunucu-resmi-değiştir <link>.').setFooter('Mashiro').setTimestamp());
    message.guild.setIcon(sayMessage);
    const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle('Sunucu resmi değiştirildi')
    .setDescription(message.author.tag + ', sunucu resmi başarıyla değiştirildi.')
    .setFooter('Mashiro', client.user.avatarURL)
    .setTimestamp()
    message.channel.send(embed);
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sunucuresimdeğiş","sunucuikondeğiş","resimdeğiş","changeikon"],
  permLevel: 3
};

exports.help = {
  name: 'sunucu-resim-değiş',
  description: 'Sunucu resmini değiştirirsiniz.',
  usage: 'sunucuresimdeğiş'
};
//DARK CODE ÖZEL KOMUDUDUR.
