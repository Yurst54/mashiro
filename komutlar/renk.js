const Discord = require('discord.js')
exports.run = (client, message, args) => {
  
  
  var Renk = args[0].replace('#', '')
 // if (!args[0]) return message.reply("🌟Renk Kodu Belirt")
  var renkResimi = `https://dummyimage.com/1920x1080/${Renk}/ffffff&text=%20`

  const renkYok = new Discord.RichEmbed()
  .setColor(0x36393E)
  .addField(`**${client.user.username} | Renk Komutu**`, 'Lütfen bir renk belirtin!\nÖrnek: `!!renk #ffffff`')
  .setFooter(client.user.username, client.user.avatarURL)
  .setTimestamp()

  if (!args[0]) {
    message.channel.send(renkYok)
  }

  if (args[0]) {
    message.channel.send(
      new Discord.RichEmbed()
      .setColor(args[0])
      .setTitle(`${args[0]} rengi:**`).setURL(renkResimi)
      .setImage(renkResimi)
    )
  }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'renk',
  category: 'Kullanıcı',
  description: 'Renk komutu',
  usage: 'renk #ffffff'
}