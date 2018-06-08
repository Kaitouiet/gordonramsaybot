exports.run = function(client, message, args) {
const Discord = require("discord.js");
var embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setAuthor('Social Media', client.user.avatarURL)
.addField('Twitter', 'https://twitter.com/GordonRamsay')
.addField('Facebook', 'https://www.facebook.com/gordonramsay')
.addField('Instragram', 'https://www.instagram.com/gordongram')
.setTimestamp();
message.channel.send({embed});

}