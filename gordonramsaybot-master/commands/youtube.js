exports.run = function(client, message, args) {
const Discord = require("discord.js");
var embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setAuthor('Youtube channels', client.user.avatarURL)
.addField('Gordon Ramsay','https://www.youtube.com/user/gordonramsay')
.addField('The F Word', 'https://www.youtube.com/user/theFword')
.addField('Kitchen Nightmares', 'https://www.youtube.com/user/KitchenNightmares')
.setTimestamp();
message.channel.send({embed});
}