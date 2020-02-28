const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async (client, message, params, args) => {
   if (!params[0]) {
  //${client.commands.map(c => `${ayarlar.prefix}${c.help.name}${' '.repeat(longest - c.help.name.length)} :: ${c.help.description}`).join('\n :white_small_square:')}
  //const commandNames = Array.from(client.commands.keys());
  //const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
     
  const yardım = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`Mashiro - Yardım`, client.user.avatarURL)
      .setThumbnail(client.user.avatarURL)
      .setTitle(`💎 Toplam ${client.commands.size} **Komut Bulunmakta!**`)
      .addField('Komutlar', `🔥 **!!kullanıcı**: **Kullanıcı** komutlarını listeler!\n🔥**!!presunucuy**: **PreSunucu** komutlarini listeler\n🔥**!!goldy**: **Gold** komutlarini Listeler\n🔥 **!!yetkili**: **Yetkili** komutlarını listeler!\n🔥 **!!oyun**: **Oyun** komutlarını listeler!\n🔥 **!!müzik**: **Müzik** komutlarını listeler!\n🔥 **!!kayıtsistemi**: **Kayıt** komutlarını listeler!\n🔥 **!!ekonomi**: **Ekonomi** komutlarını listeler!\n`)
      .setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)
  return message.channel.send(yardım);
   } else{
       const ayarlar = require('../ayarlar.json');
  let prefix = ayarlar.prefix
    let command = params[0];
  
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      const deneme = new Discord.RichEmbed()
      .setAuthor(`Mashiro  - Yardım`, client.user.avatarURL)
  .setDescription(`» Komut Adı: ${command.help.name} \n» Hakkında: ${command.help.description} \n» Kullanım: ${prefix}${command.help.usage} \n» Kategori: ${command.help.category} \n» Eş Kullanımlar: ${command.conf.aliases} \n `)
  .setColor(0x36393E)
  .setTimestamp()
  .setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)
 .setThumbnail(client.user.avatarURL)
  message.channel.send(deneme);
    }
     
   }
};


  
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['komut', 'komutlar', 'command', 'yardım', 'help', 'halp', 'y', 'h', 'commands'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'yardım',
    category: 'Kullanıcı',
    description: 'Komutlar hakkında bilgi alırsınız.',
    usage: 'yardım'
  };