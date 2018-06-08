exports.run = function(client, message, args) {
      var result = args.join(' ');
    if (message.author.id !== '209332445093298186') return
      if (!result) {
      result = null;
    }
    client.user.setGame(result);
}