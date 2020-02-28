
const Discord = require('discord.js');
const { stripIndents } = require('common-tags');

exports.run = (client, msg, args) => {


let x;
    let x2;
    let x3;
    let x4;
    let x5;
    let x6;
    let x7;
    let x8;
    let x9;
    let x10;
    let x11;
    
    //yönetici
    if (msg.member.hasPermission("ADMINISTRATOR")) x = "<:yeseevet:629019451794391051>"
    if (!msg.member.hasPermission("ADMINISTRATOR")) x = "<:heyir:629019490188918864>"
    
    //Denetim kaydı
    if (msg.member.hasPermission("VIEW_AUDIT_LOG")) x2 = "<:online:616578123408080896> "
    if (!msg.member.hasPermission("VIEW_AUDIT_LOG")) x2 = "<:heyir:629019490188918864>"
    
    //Sunucuyu yönet
    if (msg.member.hasPermission("MANAGE_GUILD")) x3 = "<:online:616578123408080896> "
    if (!msg.member.hasPermission("MANAGE_GUILD")) x3 = "<:heyir:629019490188918864>"
    
    //Rolleri yönet
    if (msg.member.hasPermission("MANAGE_ROLES")) x4 = "<:online:616578123408080896> "
    if (!msg.member.hasPermission("MANAGE_ROLES")) x4 = "<:heyir:629019490188918864>"
    
    //Kanalları yönet
    if (msg.member.hasPermission("MANAGE_CHANNELS")) x5 = "<:online:616578123408080896> "
    if (!msg.member.hasPermission("MANAGE_CHANNELS")) x5 = "<:heyir:629019490188918864>"
    
    //üyeleri at
    if (msg.member.hasPermission("KICK_MEMBERS")) x6 = "<:online:616578123408080896> "
    if (!msg.member.hasPermission("KICK_MEMBERS")) x6 = "<:heyir:629019490188918864>"
    
    //üyeleri yasakla
    if (msg.member.hasPermission("BAN_MEMBERS")) x7 = "<:online:616578123408080896> "
    if (!msg.member.hasPermission("BAN_MEMBERS")) x7 = "<:dnd:616578130588729344> "
    
    //mesajları yönet
    if (msg.member.hasPermission("MANAGE_MESSAGES")) x8 = "<:online:616578123408080896> "
    if (!msg.member.hasPermission("MANAGE_MESSAGES")) x8 = "<:dnd:616578130588729344> "
    
    //kullanıcı adlarını yönet
    if (msg.member.hasPermission("MANAGE_NICKNAMES")) x9 = "<:online:616578123408080896> "
    if (!msg.member.hasPermission("MANAGE_NICKNAMES")) x9 = "<:dnd:616578130588729344> "
    
    //emojileri yönet
    if (msg.member.hasPermission("MANAGE_EMOJIS")) x10 = "<:online:616578123408080896> "
    if (!msg.member.hasPermission("MANAGE_EMOJIS")) x10 = "<:dnd:616578130588729344> "
    
    //webhookları yönet
    if (msg.member.hasPermission("MANAGE_WEBHOOKS")) x11 = "<:online:616578123408080896> "
    if (!msg.member.hasPermission("MANAGE_WEBHOOKS")) x11 = "<:dnd:616578130588729344> "
    

  let embed = new Discord.RichEmbed()

.setColor(0x36393E)
.setTitle(`Yetkilerin:`)
.setDescription(`${x} Yönetici\n${x2} Denetim Kaydını Görüntüle\n${x3} Sunucuyu Yönet\n${x4} Rolleri Yönet\n${x5} Kanalları Yönet\n${x6} Üyeleri At\n${x7} Üyeleri Yasakla\n${x8} Mesajları Yönet\n${x9} Kullanıcı Adlarını Yönet\n${x10} Emojileri Yönet\n${x11} Webhook'ları Yönet`)
.addField(`**Bilgi**`,'Başında <:off:640435689380511749>    olanlar o yetkiye sahip olunmadığını gösterir. \nBaşında  <:on:640435640189845506>  olanlar o yetkiye sahip olunduğunu gösterir.')
    return msg.channel.send(embed);
  
  
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['izinlerim'],
  permLevel: 0,
};

exports.help = {
  name: 'yetkilerim',
  category: "Kullanıcı",
  description: 'Komutu kullandığınız sunucudaki yetkilerinizi/izinlerinizi gösterir.',
  usage: 'yetkilerim'
};