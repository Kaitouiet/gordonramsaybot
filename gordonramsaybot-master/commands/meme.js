exports.run = function(client, message, args) {
    const responses = [
({ files: ['./memephotos/1.jpg'] }), ({ files: ['./memephotos/1.jpg'] })
    ];
    message.channel.send(`${responses[Math.floor(Math.random() * responses.length)]}`);
}
