const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
  const id = args[0]
  if (!id) return message.channel.send(`Bir mesaj ID'si belirtmelisin.`)
  message.channel.fetchMessages({ limit: 1, around: id }).then(messages => {
    const msg = messages.first()
    if (!msg) return message.channel.send(`Silinmiş / bulunamayan mesaj.`)
    let embed = new Discord.RichEmbed()
    .setColor("0x36393E")
    .setAuthor(msg.author.username, msg.author.avatarURL)
    .setDescription(`${msg.content}\n\n[[Mesaja Git]](${msg.url})`)
    if (msg.attachments.first()) embed.setImage(msg.attachments.first().url)
    .setFooter(`${message.author.username} tarafından alıntılandı. | Kanal : #${msg.channel.name}`, message.author.avatarURL)
    message.channel.send(embed)
  })

}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['alıntı'],
  permLevel: 0
}

exports.help = {
  name: 'alıntıla',
  category:'Kullanıcı',
  description: "ID'sini yazdığınız mesajı alıntılar.",
  usage: 'alıntıla <mesaj id>'
}