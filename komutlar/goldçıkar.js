const ayarlar = require("../ayarlar.json")    
const db = require('quick.db')
const Discord = require('discord.js')
const client = new Discord.Client();

exports.run = async (client, message, args) => {
 if(message.author.id != ayarlar.sahip) { return message.channel.send(":x: Sahibimin Komutunu Kullanamazsın")}

  let nesne = args[0]
  if (!nesne) return message.channel.send('Bir kullanıcının IDsini girmelisin?')
  
  db.delete(`gold_${nesne}`)
 
  message.channel.send(`\`${nesne}\` Artık Gold Uye Degil`)
  client.channels.get("675042035241320469").send(`<a:shardr:666980258121121802>\`${nesne}\`<a:shardr:666980258121121802> IDli kullanıcı artık gold üye değil!`)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["goldçıkar"],
  permLevel: 5
};
exports.help = {
  name: 'goldçıkar',
  category: `Gold`,
  description: '[Admin Komutu]',
  usage: 'goldsil <ID>'
};
//XiR