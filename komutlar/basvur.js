const Discord = require('discord.js');

exports.run = (client, message, args) => {
  
let guild = message.guild
let members = message.author.id
 let log = message.guild.channels.find(c => c.id === "669572566679027712") //Buradaki Kanal ismini kendinize gore ayarlayin basvuru mesajlari bu kanal gelecektir
   let bilgi = args.slice(0).join(' ')
   if (!bilgi) return message.reply('**⚠️ İsmini Yazmalısın!**').catch(console.error);
   message.guild.members.get(args[0])
   let yaş = args.slice(1).join(' ')
   if (!yaş) return message.reply('**⚠️ Sence seni neden yetkili olarak almalıyız nedenini yazmalısın!**').catch(console.error);
   
     const embed1 = new Discord.RichEmbed()
    .setColor('RED')
    .setTimestamp()
  .setTitle('✅ Başvuru Başarılı!')
  .setDescription(`☑ **Başarıyla Başvurunuz Alınmıştır!\n🔖 Bilgilerin: \`${bilgi}\`**`)
message.channel.send(embed1)

   const embed = new Discord.RichEmbed()
   .setColor("RED")
   .setTimestamp()
   .setTitle("📳 Başvuru Geldi 🔥")
   .setDescription(`**☑ Başvuran Kişi: <@${members}> | ${members}\n📃 Kişi Bilgileri: \`${bilgi}\`**`)
   log.send(embed) 
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'başvuru',
  category: `Yetkili`,
  description: 'başvuru',
  usage: ' başvuru'
}