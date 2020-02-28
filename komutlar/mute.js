const Discord = require("discord.js");
const ms = require("ms");

exports.run = async (bot, message, args) => {

//unutmayın 1s = 1 saniye , 1m = 1 dakika , 1h = 1 saat, 1d = 1 gün

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("🚫| Yanlış komut!\n✔| Doğru Kullanım:  ``!!sustur <@Kullanıcı> <Süre>`` Olarak Yazmalısınız.");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("🚫 Bu kullanıcıyı muteleyemem. \nSebepleri Şunlar Olabilir;\n  🚫| Bu kullanıcının rolü benim rolümden yüksek olabilir,\n  🚫| Kullanıcı ben olabilirim,\n  🚫| Kullanıcı ile aynı rolde olabiliriz.")
let muterole = message.guild.roles.find(r => r.name === "Mute | Susturulmuş");

  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "Mute | Susturulmuş",
        color: "#818386",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }

  let mutetime = args[1];
  if(!mutetime) return message.reply("🚫 | Yanlış komut!\n✔| Doğru Kullanım:  ``!!sustur <@Kullanıcı> <Süre>`` Olarak Yazmalısınız.");

  await(tomute.addRole(muterole.id));
  message.reply(`**:white_check_mark:| Başarılı**\n\n✔| <@${tomute.id}> Kullanıcı başarılı şekilde mutelendi. \n✔| Mute süresi; ${ms(ms(mutetime))}`);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`:white_check_mark: | <@${tomute.id}> Kişinin susturulma süresi doldu!\n<a:Onayland:650318448009805824>| \`Mute | Susturulmuş\` rolü alındı!`);
  }, ms(mutetime));
  message.guild.channels.find("va-log")

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["mute"],
  permLevel: 2
};

exports.help = {
  name: 'sustur',
  category: `Yetkili`,
  description: 'Sureli Susturur.',
  usage: 'geçici-sustur [Kullanıcı] [Süre]'
};