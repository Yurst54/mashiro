const Discord = require('discord.js');
exports.run = (client, msg, args) => {
    msg.channel.send(`<a:shardr:666980258121121802> ***Ben şu an*** ***${client.guilds.size}*** ***sunucuda*** ***${client.guilds.reduce((a, b) => a + b.memberCount,  0).toLocaleString()}*** ***kullanıcı ile sana hizmet veriyorum!***`)   
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["snc"],
  permLevel: 0,
  kategori: "<a:shardr:666980258121121802>Bot"
};

exports.help = {
  komut: 'sunucular',
  aciklama: 'Botun bulunduğu sunucuları gösterir.',
  kullanim: 'w!sunucular'
};
 