//==> komutlar/sayaç.js atın <==\\

const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
 
exports.run = async (client, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Yeterli Yetkin yokmuş gibi görünüyor.`);
  const sayacsayi = await db.fetch(`sayac_${message.guild.id}`);
  const sayackanal = message.mentions.channels.first()
  
        
  if(!args[0]) {
    message.channel.send('**:x: | Ayarlamak istediğin sayı girmelisin. d!sayaç 100 #sayaç**')
    return
  }
  
  if(!sayackanal) {
    message.channel.send(':x: | Ayarlamak istediğin kanalı girmelisin. ``d!sayaç 100 #sayaç``**')
  }
  
  
  if(args[0] === "kapat") {
    if(!sayacsayi) {
      message.channel.send(`**:x: | Ayarlanmayan şeyi sıfırlayamazsın.**`)
      return
    }
    
    db.delete(`sayac_${message.guild.id}`)
    db.delete(`sayacK_${message.guild.id}`)
    message.channel.send(`**:white_check_mark: | Sayaç başarıyla sıfırlandı.| Tekrar açmak için: \`!!sayaç-ayarla <HedefSayı> <#YazıKanalı>**`)
    return
  }
  
  if(isNaN(args[0])) {
    message.channel.send(` Örnek kullanım: \`!!sayaç-ayarla <HedefSayı> <#YazıKanalı>\``)
    return
  }
 
        if(args[0] <= message.guild.members.size) {
                message.channel.send(`**:x: | Sunucudaki kullanıcı sayısından yani (${message.guild.members.size}) sayısından daha yüksek bir değer girmelisin.**`)
                return
        }
  
  db.set(`sayac_${message.guild.id}`, args[0])
  db.set(`sayacK_${message.guild.id}`, sayackanal.name)
  
  message.channel.send(`**:white_check_mark: | Sayaç \`${args[0]}\` olarak ayarlandı! | Sayaç kanalı ${sayackanal} olarak ayarlandı.| Sayaç komudunu kapatmak için \?sayaç kapat yazınız!**`)
}
 
exports.conf = {
        enabled: true,
        guildOnly: true,
        aliases: ['sayaç'],
    permLevel: 0
}
 
exports.help = {
        name: 'sayaç-ayarla',
      category: 'Yetkili',
        description: 'Sayacı ayarlar.',
        usage: 'sayaç <sayı> <#kanal> / sıfırla'
}