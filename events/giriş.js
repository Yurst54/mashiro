const Discord = require("discord.js")
const db = require("quick.db");
const Canvas = require('canvas')
    , Image = Canvas.Image
    , Font = Canvas.Font
    , path = require('path');
const snekfetch = require('snekfetch');
const request = require('node-superfetch');

module.exports = async member => {

    var randomMsg = [
                   'Teşekkür ederim -kullanıcı-! Sayende -sayı- kişi olduk! -sunucu- sunucusuna hoşgeldin. Umarım iyi vakit geçirirsin.',
                    ];
    var randomMsg_integer = randomMsg[Math.floor((Math.random() * randomMsg.length))]

  let msj = await db.fetch(`ozelhosgeldin_${member.guild.id}`)
  if (!msj) msj = `{uye}, ${randomMsg_integer}`
  let memberChannel = await db.fetch(`gcc_${member.guild.id}`)
if (!memberChannel) return;
  
  const canvas = Canvas.createCanvas(360, 250);
  const ctx = canvas.getContext('2d');
  
  const background = await Canvas.loadImage('https://cdn.discordapp.com/attachments/603614781345103882/619870212216586250/Discordk.png');
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  
  ctx.strokeStyle = '#74037b';
  ctx.strokeRect(0, 0, canvas.width, canvas.height);
  
  ctx.fillStyle = `#D3D3D3`;
 	ctx.font = `17px "BebasRegular"`;
  ctx.textAlign = "center";
  ctx.fillText(`${member.user.username.toUpperCase()}`, 180, 225);

  let avatarURL = member.user.avatarURL || member.user.defaultAvatarURL
  const { body } = await request.get(avatarURL);
  const avatar = await Canvas.loadImage(body);
  
  ctx.beginPath();
  ctx.lineWidth = 4;
  ctx.fill()
  ctx.lineWidth = 4;
	ctx.arc(125 + 55, 70 + 55, 55, 0, 2 * Math.PI, false);
  ctx.clip();
  ctx.drawImage(avatar, 125, 70, 110, 110);
  
  
  
  const attachment = new Discord.Attachment(canvas.toBuffer(), 'valproenter.png');
  member.guild.channels.get(memberChannel).send(attachment)
  member.guild.channels.get(memberChannel).send(msj ? msj.replace('-sunucu-', `${member.guild.name}`) .replace('-kullanıcı-',`${member.user.tag}`) .replace('-id-',`${member.user.id}`) .replace('-sayı-', `${member.guild.members.size}`): ``)
  
  
}



