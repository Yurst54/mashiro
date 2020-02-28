const Discord = require('discord.js');
const db = require('quick.db')
const moment = require('moment')
exports.run = async(client, message, args) => { 
  
  if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Bot ismini değiştirmek için yeterli yetkiye sahip değilsin.");  
  

  let CodeBlue = args.slice(1).join(' ');

  if(!CodeBlue) return message.reply('Botun değiştirilecek ismini belirtmelisin.')
  
  if(CodeBlue === client.user.username ) message.reply('Belirttiğiniz isim bot ismiyle aynı.')
  
  message.guild.members.get(client.user.id).setNickname(CodeBlue)
  
 
 let log = message.guild.channels.find(c => c.id === "675042081080868923") //Buradaki Kanal ismini kendinize gore ayarlayin basvuru mesajlari bu kanal gelecektir
  message.channel.send(':tada: Botun ismi,**'+message.guild.name+'** Sunucusunda **'+CodeBlue+'** olarak güncellendi.')
  message.guild.channels.find("669572564858830859")
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['bot-ismi'], 
  permLevel: 0
};

exports.help = {
  name: 'bot-isim',
  category: `Yetkili`,
  description: 'taslak', 
  usage: 'bot-isim'
};