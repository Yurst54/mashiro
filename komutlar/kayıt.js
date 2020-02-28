  const Discord = require('discord.js');
const fs = require('fs');

exports.run = function(client, message, args) {

   let rol22=  JSON.parse(fs.readFileSync("./ayarlar/kayıtrol.json", "utf8"));
  
  
  let kanal22= JSON.parse(fs.readFileSync("./ayarlar/kayıtkanal.json", "utf8"));
   let user = message.member
 let kanal =(kanal22[message.guild.id].kanal)
 let rol2 =(rol22[message.guild.id].rol)
  //  let kanal = kanal2; 
    var rol = message.guild.roles.find(role => role.id === rol2); 
                 const saxy = new Discord.RichEmbed()
  .setThumbnail(message.guild.iconURL)
  .setColor("0x36393E")
  .addField(`» Kayıt Hata!`,`» Kayıt Kanalı Ayarlanmamış! <a:tik:616584738370486303>`, true)
        .addField(`» Teşekkürler!`,`» Botumu kullandığın için teşekkür ederim. <a:kplr:616561533912219648>`, true)
  
                 
                                 const ssaxy = new Discord.RichEmbed()
  .setThumbnail(message.guild.iconURL)
  .setColor("0x36393E")
  .addField(`» Kayıt Hata!`,`» Kayıt Rolü Ayarlanmamış! <a:tik:616584738370486303>`, true)
        .addField(`» Teşekkürler!`,`» Botumu kullandığın için teşekkür ederim. <a:kplr:616561533912219648>`, true)
    if(!kanal)return message.reply(saxy);
    if(!rol)return message.reply(ssaxy);
                                   const waxy = new Discord.RichEmbed()
  .setThumbnail(message.guild.iconURL)
  .setColor("0x36393E")
  .addField(`» Kayıt Hata!`,`» Sadece <#${kanal}> Adlı Kanalda Kayıt Olabilirsiniz! <a:tik:616584738370486303>`, true)
        .addField(`» Teşekkürler!`,`» Botumu kullandığın için teşekkür ederim. <a:kplr:616561533912219648>`, true)
    if (message.channel.id !== kanal) return message.channel.send(waxy).then(msg => msg.delete(10000))
    
 let isim = args[0]
 let yas = args[1]
                                 const sssaxy = new Discord.RichEmbed()
  .setThumbnail(message.guild.iconURL)
  .setColor("0x36393E")
  .addField(`» Kayıt Hata!`,`» Seni kayıt etmem için bir isim ve yaş girmelisin! <a:tik:616584738370486303>`, true)
        .addField(`» Teşekkürler!`,`» Botumu kullandığın için teşekkür ederim. <a:kplr:616561533912219648>`, true)
                                                                  const sssasxy = new Discord.RichEmbed()
  .setThumbnail(message.guild.iconURL)
  .setColor("0x36393E")
  .addField(`» Kayıt Hata!`,`» Seni kayıt etmem için bir isim ve yaş girmelisin! <a:tik:616584738370486303>`, true)
        .addField(`» Teşekkürler!`,`» Botumu kullandığın için teşekkür ederim. <a:kplr:616561533912219648>`, true)
  if(!isim) return message.channel.sendMessage(sssaxy);
  if(!yas) return message.channel.sendMessage(sssasxy);
 
  if (message.member.roles.has(rol)) return message.channel.send("Daha Önceden Kayıt Olmuşsun") 
   let rol33=  JSON.parse(fs.readFileSync("./ayarlar/kayıtrol2.json", "utf8"));
 let rol3 =(rol33[message.guild.id].rol)
 let kanal33=  JSON.parse(fs.readFileSync("./ayarlar/kayıtkanal2.json", "utf8"));
 let kanal3 =(kanal33[message.guild.id].kanal)
 
 
 
  if(rol3) {
if(kanal3) {
message.member.addRole(rol);
  message.member.removeRole(rol3);  
  user.setNickname(`${isim} | ${yas}`)
               const saxy = new Discord.RichEmbed()
  .setThumbnail(message.guild.iconURL)
  .setColor("0x36393E")
  .addField(`» Kayıt!`,`» ${user} Kaydınız Oluşturuldu! <a:tik:616584738370486303>`, true)
        .addField(`» Teşekkürler!`,`» Botumu kullandığın için teşekkür ederim. <a:kplr:616561533912219648>`, true)
  message.channel.send(saxy);
               const sasxy = new Discord.RichEmbed()
  .setThumbnail(message.guild.iconURL)
  .setColor("0x36393E")
  .addField(`» Kayıt!`,`» ${user} Adlı Kullanıcı Kayıt Işlemini Başarıyla Tamamladı. <a:tik:616584738370486303>`, true)
        .addField(`» Teşekkürler!`,`» Botumu kullandığın için teşekkür ederim. <a:kplr:616561533912219648>`, true)
  client.channels.get(kanal3).send(sasxy)
  
}else if(!kanal3) {
  message.member.addRole(rol);
  message.member.removeRole(rol3);  
  user.setNickname(`${isim} | ${yas}`)
               const saxy = new Discord.RichEmbed()
  .setThumbnail(message.guild.iconURL)
  .setColor("0x36393E")
  .addField(`» Kayıt!`,`» ${user} Kaydınız Oluşturuldu! <a:tik:616584738370486303>`, true)
        .addField(`» Teşekkürler!`,`» Botumu kullandığın için teşekkür ederim. <a:kplr:616561533912219648>`, true)
  message.channel.send(saxy);
  
} 
    
    
    
    
  }else if(!rol3) {
   if(kanal3) {
    message.member.addRole(rol);
  user.setNickname(`${isim} | ${yas}`)
             const saxy = new Discord.RichEmbed()
  .setThumbnail(message.guild.iconURL)
  .setColor("0x36393E")
  .addField(`» Kayıt!`,`» ${user} Kaydınız Oluşturuldu! <a:tik:616584738370486303>`, true)
        .addField(`» Teşekkürler!`,`» Botumu kullandığın için teşekkür ederim. <a:kplr:616561533912219648>`, true)
  message.channel.send(saxy);
        const say = new Discord.RichEmbed()
  .setThumbnail(message.guild.iconURL)
  .setColor("0x36393E")
  .addField(`» Kayıt!`,`» ${user} Adlı Kullanıcı Kayıt Işlemini Başarıyla Tamamladı. <a:tik:616584738370486303>`, true)
        .addField(`» Teşekkürler!`,`» Botumu kullandığın için teşekkür ederim. <a:kplr:616561533912219648>`, true)
  client.channels.get(kanal3).send(say) 
   }else if(!kanal3) {
  
  message.member.addRole(rol);
 user.setNickname(`${isim} | ${yas}`)
             const saxy = new Discord.RichEmbed()
  .setThumbnail(message.guild.iconURL)
  .setColor("0x36393E")
  .addField(`» Kayıt!`,`» ${user} Kaydınız Oluşturuldu! <a:tik:616584738370486303>`, true)
        .addField(`» Teşekkürler!`,`» Botumu kullandığın için teşekkür ederim. <a:kplr:616561533912219648>`, true)
  message.channel.send(saxy);
   }}
  
  
  
  
  
}

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['kayıt-ol','kayıtol'],
  permLevel: 0
};

exports.help = {
    name: 'kayıt',
  category: 'Kayıt Sistemi',
    description: 'Kayıt ol komutu!',
    usage: 'kayıt'
}
   