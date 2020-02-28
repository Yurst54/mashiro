const Discord = require("discord.js");

exports.run = function(client, message, args) {
  var öneri = args.slice(0).join(" ");
  var guildID = "675039301565677608";
  var channelID = "676860016807903271";

  if (!öneri) {
    return message.reply("Bir Mesaj Belirtin!");
  } else {
    var embed = new Discord.RichEmbed()
      .setTimestamp()
      .addField(
        "<a:gucenli:666338076221505557>Eylem:",
        `Tavsiye`
      )
      .addField(
        "<a:rainbowleft:666978584975507456>Kullanıcı:",
        message.author.tag
      )
      .addField("<a:rainbowleft:666978584975507456>ID", message.author.id)
      .addField("<a:rainbowleft:666978584975507456>Öneri", öneri)
      .setThumbnail(message.author.avatarURL)
      .setColor("BLUE");
    client.guilds
      .get(guildID)
      .channels.get(channelID)
      .send(embed);
    message.channel.send(`Tavsiyeniz Destek Sunucumuzda loglara Atildi! Teşekkür Ederiz!`);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["tavsiye"],
  permLevel: 0
};

exports.help = {
  name: "tavsiye",
  description: "bot hakkındaki önerilerinizi bot sahiplerine ulaştırır",
  usage: "öneri <mesaj>"
};
