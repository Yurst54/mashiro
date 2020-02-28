const Discord = require('discord.js');

exports.run = function (client, message, args) {
    let kanal = message.mentions.channels.first();
    let duyurumetni = args.join(" ").slice(22);
    if(!kanal) return message.channel.send(":x: Hata bir kanal etiketlemelisini!");
  if(!duyurumetni) return message.channel.send(":x: Hata duyuru metni yazmalısınız!");
  message.delete();
  message.channel.send(":ballot_box_with_check: Başarıyla duyuruldu!");
    kanal.createWebhook("Duyuru 📢")
    .then(webhook => webhook.edit("Mashiro")
        .then(wb => {
            const duyurucu = new Discord.WebhookClient(wb.id, wb.token, wb.avatarURL);
            duyurucu.send(duyurumetni)
            duyurucu.delete()
        })
        .catch(console.error))
        .catch(console.error);
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

module.exports.help = {
  name: 'duyuruyap',
  category: `Yetkili`
};

//XiR Developer Team