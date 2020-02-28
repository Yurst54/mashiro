const Discord = require("discord.js");
const fs = require("fs");
let config = require("../ayarlar.json");

module.exports.noPerms = (message, perm) => {
    let embed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setTitle("Yetersiz Yetki!")
        .setColor(config.red)
        .addField("Yetkim yeterli değil.", perm);

    message.channel.send(embed).then(m => m.delete(5000));
}

module.exports.equalPerms = (message, user, perms) => {

    let embed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setColor(config.red)
        .setTitle("Hata")
        .addField(`${user} yetkisi olan birine bunu yapamam.`, perms);

    message.channel.send(embed).then(m => m.delete(5000));

}

module.exports.botuser = (message) => {
    let embed = new Discord.RichEmbed()
        .setTitle("Hata")
        .setDescription("Botu banlayamazsın.")
        .setColor(config.red);

    message.channel.send(embed).then(m => m.delete(5000));
}

module.exports.cantfindUser = (channel) => {
    let embed = new Discord.RichEmbed()
        .setTitle("Hata")
        .setDescription("Kullanıcıyı bulamadım.")
        .setColor(config.red);

    channel.send(embed).then(m => m.delete(5000));
}

module.exports.noReason = (channel) => {
    let embed = new Discord.RichEmbed()
        .setTitle("Hata")
        .setDescription("Lütfen sebep bildir.")
        .setColor(config.red);

    channel.send(embed).then(m => m.delete(5000));
}