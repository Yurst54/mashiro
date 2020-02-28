const Discord = require('discord.js');


exports.run = function(client, message) {
  const embed = new Discord.RichEmbed()
  .setTitle(`Rol Sayısı: [${message.guild.roles.size}]`)
  .setColor(0x36393E)
     .addField('Roller:', `<@&${message.guild.roles.map(role => role.id).join('>, <@&')}>`, true)

      message.channel.send(embed);
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ['rol',],
  permLevel: 0 
};

exports.help = {
  name: 'roller',
  category: 'Kullanıcı',
  description: 'Sunucudaki rolleri atar.',
  usage: 'roller'
};