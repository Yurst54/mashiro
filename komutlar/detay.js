const Discord = require('discord.js');

const ms = require('ms')
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
 .setColor(0x36393E)
      .setAuthor(`Achim - Detay`, client.user.avatarURL)
      .setThumbnail(client.user.avatarURL)
 .setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)
      .setDescription(`**Botta** ${client.commands.size} **komut bulunmaktadır.\n\n Botun açıklaması:** ${client.appInfo.description}\n\n`)
    .addField('``Gecikme Süresi``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
      .addField('``RAM Kullanımı``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
      .addField('``Sunucular``', [client.guilds.size], true)
      .addField('``Kanallar``' , `[ ${client.channels.size} ]` , true)
      .addField('``Kullanıcılar``' ,`[ ${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} ]`, true)
      .addField('``Kullanıcı Adım``' , `[ ${client.user.tag} ]` , true)
      .addField('``ID``' , `[ ${client.user.id} ]` , true)
      .addField('``Prefix``' , `[ ${client.prefix} ]` , true)
      .addField('``Language``' , `[ Java Script ]` , true)
      .addField('``Sürüm``' , '[ v' + ayarlar.surum + ' ]') 
message.channel.send(embed)
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ['detaylar','ayrıntılar','bilgi','detay',''], 
  permLevel: 0 
};

exports.help = {
  name: 'bot', 
  category: 'Bot',
  description: 'Botun detaylarını gösterir', 
  usage: 'bot' 
};