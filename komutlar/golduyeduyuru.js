const Discord = require("discord.js");
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

module.exports.run = async (client, message, args) => {
 if (!message.guild) {
  return }  
let kullanıcı = await db.fetch(`gold_${message.author.id}`);

  if( kullanıcı == undefined){
message.channel.send(":x: Bu Komutu Kullanabilmek İçin **Gold Üye** Olmalısın")
  }else{
      if( kullanıcı == 'gold'){

if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(':no_entry: Bu Komutu Kullana Bilmek için \`Yönetici`\ Yetkisine Sahip Olman Gerek :no_entry:')

  
let dkanal = message.mentions.channels.first()
  
    if (!dkanal) {
        return message.channel.send(`Duyuru kanalı olarak ayarlamak istediğin kanalı etiketlemelisin.`)
    }
  
  if (!dkanal) return;
  
    db.set(`duyuruk_${message.guild.id}`, dkanal.name)
    message.channel.send(`Duyuru kanalı başarıyla <a:shardr:666980258121121802>\`#${dkanal.name}\`<a:shardr:666980258121121802> olarak ayarlandı.`)
}

}
  
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 3
}

exports.help = {
    name: 'gold-duyuru-kanal',
    category: `Gold`,
    description: 'Duyuru kanalını ayarlar.',
    usage: 'duyuru-kanal-ayarla <#kanal>'
}