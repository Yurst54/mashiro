const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
exports.run = async (client, message, args) => {
var args = message.content.split(" ").slice(1);    
var year = message.author.createdAt.getFullYear()
var month = message.author.createdAt.getMonth()
var day = message.author.createdAt.getDate()
var men = message.mentions.users.first();  
if (args == '') {
var z = message.author;
}else {
var z = message.mentions.users.first();
}

let d = z.createdAt;          
let n = d.toLocaleString();   
let x;                       
let y;                        

if (z.presence.game !== null) {
y = `${z.presence.game.name}`;
} else {
y = "Etkinlik Yok.";
}
if (z.bot) {
var w = 'Evet.';
}else {
var w = 'Hayır.';
}
let embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle(`** ${z.username}** **Hakkında Bilgiler.**`)
.addField('`Kullanıcı Adın`',`**<@` + `${z.id}` + `>**`, true)
.addField('`ID`', "**"+ `${z.id}` +"**",true)
.addField('`Etkinlik`','**'+y+'**' , true)
.addField('`Bot mu?`',"**"+ w + "**",true)    
.addField('`Tag`',"**#" +  `${z.discriminator}**`,true)
.addField('`Hesabın`' ,day + "/"+ month +"/"+ year+(' tarihinde kuruldu!'))    
.addField("`Bu sunucuya`", message.member.joinedAt.toLocaleString() + (' tarihinde girdin!'))    
.addField("`Son mesajın`", message.author.lastMessage)            

.setThumbnail(`${z.avatarURL}`)
.setFooter(message.author.username, message.author.avatarURL)

message.channel.send({embed});
};


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 2,
}

exports.help = {
    name: 'id',
  category: 'Yetkili',
    description: 'Sunuzunuzu Tanıtmak İçin En Uygun Kod!',
    usage: 'x!'
}