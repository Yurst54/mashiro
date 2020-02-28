const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')

exports.run = (client, message, args) => {
    try {
        const chypercode1 = new Discord.RichEmbed()
            .addField(`Sunucuda Bulunan Emojiler`, message.guild.emojis.map(emoji => emoji).join(' | '))
            .setColor("RED")
            .setTimestamp()
        message.channel.send(chypercode1)
    } catch (err) {
        const chypercode2 = new Discord.RichEmbed()
            .addField(`Sunucuda Bulunan Emojiler`, 'Üzgünüm Sunucunuzda Çok Fazla Emoji Var Yada Hiç Emoji Yok Bunları Gösteremiyorum Discord Buna İzin Vermiyor')
            .setColor("RED")
            .setTimestamp()
        message.channel.send(chypercode2)
    }
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0,
    kategori: 'ekstra'
}

exports.help = {
    name: 'emojiler',
  category: `Yetkili`,
    description: 'emojileri gösterir.',
    usage: 'emojiler'
}