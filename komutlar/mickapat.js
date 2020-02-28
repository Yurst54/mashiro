const Discord = require('discord.js');
const ms = require("ms");

exports.run = (client, message, args) => {
    if (!message.member.hasPermissions("MUTE_MEMBERS")) return message.channel.send("Bu Komutu Kullanabilmek İçin Üyeleri Sustur İznin Olması lazım !!! ")
    let kullanici = message.mentions.members.first()
    
    let süre = args[1]
    if (!süre) return message.reply("Süre belirtmelisin.")
    if (!kullanici) return message.channel.send("Kimi susturacağını belirtmedin.")
    kullanici.setMute(true, `Susturan yetkili: ${message.author.tag} - Susturma süresi: ${süre}sustur`)
        .then(() =>
            message.channel.send(`${kullanici} \`${süre}\`** Ses Kanallarında Susturuldu **.`))
        .catch(console.error);
        setTimeout(() => {

        kullanici.setMute(false,`Süresi dolduğu için susturması kaldırıldı.`)
        message.channel.send(`${kullanici} Mute Süresi Doldu Ve Susturulması Açıldı :) `)

    }, ms(süre))
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'mic-mute',
    category: `Yetkili`,
    description: 'Seslideki Birinin Mic Kapatır',
    usage: "mic-kapat"
};