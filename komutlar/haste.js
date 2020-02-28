const hastebin = require('hastebin-gen');
const Discord = require('discord.js')

exports.run = (client, message, args) => {

    const hastEmb = new Discord.RichEmbed()
 hastebin(args.join(' '), "js").then(r => {
      var hastLink = r
      const hastEmb = new Discord.RichEmbed()
      .setColor(0x36393E)
      .setURL(hastLink)
      .addField('Link: ', `${hastLink}`)
      .setFooter('Mashiro | Hastebin')
       return message.author.send(hastEmb)
  }).catch(console.error);  
   
};



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'hastebin',
  category: 'Kullanıcı',
  description: 'Hastebine kod/cümle yüklersiniz.',
  usage: 'hastebin [kod/cümle]'
};