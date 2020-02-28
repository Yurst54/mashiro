exports.run = async (client, message) => {
  if (!message.guild.activities || !message.guild.activities.games) {
    return await message.channel.send({
      embed: {
        title: 'Kullanışlı bir şey göstermek için yeterli bilgiye sahip değilim.',
        description: 'It looks like gaming activity in this server is a little light. Wait for people to start playing some games and check back later!'
      }
    });
  }

  let gameStats = [];

  let topPlayedGames = Object.entries(message.guild.activities.games);
  topPlayedGames = topPlayedGames.sort((a, b) => b.tail().length - a.tail().length);
  topPlayedGames = topPlayedGames.slice(0, 10);

  for (let game of topPlayedGames) {
    gameStats.push({
      name: game.head(),
      value: `${game.tail().length} players`
    });
  }

  await message.channel.send({
    embed: {
      title: 'Most played games in this Server',
      fields: gameStats,
      footer: {
        text: 'Game activities are reset after restart.'
      }
    }
  });
};

exports.conf = {
  aliases: [],
  enabled: true,
guildOnly: true,
permLevel: 0
};

exports.help = {
  name: 'oyunsayısı',
  description: 'Shows the top most played games in the server.',
  category: 'Kullanıcı',
  usage: 'oyunsayısı'
};
