const Discord = require("discord.js")
const db = require('quick.db')

exports.run = async(client, message, args) => {
    let kullanıcı = await db.fetch(`gold_${message.author.id}`);

  if( kullanıcı == undefined){
message.channel.send("<a:shardr:666980258121121802> Bu Komutu Kullanabilmek İçin **Gold Üye** Olmalısın")
  }else{
      if( kullanıcı == 'gold'){                
  let prefix = await db.fetch(`guildPrefix_${message.guild.id}`) || "/";
                    // Return Statements
                     if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendEmbed(new Discord.RichEmbed()
         .setDescription(`Yetkin yok!`)
          .setColor('8e0505')); // This returns if it CANT find the admin perm on them. It then uses the function to send to message.channel, and deletes the message after 120000 milliseconds (2minutes)
                
                    // Fetch the new channel they mentione
                   let komut = await db.fetch(`sunucuKomut_${message.guild.id}`) // If they didn't write none, set what they wrote as the message
                     let gonderileceksey = await db.fetch(`sunucuMesaj_${message.guild.id}`)
                     if(!komut) return message.channel.send('Bu sunucuda özel komut ayarlı değil.')
                         let komutvarmi = await db.fetch(`sunucuKomut_${message.guild.id}`)
                    if(!args[0]) return message.channel.send(`Lütfen silmek istediğiniz özel komudu giriniz.\nMevcut özel komutlar: \`${komut}\``)
                    if(args[0] !== komut) return message.channel.send(`Bu komut mevcut değil.\nMevcut özel komutlar: \`${komut}\``)
                   if(args[0] == 'Bulunmuyor.') return message.channel.send(`Bu komut mevcut değil.\nMevcut özel komutlar: \`${komut}\``)
                    // This will update the .text of the joinMessageDM_guildID object.
                     let welcomeEmbed = new Discord.RichEmbed()
                     .addField(`Bu sunucudan özel komut silindi.`, `\`${komut}\` silindi.`)
                     .setColor('8e0505')
                
                     db.set(`sunucuKomut_${message.guild.id}`, 'Bulunmuyor.')
                     db.delete(`sunucuMesaj_${message.guild.id}`, gonderileceksey)
                        message.channel.send(welcomeEmbed) // Finally, send in chat that they updated the channel.
                     };
}

    }
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'gold-komut-sil',
  category: `Gold`,
  description: '',
  usage: ''
};