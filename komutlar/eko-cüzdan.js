const Discord = require('discord.js')
const db = require('quick.db');
var ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
  let kllanç = message.mentions.users.first() || message.author;
  const bakiye = await db.fetch(`bakiyecdare-${kllanç.id}`);
  const hesapdurumu = await db.fetch(`hesapdurumcodare-${kllanç.id}`);
  const hesapismi = await db.fetch(`hesapismiçodare-${kllanç.id}`);
  
  if(!hesapdurumu) {
    if(args[0]) return message.reply(`Bakmak istediğin kullanıcının bir hesabı bulunmamakta.`)
    message.reply(`İlk olarak hesap oluşturmalısın. ${client.ekoayarlar.botunuzunprefixi}hesap-oluştur <Hesap İsmi>`)
  } else {
    if(hesapdurumu) {
      if(!hesapismi) {
        const embedczdn = new Discord.RichEmbed()
        .setColor(client.ekoayarlar.renk)
        .setDescription(`Hesap İsmi: ${client.ekoayarlar.isimsiz}\n Bakiye: **${bakiye}**`)
        message.channel.send(embedczdn)
      } else {
        if(hesapdurumu) {
          if(hesapismi) {
            const embedczdnv2 = new Discord.RichEmbed()
            .setColor(client.ekoayarlar.renk)
            .setDescription(`Hesap İsmi: ${hesapismi}\n Bakiye: **${bakiye}**`)
            message.channel.send(embedczdnv2)
          }
        }
      }
    }
  }
}
    
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
    katagori: "Ekonomi"
}
exports.help = {
    name: 'cüzdan',
  category: 'Ekonomi',
    description: 'Bakiyenizi gösterir.',
    usage: 'cüzdan <@kullanıcı>',
}
