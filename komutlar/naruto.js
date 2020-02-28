const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
let replies = [
"https://tenor.com/view/shiina-mashiro-gif-14721761"
];
  
let result = Math.floor((Math.random() * replies.length));
let gifembed = new Discord.RichEmbed()                 
.setColor(0x36393E)         
.setFooter(`Walker PRE | © 2019‼`, message.author.avatarURL)         
.setImage(replies[result]);      
message.channel.send(gifembed); 
}; 

exports.conf = {   
  enabled: true,   
  guildOnly: false,   
  aliases: ['naruto-gif','ngif'],   
  permLevel: 0 
};  
exports.help = {   
  name: 'walker',   
  description: 'Rastgele naruto atar.',   
  usage: 'naruto',
  category: 'Kullanıcı'
}; 