const Discord = require("discord.js");  

module.exports.run = async (bot, message, args) => {
  
   let reason = args.slice(0).join(' ');
  const embed = new Discord.RichEmbed()
    .setColor(0x36393E)
    
    .setDescription(`${reason}`)
    message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'embed',
  description: 'Yazdığınızı Atar.',
  usage: 'embed',
  category: 'Kullanıcı'
}; 