const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, params, args) => {

  if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(':no_entry: Hoşgeldin kanalı ayarlamak için `Yönetici` yetkisine sahip olman gerek.')
    db.delete(`gcc_${message.guild.id}`)
  let i = await db.fetch(`gcc_${message.guild.id}`)
  message.channel.send(`**Hoşgeldin kanalı,** **başarıyla sıfırlandı.** <a:tik:616584738370486303>`)    
  

        
};

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['hgbbs','hgbb-sıfırla','resimlihgbbs','girişçıkışsıfırla','gçsıfırla','gçs'],
 permLevel: 3
};

exports.help = {
 name: 'hgbbsıfırla',
 description: 'Hoşgeldin baybay resimli sıfırlama.',
 usage: 'hgbbsıfırla',
  category: 'Yetkili'
};
