const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
const moment = require('moment')


exports.run = function(client, message) {
const calismasure = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  console.log('Botun bilgileri başarıyla gösterildi!')
  const embed = new Discord.RichEmbed()
  
  .setTitle("Mashiro İstatistik Menüsü")
  .addField(" Yapımcı", `<@${ayarlar.sahip}>`, true)
  .addField(" Bot Adı", `Achim#9008`, true)
  .addField(" Bot ID", `<@596644121897336832>`, true)
  .addField(" Sunucular", client.guilds.size, true)
  .addField(" Kullanıcılar", client.users.size, true)
  .addField(" Kanallar", client.channels.size, true)
  .addField(" Ping", client.ping, true)
  .addField(" Prefix", `${ayarlar.prefix}`, true)
  .addField(" Komut Sayısı", client.commands.size, true)
  .addField(` Çalışma Süresi`, `${calismasure}`,true)
  .addField(` Shard`, ` Shard ID: ${(client.shard.id+1)}/${client.shard.count}`,true)
  .setFooter("Mashiro", client.user.avatarURL)
  return message.channel.send(embed)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['botbilgi', 'i'],
  permLevel: 0
};

exports.help = {
  name: 'istatistik',
  category: 'Kullanıcı',
  description: 'Botun pingini gösterir',
  usage: 'ping'
};
   