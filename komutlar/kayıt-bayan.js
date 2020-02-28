const Discord = require('discord.js');
const db = require('quick.db')
module.exports.run = async (bot, message, args, member, client, level) => {
  const dogrulandi = bot.emojis.find(emoji => emoji.name === "tik");
  if (!message.member.hasPermission("ADMINISTRATOR"))
  if (!message.member.hasPermission("MANAGE_ROLES"))
  if (!message.member.roles.find('name', 'Elemental Bot Komut | 🤖')) return message.channel.send('Yetkin yetmiyor.');
  let user = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!user) return message.reply("**Etiket Atmayı Unuttun Knk**");
  user.addRole('636628543958417409')
  user.removeRole('636628546172878868')
const ky = new Discord.RichEmbed()
        .setDescription(`${user} kullanıcısına <@&636628543958417409> rolu verildi.`)
        .setColor('BLACK')
        message.channel.send(ky)
        message.react(dogrulandi)
} 
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
}
exports.help = {
    name: 'kadın',
    description: 'erkek',
    usage: 'erkek'
}