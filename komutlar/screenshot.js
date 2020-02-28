exports.run = async (client, message, args) => {
  const mesaj = args.slice(0).join(' ')
  if (!mesaj) {
    return message.reply('url girmeyi unutmayın.')
  }
const api = require('../ek/lyrics')
  let valpha = await api('/url/capture', {
    encoding: null,
    qs: {
      url: mesaj
    }
  });

  valpha = Buffer.from(valpha);

  await message.channel.send({
    files: [ { attachment: valpha, name: 'valpha.png' } ]
  });
};

exports.conf = {
  aliases: ['ss'],
  enabled: true,
  guildOnly: false,
  permLevel:0
};

exports.help = {
  name: 'screenshot',
  description: 'Belirtilen sitedeki ekran görüntüsünü atar.',
  category:'Kullanıcı',
  usage: 'screenshot <url>'
};
