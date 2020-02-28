const Discord = require('discord.js')
const fs = require('fs');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => { 
if(message.author.id !== ayarlar.sahip) return message.channel.send(" Bu komutu sadece geliştiricim kullanabilir.");

 const args0 = args[0];
  if(!args0) {
    message.channel.send(message.author.username + ", lütfen bir sunucu **id**'si yaz!")
  } else {
  
 
db.delete(`premod_${args0}`,"deaktif")
message.channel.send("<a:shardr:666980258121121802>Premium başarıyla alındı")
client.channels.get("675042138211483668").send(`<a:hayir:666338110988091442>\`${args0}\`<a:hayir:666338110988091442> Artık Premium Sunucu Degil`)
}
};


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['premium-al'],
    permLevel: 4,
      
}

exports.help = {
    name: 'premiumal',
  category: `PremiumSunucu`,
    description: 'premiumal',
    usage: 'premiumal',

}