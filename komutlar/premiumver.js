const Discord = require('discord.js')
const fs = require('fs');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => { 
if(message.author.id !== ayarlar.sahip) return message.channel.send(" Bu komutu sadece geliştiricim kullanabilir.");

 const args0 = args[0];
  if(!args0) {
    message.channel.send(message.author.username + ", Sunucu **id** yaz!")
  } else {
  
db.set(`premod_${args0}`, "aktif")
  //message.channel.get("672184407850745856").send(`\`premod_${args0}\` Sunucu Premium`)
  message.channel.send(`<a:gucenli:666338076221505557> Başarıyla Premium verildi.`)
  client.channels.get("675042138211483668").send(`<a:shardp:666980295081459724>\`${args0}\`<a:shardp:666980295081459724> Artık Premium Sunucu`)
  }
  }
    
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['premium-ver'],
    permLevel: 4,
      
}

exports.help = {
    name: 'premiumver',
    category: `PremiumSunucu`,
    description: '',
    usage: '',

}