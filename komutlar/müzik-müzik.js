const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async (client, message, params, args) => {
   if (!params[0]) {
  const yardım = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`Mashiro - Yardım`, client.user.avatarURL)
      .setThumbnail(client.user.avatarURL)
      .addField('» Müzik Komutları', `:musical_score: »  **!!oynat**: (Şarkı Adı & Link)  \n:musical_score: »  **!!geç**: (Sırada ki Şarkıya Geçer)\n:musical_score: »  **!!çalan**: (Çalan Şarkıyı Gösterir)\n:musical_score: »  **!!durdur**: (Botu Ses-Kanalından Çıkarır)\n:musical_score: »  **!!duraklat**: (Şarkıyı Duraklatır)\n:musical_score: »  **!!devam**: (Durdurulan Şarkıyı Devam Ettirir)\n`)
      .setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)
  return message.channel.send(yardım);
   }
};


  
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['komut', 'komutlar', 'command', 'yardım', 'help', 'halp', 'y', 'h', 'commands'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'müzik',
    category: 'Müzik',
    description: 'Müzik komutları hakkında bilgi alırsınız.',
    usage: 'müzik'
  };