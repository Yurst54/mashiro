const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => {
 if (!message.guild) {
  return }  
let kullanıcı = await db.fetch(`gold_${message.author.id}`);

  if( kullanıcı == undefined){
message.channel.send(" Bu Komutu Kullanabilmek İçin **Gold Üye** Olmalısın")}else{
      if( kullanıcı == 'gold'){
message.delete();

   let question = args.join(' ');

   let user = message.author.username

   if (!question) return message.channel.sendEmbed(

     new Discord.RichEmbed()

     .addField(`:x:yazı yazman gerek :x:`)).then(m => m.delete(5000));

     console.log("oylama komutu " + message.author.username + '#' + message.author.discriminator + " tarafından kullanıldı.")
     message.channel.sendEmbed(

       new Discord.RichEmbed()

          .setColor('260aff')
       .setThumbnail(client.user.avatarURL)
       .setTimestamp()

       .addField(`**Oylama**`, `**${question}**`)).then(function(message) {

         message.react('👍');

         message.react('👎');

          })
    
  
  
};

}

    }
    

  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'gold-oylama',
  category: `Gold`,
  description: 'Oylama yapmanızı sağlar.',
  usage: 'oylama <oylamaismi>'
};