const Discord = require('discord.js');
const moment = require('moment');
const ms = require('ms')
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
  
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  
  let room = message.mentions.channels.first()
  let title = args.slice(3).join(" ")
  let duration = args[1]
  let sure = args[2]
  let bisi;
  let filter = m => m.author.id === message.author.id;
  
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`Bu komutu kullanabilmek için "\`Mesajları Yönet\`" yetkisine sahip olmalısın.`);
  if (!room) return message.channel.send(`Çekiliş kanalını etiketlemelisin. \`${prefix}çekiliş #çekiliş 2 gün Steam Key\``)
  if (!duration || duration >= '60') return message.channel.send(`Bir süre yazmalısın. \`${prefix}çekiliş #çekiliş 2 gün Steam Key\``)
  if (!sure || !sure == 'saniye' || !sure == 'dakika' || !sure == 'saat' || !sure == 'gün' ) return message.channel.send(`Süreyi doğru yazmalısın. \`${prefix}çekiliş #çekiliş 2 gün Steam Key\``)
  if (!title) return message.channel.send(`Ödülü yazmalısın. \`${prefix}çekiliş #çekiliş 2 gün Steam Key\``)
  if (sure == 'saniye') bisi = 'seconds'
  if (sure == 'dakika') bisi = 'minutes'
  if (sure == 'saat') bisi = 'hours'
  if (sure == 'gün') bisi = 'days' 
  
  let giveEmbed = new Discord.RichEmbed()
  .setColor("BLUE")
  .setAuthor(`Mashiro Bot`)
  .setDescription(`${title} Çekilişi \n🎉 emojisine tıklayarak çekilişe katılabilirsiniz.\n\n**Çekiliş Süresi :** ${duration} ${sure}`)
  .setFooter(`Çekilişi Yapan Yetkili : ${message.author.tag}`, message.author.avatarURL);
  room.send(giveEmbed).then(m => {
   
    let re = m.react('🎉');
    setTimeout(() => {
      let users = m.reactions.get("🎉").users
      let list = users.array().filter(u => u.id !== m.author.id !== client.user.id);
      let gFilter = list[Math.floor(Math.random() * list.length) + 0]
      if (gFilter == client.user) gFilter = `Kimse`
      
      let endEmbed = new Discord.RichEmbed()
      .setColor("BLUE")
      .setAuthor(`${title} Çekilişi`)
      .setDescription(`**Çekilişi Kazanan :** ${gFilter}`)
      .setFooter(`Çekilişi Yapan Yetkili : ${message.author.tag}`, message.author.avatarURL)
      m.edit(endEmbed)
   }, ms(`${duration} ${bisi}`))
  });
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'çekiliş',
  category: 'Yetkili',
  description: 'Çekiliş yaparsınız. Kullanım: ,çekiliş <#kanal> <süre> <ödül>',
  usage: 'çekiliş <#kanal> <süre> <ödül>'
};