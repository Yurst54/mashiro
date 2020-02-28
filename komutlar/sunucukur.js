const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.RichEmbed()
                                                                                      .setDescription('Bu komuTu kullanmak için **Yönetici** yetkisine sahip olmalısın.')
                                                                                      .setColor(10038562));
     message.guild.owner.send('Sunucu Kurulumu Başladı')
       message.guild.channels.forEach(function(kan) {
       message.guild.roles.forEach(function(rol) {
                 kan.delete()
                 rol.delete()
       })}) 
     
    
    message.guild.createRole({
        name: `Owner`,
        color: "#46FE95", 
        hoist: true,
        permissions: [
            "ADMINISTRATOR",
    ]
    }).then(kurucurol => {
    message.guild.createRole({
        name: `Admin`,
        color: "RED",
        hoist: true,
        permissions: [
            "MANAGE_GUILD",
            "MANAGE_ROLES",
            "MUTE_MEMBERS",
            "DEAFEN_MEMBERS",
            "MANAGE_MESSAGES",
            "MANAGE_NICKNAMES",
            "KICK_MEMBERS"
    ]
        }).then(adminrol => {
    message.guild.createRole({
        name: `Moderatör`,
        color: "#f1c40f" ,
        hoist: true,
        permissions: [
            "MANAGE_GUILD",
            "MANAGE_ROLES",
            "MUTE_MEMBERS",
            "DEAFEN_MEMBERS",
            "MANAGE_MESSAGES",
            "MANAGE_NICKNAMES"
    ]
        }).then(modrol => {
    message.guild.createRole({
        name: `Support team`,
        color: '#f1c40f',
        hoist: true
        }).then(destekrol => {
    message.guild.createRole({
        name: `Private Person`,
        color: "#ee77ff" ,
        hoist: true
        }).then(özelrol => {
    message.guild.createRole({
        hoist: true,
        name: `Partner`,
        color: "GREEN" 
        }).then(partnerrol => {
    message.guild.createRole({
        hoist: true,
        name: `Botlar`,
        color: "#413FEE" 
        }).then(botrol => {
    message.guild.createRole({
        hoist: true,
        name: `Member`,
        color: "#00fff5" 
        }).then(üyerol => {
      
      
    })})})})})})})})
  //  message.guild.members.get(message.guild.owner).addRole(message.guild.roles.find("name", "owner"))
    
     message.guild.createChannel(`Important Channels`, "Category").then(duyurukategorisi => {
     message.guild.createChannel(`Writing Channels`, "Category").then(sohbetkategori => {
     message.guild.createChannel(`Audio Channels`, "Category").then(SesKategori => {
     message.guild.createChannel(`[A]way [F]rom [K]eyboard`, "Category").then(AFKkategori => {  
     message.guild.createChannel(`fun `, "Category").then(OyunKategori => {
     message.guild.createChannel(`Authorized`, "Category").then(YetkiliKategori => {  
        
     message.guild.createChannel(`Rules`, "text").then(kuralkanal => {
     message.guild.createChannel(`Announcements`, "text").then(duyurukanal => {
     message.guild.createChannel(`partners`, "text").then(partnerkanal => {
     message.guild.createChannel(`PartnersŞart`, "text").then(partnersartkanal => {
     message.guild.createChannel(`Chat`, "text").then(sohbetkanal => {
     message.guild.createChannel(`Bot-command`, "text").then(botkomutkanal => {
     message.guild.createChannel(`music 1`, "voice").then(müzik1kanal => { 
     message.guild.createChannel(`music 2`, "voice").then(müzik2kanal => {
     message.guild.createChannel(`music Sohbet 1`, "voice").then(ses1kanal => {
     message.guild.createChannel(`vowel Sohbet 2`, "voice").then(ses2kanal => {
     message.guild.createChannel(`vowel Sohbet 3`, "voice").then(ses3kanal => {
     message.guild.createChannel(`vowel Oyun Odası`, "voice").then(oyunseskanal => { 
     message.guild.createChannel(`Word-Türetmece`, "text").then(kelimetüretme => { 
     message.guild.createChannel(`Issue-Counting`, "text").then(sayısayma => { 
     message.guild.createChannel(`records`, "text").then(kayıtlar => {
     message.guild.createChannel(`input-output`, "text").then(girişçıkış => { 
     message.guild.createChannel(`media`, "text").then(medyakanal => {
     message.guild.createChannel(`support`, "text").then(destekkanal => { 
     message.guild.createChannel(`counter`, "text").then(sayaçkanal => { 
     message.guild.createChannel(`AFK`, "voice").then(afkkanal => { 
      
      let role4 = message.guild.roles.find("name", "moderatör");
      let role3 = message.guild.roles.find("name", "admin");
      let role1 = message.guild.roles.find("name", "owner");
      let role2 = message.guild.roles.find("name", "@everyone");
      YetkiliKategori.overwritePermissions(role2, {
          SEND_MESSAGES: false,
          READ_MESSAGES: false
      });
      YetkiliKategori.overwritePermissions(role1, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      YetkiliKategori.overwritePermissions(role3, {
          SEND_MESSAGES: false,
          READ_MESSAGES: true
      });
      YetkiliKategori.overwritePermissions(role4, {
          SEND_MESSAGES: false,
          READ_MESSAGES: true
      });
      
      //////////////////////////////////////////////////////////////////////////////
      kayıtlar.overwritePermissions(role2, {
          SEND_MESSAGES: false,
          READ_MESSAGES: false
      });
      kayıtlar.overwritePermissions(role1, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      kayıtlar.overwritePermissions(role3, {
          SEND_MESSAGES: false,
          READ_MESSAGES: true
      });
      kayıtlar.overwritePermissions(role4, {
          SEND_MESSAGES: false,
          READ_MESSAGES: true
      });
      
      //////////////////////////////////////////////////////////////////////////////
      
      sayaçkanal.overwritePermissions(role2, {
          SEND_MESSAGES: false,
          READ_MESSAGES: false
      });
      sayaçkanal.overwritePermissions(role1, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      sayaçkanal.overwritePermissions(role3, {
          SEND_MESSAGES: false,
          READ_MESSAGES: true
      });
      sayaçkanal.overwritePermissions(role4, {
          SEND_MESSAGES: false,
          READ_MESSAGES: true
      });
      
      //////////////////////////////////////////////////////////////////////////////
      
      girişçıkış.overwritePermissions(role2, {
          SEND_MESSAGES: false,
          READ_MESSAGES: false
      });
      girişçıkış.overwritePermissions(role1, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      girişçıkış.overwritePermissions(role3, {
          SEND_MESSAGES: false,
          READ_MESSAGES: true
      });
      girişçıkış.overwritePermissions(role4, {
          SEND_MESSAGES: false,
          READ_MESSAGES: true
      });
      
//////////////////////////////////////////////////////////////////////////////      
      
      duyurukategorisi.overwritePermissions(role2, {
          SEND_MESSAGES: false,
          READ_MESSAGES: true
      });
      duyurukategorisi.overwritePermissions(role1, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      duyurukategorisi.overwritePermissions(role3, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      
      //////////////////////////////////////////////////////////////////////////////
      duyurukanal.overwritePermissions(role2, {
          SEND_MESSAGES: false,
          READ_MESSAGES: true
      });
      duyurukanal.overwritePermissions(role1, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      duyurukanal.overwritePermissions(role3, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      
      //////////////////////////////////////////////////////////////////////////////
    
      //////////////////////////////////////////////////////////////////////////////      
      
      partnerkanal.overwritePermissions(role2, {
          SEND_MESSAGES: false,
          READ_MESSAGES: true
      });
      partnerkanal.overwritePermissions(role1, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      partnerkanal.overwritePermissions(role3, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      
      //////////////////////////////////////////////////////////////////////////////
          
      kuralkanal.overwritePermissions(role2, {
          SEND_MESSAGES: false,
          READ_MESSAGES: true
      });
      kuralkanal.overwritePermissions(role1, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      kuralkanal.overwritePermissions(role3, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      
      //////////////////////////////////////////////////////////////////////////////      
      
      partnersartkanal.overwritePermissions(role2, {
          SEND_MESSAGES: false,
          READ_MESSAGES: true
      });
      partnersartkanal.overwritePermissions(role1, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      partnersartkanal.overwritePermissions(role3, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      
      //////////////////////////////////////////////////////////////////////////////
    
      kuralkanal.setParent(duyurukategorisi)
      duyurukanal.setParent(duyurukategorisi)
      partnerkanal.setParent(duyurukategorisi)
      partnersartkanal.setParent(duyurukategorisi)
      sohbetkanal.setParent(sohbetkategori)
      botkomutkanal.setParent(sohbetkategori)
      müzik1kanal.setParent(SesKategori)
      müzik2kanal.setParent(SesKategori)
      ses1kanal.setParent(SesKategori)
      ses2kanal.setParent(SesKategori)
      ses3kanal.setParent(SesKategori)
      oyunseskanal.setParent(OyunKategori)
      kelimetüretme.setParent(OyunKategori)
      sayısayma.setParent(OyunKategori)
      kayıtlar.setParent(YetkiliKategori)
      girişçıkış.setParent(YetkiliKategori)
      medyakanal.setParent(sohbetkategori)
      destekkanal.setParent(sohbetkategori)
      sayaçkanal.setParent(YetkiliKategori)
      afkkanal.setParent(AFKkategori)
       
      kuralkanal.send(`:tools: <@${message.guild.owner.id}> enter the rules of your server in this channel!`)
      partnersartkanal.send(`:tools: <@${message.guild.owner.id}> enter your server's terms of partnership into this channel!`)
      sayısayma.send(`We will go as far as we can from this number 1 in this channel.\n**Örneğin**\n1\n2\n3\n4\n**Rules!**\nAnyone can write only 1 number\nFirst number; 1`)
      kelimetüretme.send(`In this channel you will play the famous word derivation.\n**Örneğin;**\nfun\nmeme\nKutu\nUsta\n**Kurallar**\nEverybody is just down. *1* must write words.\nI say the first word; Pasta`)
       
      message.guild.owner.send(":white_check_mark: Server roles and channels set.\nIf freezing and so on. re-entering Discord if you are experiencing events.")
      
      
      
      
      
      
    })})})})})})})})})})})})})})})})})})})}) //UlA bUnA dOkUnMa
    })})})})})}) //Buna Dha
  } //xxXDohunmayınXxx
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sunucukur'],
  permLevel: 4
};
 
exports.help = {
  name: 'sunucukur',
  description: 'İngilizce sunucu kurar.',
  usage: 'server'
};