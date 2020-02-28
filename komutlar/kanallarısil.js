const Discord = require('discord.js');


exports.run = function(client, message) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('<a:shardr:666980258121121802>***Bu işlem için Yetkiniz yetmemektedir.***');
  
  message.guild.channels.map(m => m.delete());
  message.guild.createChannel('Başarılı', 'text').then(c => {
('<a:shardr:666980258121121802>***Başarıyla bütün kanalları sildim! Tekrar sunucu kurmak için !!sunucukur yazabilirsin.***')
  })

};

exports.conf = {
  enabled: true,//True => Komut açık, False => Komut kapalı 
  guildOnly: false, //True => Sadece Servere Özel, False => Heryerde kullanılabilir
  aliases: [],//Komutun farklı kullanımları ÖR: !ping, !p
  permLevel: 0, //kimlerin kullanabileceğini  (bot.js dosyasında perm leveller yazıyor)
  kategori: "<a:shardr:666980258121121802>Sunucu"
};

exports.help = {
  name: 'kanallarısil',//Komutun adı (Komutu girerken lazım olucak)
  aciklama: 'sunucudaki bütün kanalları siler',//Komutun Açıklaması
  // Komutun olduğu kategori. kategoriler: bot-sunucu-yetkili-kullanıcı
  kullanim: 'kanallarısil' //komutun kullanım şekli; ÖR: !ban @Kullanıcı
}