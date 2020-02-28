
const Discord = require("discord.js"); 
exports.run = function(client, message, args) { 
  let evet = client.guilds.get("599178367253610508").emojis.find("name", "dogru") 
  let hayir = client.guilds.get("599178367253610508").emojis.find("name", "yanlish") 
  let rol = message.mentions.roles.first(); 
  let tag = args.slice(1).join(' '); 
  if(!tag) return message.channel.send("> " + hayir + " **| toplu-tag kullanıcı | rol | kanal tag**");
  if(args[0] === "kullanıcı") { 
    let sayi = 0; 
    message.guild.members.forEach(u=>{ 
      let kisi = client.users.get(u.id); 
      if(!(kisi.username.startsWith(tag))) { u.setNickname(tag + kisi.username) } }) 
    message.channel.send("> " + evet + " **| " + sayi + " adet kullanıcıya " + tag + " tagını verdim!**") } 
   else 
    if(args[0] === "rol") { 
     let sayi = 0; 
     message.guild.roles.forEach(u=>{ 
      if(!(u.name.startsWith(tag))) { u.setName(tag + u.name)  } }) 
  message.channel.send("> " + evet + " **| " + sayi + " adet role " + tag + " tagını verdim!**") } 
  else 
  if(args[0] === "kanal") { 
     let sayi = 0; message.guild.channels.forEach(u=>{ 
       if(!(u.name.startsWith(tag))) { u.setName(tag + u.name) } }) 
    message.channel.send("> " + evet + " **| " + sayi + " adet role " + tag + " tagını verdim!**") } 
  else 
    return message.channel.send("> " + hayir + " **| toplu-tag [kullanıcı | rol | kanal] [tag]**"); };
exports.conf = {
  enabled: true, 
  guildOnly: false,
  aliases: ['toplutag'],
  permLevel: 3 
}; 
exports.help = { 
  name: 'toplutag', 
  category: "yetkili", 
  description: 'Gelişmiş Toplu Tag',
  usage: 'toplu-tag [kullanıcı | rol | kanal] [tag]' 
};
