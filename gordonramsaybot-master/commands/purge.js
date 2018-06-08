exports.run = function(client, message, args) {
  if (message.author.id !=='209332445093298186') return;
  let messagecount = parseInt(args.join(' '));
  message.channel.fetchMessages({
    limit: messagecount
  }).then(messages => message.channel.bulkDelete(messages));
};

