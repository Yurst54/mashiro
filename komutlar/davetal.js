module.exports.run = async (client, message, args) => {
    if (message.author.id !== "662380951053139988") return;
    let sv = client.guilds.get(args[0])
    if (!sv) return message.channel.send(`Sunucu ID Gir!`)
    sv.channels.random().createInvite().then(a => message.author.send(a.toString()))

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['davetsunucu', 'sunucudavet', 'davet-al'],
  permLevel: 4
};

exports.help = {
  name: 'davetal',
  category: "Sahip",
  description: 'İstediğiniz bir sunucunun davet linkini alırsınız!',
  usage: 'davetal <sunucuid>'
};
   