const Discord = require('discord.js');
const db = require('quick.db');
const chalk = require('chalk')
const moment = require('moment');
require('moment-duration-format');

exports.run = async (client, message, args) => {
  const duration = moment.duration(client.uptime).format('D [gün], H [saat], m [dakika], s [saniye]');
      
let shardinfo = {
        ping: await client.shard.fetchClientValues('ping'),
        server_count: await client.shard.fetchClientValues('guilds.size'),
        user_count: await client.shard.fetchClientValues('users.size'),
        uptime: await client.shard.fetchClientValues("uptime")
    }
let i = client.shard.id
    let shardembed = new Discord.RichEmbed()
    .setTitle('Shard İstatistik')
    .setFooter(`Bu Sunucunun Shardı: ${client.shard.id+1} `)
    .setColor('RED')
    .setThumbnail(client.user.avatarURL())
    for(i=0;i<client.shard.count;i++) {
        shardembed.addField(`Shard ${i+1} | Ping: ${Math.round(shardinfo.ping[i])}ms `, ` ${shardinfo.server_count[i]} Sunucu ve ${shardinfo.user_count[i]} Kullanıcı\nUptime ${moment.duration(shardinfo.uptime[i]).format(`D [Gün] , H [Saat], m [Dakika], s [Saniye]`)} `)
    }
    message.channel.send(shardembed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["shard"],
  permLevel: 0,
};

exports.help = {
  name: 'shard',
  category: "Kullanıcı",
  description: 'shard bilgi',
  usage: 'shard',

};