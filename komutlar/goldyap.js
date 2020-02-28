const db = require("quick.db");
const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args) => {
  if (!message.guild) {
    return;
  }
  if (message.author.id != ayarlar.sahip)
    return message.channel.send("Bu Komutu Sadece Botun Sahibi Kullanabilir!");

  let nesne = args[0];
  if (!nesne)
    return message.channel.send("Bir kullanıcının IDsini girmelisin?");

  db.set(`gold_${nesne}`, "gold");
  message.channel.send(`\`${nesne}\` Artik Gold Uye`)
  client.channels
    .get("675042035241320469")
    .send(`<a:shardr:666980258121121802>\`${nesne}\`<a:shardr:666980258121121802> ID Kullanıcı Artık Gold Üye<a:shardr:666980258121121802>`);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["goldyap"],
  permLevel: 0
};
exports.help = {
  name: "goldyap",
  category: `Gold`,
  description: "Gold üye yaparsınız",
  usage: "goldyap <ID>"
};
