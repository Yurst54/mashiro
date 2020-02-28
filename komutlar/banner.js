const Discord = require('discord.js');
exports.run = async (client, message, args) => {
   let yazı = args.slice(0).join(' ');
   if (yazı.length < 1) return message.reply('Banner yapmak için bir şeyler yazmalısın.');
var request = require('request');
request(`https://valpha.glitch.me/api/banner?api=valphabey&yazi=${yazı}`, function (error, response, body) {
    if (error) return console.log('Hata:', error);
    else if (!error) {
        var veri = JSON.parse(body);
      const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(veri.mesaj)
   message.channel.send(embed);
    }
})}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};

exports.help = {
  name: 'banner',
  description: '',
  usage: ''
};