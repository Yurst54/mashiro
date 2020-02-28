const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 
if(message.author.id !== "662380951053139988") return message.channel.send('Bu komutu sadece sahibim kullanabilir ❌')
  
  if(args[0] === "sonlandır") {
let veri = await db.fetch(`botbakım`)
if(!veri) return message.channel.send('Anlaşılan bot zaten bakımda değil. ❌')
message.channel.send('Bot bakım modundan çıkarıldı.!')
db.delete(`botbakım`)    
  return
}
 
    
if(args[0] === "başlat") {

  
  let mashiro = args.slice(1).join(' ');
  mashiro = 'Mashiro'
  if(!mashiro) return message.channel.send('❌ Bir bakım sebebi girmelisin.')

  let erdem = new Discord.RichEmbed()
  .setTitle('Bot Bakıma Alındı!')
  .setDescription('Şu andan itibaren botu bakıma aldınız.Sizin dışında hiçbir kullanıcı siz bakımı kapayana kadar hiçbir bot komutunu kullanamayacak. \n\n **kapamak için:** c!bakım kapat \n\n Botu kullanmaya çalışan kişilere `'+mashiro+'` sebebi ile bakımda olduğumu belirteceğim.')
  .setColor('RED')
  .setFooter(erdem + ' Bot Bakım Sistemi')
message.channel.send()
  message.delete()
  db.set(`botbakım`)
 return
}
message.reply('bir değer belirtmelisin \n\n `açık` / `kapalı`')
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["bkm"], 
  permLevel: 0
};

exports.help = {
  name: 'bakım',
  description: 'taslak', 
  usage: 'bakım'
};