  const Discord = require("discord.js")
exports.run = (bot, message, client) => {
  const guildArray = bot.guilds.array()
  while (guildArray.length) {
    const embed = new Discord.RichEmbed();
    const guilds = guildArray.splice(0,25);
    for (const guild of guilds) {
      embed.addField('Sunucular',`isim: **${guild.name}** id: ${guild.id}`);
      embed.setColor('RANDOM')
      embed.setDescription('!!davetal <id>')
      embed.setTimestamp()
      message.delete();
    }
    message.channel.send({embed: embed});
  }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: "sunucuid",
  description: "İçinde oldugun sunucuların idsini atar!",
  category: "Sahip",
  usage: "sunucuid"
};