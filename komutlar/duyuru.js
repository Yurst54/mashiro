const send = require('quick.hook');
const Discord = require('discord.js');
const client = new Discord.Client()

exports.run = (bot, message, args, tools) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Bu Komutu Kullanabilmek İçin **Mesajları Yönet** Yetkisine Sahip Olman Gerek .");

    let split = '|';

    if(!args[0]) {
        return message.channel.send("**Duyuru Yapabilmen İçin Bir Mesaj Belirtmen Gerek.** `!!duyuru <mesajınız>`");
    }

    args = args.join(' ').split(split);

    for (var i = 0; i < args.length; i++) args[i] = args[0].trim();

    if(args[2]) args[2] = parseInt(`0x${args[2]}`);

    let option = {
        title: args[0] || 'Duyuru Sistemi',
        embedColor: args[2] || 0xffffff,
        icon: `https://cdn.glitch.com/71ad7fcf-ead4-4292-bb3b-29a1456c8b28%2Ff63da952c3d994171437aa524f55187b.png?v=1580301162561`
    }

    const embed = new Discord.RichEmbed()
        .setColor(option.embedColor)
        .setTitle(option.title)

    if(option.message) embed.setDescription(option.message);

    message.delete();

    let announceEmbed = new Discord.RichEmbed()
    .setColor(`RANDOM`)
    .setTimestamp()
    .setTitle(option.title)
    
    client.channels.get("669572565349433355").send(announceEmbed);

}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['duyuruyap','duyuru-yap'],
    permLevel: 0
}

exports.help = {
    name: 'duyuru',
  category: 'Yetkili',
    description: 'Sunucuya giren kullanıcıya seçtiğiniz rolü otomatik verir.',
    usage: 'duyuru <@rol>'
}