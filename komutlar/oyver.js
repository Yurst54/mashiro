const Discord = require('discord.js');
const Jimp = require('jimp');
const db = require('quick.db'),
      ms = require('parse-ms');

exports.run = async (bot, message, args) => {
 
   if(message.guild.id !== '599178367253610508') return message.channel.send('Bu komut sadece destek sunucumda çalışmaktadır.')
 
    if(message.member.roles.has('670169105176723456') === true) return message.channel.send(`Zaten destekçi rolün bulunuyor fazlasını ne yapacaksın`)

 
   

     const snekfetch = require("snekfetch");
snekfetch.get(`https://mashirobotlistt.glitch.me/api/botlar/{bot_id}/oylar/{user_id}`)
.set("Authorization", bot.ayarlar.token)
.then(response => {
var check = response.body.voted;
if (check == 1) {
   
 
  const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setDescription('**Destekçi** rolünüzü aldınız botu oyladığınız için teşekkürler, 12 saat sonra rolünüz otomatik alınacaktır ve tekrar oy vererek **destekçi** rolünü alabilirsiniz.')
.setTimestamp()
  message.channel.send(embed)
  message.member.addRole('670169105176723456')
    } else {
let embed = new Discord.RichEmbed()
      .setTitle('HATA')
      .setColor('RANDOM')
      .setDescription(`${bot.emojis.get(bot.emojiler.hayır)} **Hata**, Destekçi rolünü almak için **12** saat aralıkla **[BURADAN](https://mashirobotlistt.glitch.me/bot/670232470414688256/oyver)**  botu oylamanız gerekmektedir. Onayladıktan sonra sisteme geçmesi **1-4** dakikayı bulabilir, lütfen bekleyin. `)
    message.channel.send(embed)
      return }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["oy-verdim","oyver"],
  permLevel: 0,
  kategori: "bot"
};

exports.help = {
  name: 'oyver',
  categori: 'Kullanıcı',
  description: '',
  usage: ''
};