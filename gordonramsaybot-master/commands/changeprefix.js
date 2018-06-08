exports.run = function(client, message, args) {
const settings = require('../settings.json');
const fs = require("fs");
settings.prefix = args[0]
fs.writeFile('../settings.json', JSON.stringify(settings), (err) => {if(err) console.error(err)});
message.channel.send('Prefix Changed! :white_check_mark:');
}