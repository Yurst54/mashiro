
const Discord = require("discord.js")

exports.run = async (client, message, args) => {
    let commandSize = 0
    let embed = new Discord.RichEmbed()
    .setColor("0x36393E")
    if (!args[0]) {
        embed.setAuthor("Komut Listesi", message.author.avatarURL)
     let commands = client.commands.filter(
                cs => cs.help.category == 'PremiumSunucu'
            )
            commands = commands.map(cmd => cmd.help.name)
            if (commands.length <= 0) return;
            commandSize += commands.length
            embed.addField('Premium Sunucu Komutları', `\`${commands.sort().join("`, `")}\``)
          embed.setFooter(`Premium Sunucu Komut Sayısı: ${commandSize}`)

        return message.channel.send(embed)
    }
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['kayıtkomutları', 'ksk', 'kayıts', 'registersystem'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'presunucuy',
    category: 'PremiumSunucu',
    description: 'Komutlar hakkında bilgi alırsınız.',
    usage: 'kayıtsistemi'
  };