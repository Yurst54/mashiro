const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {
    let nemesis = await db.fetch(`premod_${message.guild.id}`)
  let nemesisYazi;
  if (nemesis == null) nemesisYazi = '<a:hayir:666338110988091442>Bu sunucuda Premium mod aktif değil.'
  if (nemesis == 'aktif') nemesisYazi = '<a:gucenli:666338076221505557> Bu sunucu için Premium mod aktif.'
  if (nemesis == 'deaktif') nemesisYazi = '<a:hayir:666338110988091442>Bu sunucuda Premium mod aktif değil.'
  const embed = new Discord.RichEmbed()
  .setTitle('<a:shardp:666980295081459724>》Premium Kontrol《<a:shardp:666980295081459724>')
  .setColor("BLUE")
  .setDescription(nemesisYazi)
  message.channel.send(embed)
  }

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0,
}

exports.help = {
    name: 'premium-kontrol',
    category: `PremiumSunucu`,
    description: 'Premium Kontrol Eder.',
    usage: 'premium-kontorol'
}