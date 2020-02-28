const Discord = require('discord.js')
const db = require('quick.db');

exports.run = async (client, message, args) => {
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu Komutu Kullanabilmek İçin \`Yönetici\` Yetkisine Sahip Olmalısın!`);
  
  let channel = message.mentions.channels.first()
  
  if(args[0] === "sıfırla") {
    if(!args[0]) {
      message.channel.send(`Ayarlanmayan Şeyi Sıfırlayamazsın.`)
      return
    }
    
    db.delete(`modlogKK_${message.guild.id}`)
    message.channel.send(`Mod-Log Kanalı Başarıyla Sıfırlandı.`)
    return
  }
  
    if (!channel) {
        return message.channel.send(`Mod-Log Kanalı Olarak Ayarlamak İstediğin Kanalı Etiketlemelisin.`)
    }
  
    db.set(`modlogKK_${message.guild.id}`, channel.id)
  
    const embed = new Discord.RichEmbed()
    .setDescription(`Mod-Log Kanalı Başarıyla ${channel} Olarak Ayarlandı.`)
    .setColor("RANDOM")
    .setFooter('Mashiro')
    message.channel.send(embed)
}
    
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["logayarla"],
    permLevel: 3
}

exports.help = {
    name: 'modlog',
    category: `Yetkili`,
    description: 'Log kanalını ayarlar..',
    usage: 'log-ayarla <#kanal>'
}