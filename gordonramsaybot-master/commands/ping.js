exports.run = function(client, message, args) {
    message.delete();
    message.channel.send('WHERE\'S THE LAMB SAUCE?').then(m => m.edit(`Pong! :ping_pong: \`${m.createdTimestamp - message.createdTimestamp}ms\`:timer:`) );
}