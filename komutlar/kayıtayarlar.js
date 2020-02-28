const Discord = require('discord.js');
var ayarlar = require('../ayarlar.json');
const fs = require('fs');

var kayıtrol = JSON.parse(fs.readFileSync("./ayarlar/kayıtrol2.json", "utf8"));
  
var kayıtrol2 = JSON.parse(fs.readFileSync("./ayarlar/kayıtrol.json", "utf8"));

var kanal = JSON.parse(fs.readFileSync("./ayarlar/kayıtkanal.json", "utf8"));

var kanal1 = JSON.parse(fs.readFileSync("./ayarlar/kayıtkanal2.json", "utf8"));

exports.run = (client, message) => {
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`);

  var embed = new Discord.RichEmbed()
  .setColor("0x36393E")
  .addField('» Kayıt Kanalı', kanal[message.guild.id] ? `<#${kanal[message.guild.id].kanal}>` : `:x: Ayarlanmamış`)
  .addField('» Kayıt LOG Kanalı', kanal1[message.guild.id] ? `<#${kanal1[message.guild.id].kanal}>` : `:x: Ayarlanmamış`)
  .addField('» Kayıt Verilecek Rol',`<@&${kayıtrol2[message.guild.id].rol}>`,true)
  .addField('» Kayıt Alınacak Rol',`<@&${kayıtrol[message.guild.id].rol}>`)
  .addField(`» Teşekkürler!`,`» Botumu kullandığın için teşekkür ederim. <a:kplr:616561533912219648>`, true)
  .setThumbnail(message.guild.iconURL)
  
  message.channel.send(embed)
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["kayıtayar"],
    permLevel: 3,
}

exports.help = {
    name: 'kayıtayarlar',
  category: 'Kayıt Sistemi',
    description: 'Kayıt ayarlar komutu!',
    usage: 'kayıtayarlar'
}
   