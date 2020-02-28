const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => {
   if (!message.guild) {
  return }
  let kullanıcı = await db.fetch(`gold_${message.author.id}`);

  if( kullanıcı == undefined){
message.channel.send("Bu Komutu Kullanabilmek İçin **Gold Üye** Olmalısın")}else{
      if( kullanıcı == 'gold'){
 if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) {
    const botunmesajyonet = new Discord.RichEmbed()
      .setColor('8e0505')
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField(':warning: Uyarı :warning:', 'Mesajları silebilmem için `Mesajları Yönet` yetkisine sahip olmalıyım.')
    return message.author.sendEmbed(botunmesajyonet);
  }
  let messagecount = parseInt(args.join(' '));  
  message.channel.fetchMessages({
    limit: 100
  }).then(messages => message.channel.bulkDelete(messages));
    const sohbetsilindi = new Discord.RichEmbed()
     .setColor('8e0505')
    .setTimestamp()
    .addField('Eylem:', 'Sohbet silme')
    .addField(' Silen Gold Üye:', message.author.username)
    .addField('Sonuç:', `Başarılı`)
    return message.channel.sendEmbed(sohbetsilindi);
    console.log("Sohbet " + message.member + " tarafından silindi!");
    }
  }
  
};

    
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["goldsohbetsil"],
  permLevel: 0
};

exports.help = {
  name: 'goldsohbetsil',
  category: `Gold`,
  description: 'Belirlenen miktar mesajı siler.',
  usage: 'temizle <temizlenecek mesaj sayısı>'
};