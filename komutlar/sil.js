const Discord = require("discord.js");

module.exports.run = async (client, message) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Yeterli yetkiye sahip değilsin.");
  message.channel.bulkDelete(99);
    message.channel.bulkDelete(99);
    message.channel.bulkDelete(99);
    message.channel.bulkDelete(99);
    message.channel.bulkDelete(99);
    message.channel.bulkDelete(99);
    message.channel.bulkDelete(99);
    message.channel.bulkDelete(99);
    message.channel.bulkDelete(99);
    message.channel.bulkDelete(99);
    message.channel.bulkDelete(10)
    .then(() => {
  message.channel.send(`**${1000}** mesajı sildim.`).then(msg => msg.delete(2000));
});


}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sil',
  description: '1000 mesaj siler',
  usage: 'sil'
  
};