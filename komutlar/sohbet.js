const Discord = require('discord.js');
exports.run = (client, message, args) => {

  let every = message.guild.roles.find(r => r.name === '@everyone')
message.channel.overwritePermissions(every, {
  'SEND_MESSAGES': null,
 
})
 

   message.channel.send('Sohbet kanalı ``Yazılabilir`` durumuna getirildi. Kapatmak Icin ``!!kapat``');
}
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['aç','a','saç'],
kategori: 'sohbet',
  permLevel: 3
};

exports.help = {
  name: 'sohbet-aç',
  category: `Yetkili`,
  description: 'Sohbetinizi açmaya yarar.',
  usage: 'aç'
};