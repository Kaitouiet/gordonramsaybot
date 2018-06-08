exports.run = function(client, message, args) {
const Discord = require("discord.js");
message.channel.send(`${message.author}, check your inbox for a list of commands.`);
var embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setAuthor('GordonRamsayBot', client.user.avatarURL)
.setTitle(":regional_indicator_c: :regional_indicator_o: :regional_indicator_m: :regional_indicator_m: :regional_indicator_a: :regional_indicator_n: :regional_indicator_d: :regional_indicator_s:")
.addField('++help','Displays command list!')
.addField('++ping', 'Pong?')
.addField('++lambsauce', 'What about it?')
.addField('++server', 'The Gordon Ramsay discord server. Come and cook some meat!')
.addField('++website', 'Official website of Gordon Ramsay')
.addField('++youtube', 'Displays all youtube channels from Gordom Ramsay')
.addField('++socialmedia', 'Displays all social media of Gordon Ramsay')
.addField('++insult', 'Tells you an insult by Gordon Ramsay')
.addField('++meme', 'Coming soon!')
.setTimestamp();
message.author.send({embed}); }