const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {
    let kullanıcı = await db.fetch(`gold_${message.author.id}`)
  let kullanıcıYazi;
  if (kullanıcı == undefined) kullanıcıYazi = '<a:hayir:666338110988091442>Bu Kullanıci Gold Uye Degil'
  if (kullanıcı == 'gold') kullanıcıYazi = '<a:gucenli:666338076221505557>Bu Kullanıci Gold Uye'
 // if (nemesis == 'deaktif') nemesisYazi = 'Bu sunucuda Premium mod aktif değil.'
  const embed = new Discord.RichEmbed()
  .setTitle('<a:shardr:666980258121121802>》Gold Kontrol《<a:shardr:666980258121121802>')
  .setColor("GOLD")
  .setDescription(kullanıcıYazi)
  message.channel.send(embed)
  }

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0,
}

exports.help = {
    name: 'gold-kontrol',
    category: `Gold`,
    description: 'Premium Kontrol Eder.',
    usage: 'premium-kontorol'
}