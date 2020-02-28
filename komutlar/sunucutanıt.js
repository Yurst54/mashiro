const Discord = require('discord.js')

const ms = require("ms")
const db = require('quick.db')
  
  exports.run = async(client, message, args) => {
    
 // exports.run = async(client, message, args) => {
  if (!db.has(`premod_${message.guild.id}`) == true) {
    
      
      return message.channel.send(" Bu sunucuda **premium mod aktif değil**, bu sebepten dolayı premium sunucu kodlarını kullanamazsınız.")

    
  } else {
  
  let cooldown = 8.64e+7, // 24 Saat
        amount = Math.floor(Math.random() * 1000) + 4000;      

    let lastDaily = await db.fetch(`gunluk_${message.guild.id}`);
    if (lastDaily !== null && cooldown - (Date.now() - lastDaily) > 0) {
        let timeObj = ms(cooldown - (Date.now() - lastDaily));

        
        const embed = new Discord.RichEmbed()
    .setDescription('Bu Komutu Sadece `24 Saatte` Bir Kullanabilirsin.')
            .setColor(0x00ffff)
        message.channel.send({embed})
        
    } else {
        const embed = new Discord.RichEmbed()
  .setTitle('Başarılı ')
.setDescription('**Sunucunuz Başarıyla** [Sunucumda](https://discord.gg/kNEfApn) **Tanıtıldı.**\n**24 Saat Sonra Tekrar Sunucunuzu Tanıtabilirsiniz.**')
        .setColor('GREEN')
 message.channel.sendEmbed(embed);
    message.channel.createInvite({maxAge: 0}).then((invite) => {
        const embed = new Discord.RichEmbed()
            .addField(`***》Tanıtan Kişi***`, message.author.tag, true)
            .addField(`***》Tanıtılan Sunucun İsmi***`, message.guild.name, true)
      .addField(`***》Sunucudaki Üye Sayısı***`, message.guild.members.size, true)
      .addField(`***》Sunucu Davet Linki***`, invite.url, true)
            .setColor('RANDOM')
      .setThumbnail(message.guild.iconURL)
       client.channels.get('675041249815953420').send(embed)
    db.set(`gunluk_${message.guild.id}`, Date.now());
        }
      )
    }
  }
}


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['sunucu-tanıt'],
    permLevel: 0,
    kategori: "<a:shardr:666980258121121802>Kullanıcı",
}

exports.help = {
    name: 'sunucutanıt',
  category: `PremiumSunucu`,
    aciklama: 'Sunucunuzu Tanıtır.',
    kullanim: 'w!sunucutanıt'
}
