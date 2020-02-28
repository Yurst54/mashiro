  const Discord = require('discord.js');
const ms = require("ms");
const ayarlar = require('../ayarlar.json');
exports.run = async (client, message, args) => {
    message.channel.send({
      embed: new Discord.RichEmbed()
      .setAuthor(client.user.username,client.user.avatarURL)
      .setThumbnail(client.user.avatarURL)
      .setColor('0x36393E')
      .setTitle('``Kayıt Sistemi Kurulumu`` ')
      .addField(`» Merhaba`, '**Bu komut yetkililer içindir ve nasıl kayıt sisteminin kurulacağını anlatır!** \nBir hata varsa bug bildir ile bildiriniz!')
      .addField(`» Komutlar`, `!!kayıt, !!kayıtrol, !!kayıtarol, !!kayıtkanal, !!kayıtlog, !!!kayıtayarlar`)
      .addField(`» Komut Sırası`, `» Ilk olarak kayıt kanalını ve kayıt kanallogu kurun. Daha sonra kayıt olduktan sonra verilecek rol ve alınacak rolü ayarlayın. Yeni gelen üye kayıtkanalda +kayıt <isim> <yaş> yazması gerek. Kurulum tamamlandı. Tebrikler!`)
      .setDescription('» Bana Oy [Ver](https://mashirobotlistt.glitch.me/bot/670232470414688256)!\n» Beni Sunucuna [Ekle](https://discordapp.com/oauth2/authorize?client_id=672084416503218177&scope=bot&permissions=2146958591)!\n» Sunucuma [Gel](https://discord.gg/kNEfApn)!')
      .setFooter(' tarafından istendi! © 2019 Umut', message.author.avatarURL)
    })

};



exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['kayıtk','kayıtsistemikurulumu','kkurulum'],
    permLevel: 2,
}

exports.help = {
    name: 'kayıtkurulum',
  category: 'Kayıt Sistemi',
    description: 'Kayıt sistemi kurulumu!',
    usage: 'kayıtkurulum'
}