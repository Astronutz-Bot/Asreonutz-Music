const { canModifyQueue } = require("../util/Util");

module.exports = {
  name: "stop",
  description: "Stops the music",

  execute(message) {
    const queue = message.client.queue.get(message.guild.id);

    if (!queue) return message.reply("<a:yqb_smh:852828447981043722> | There is nothing playing.").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    queue.songs = [];
    queue.connection.dispatcher.end();
    queue.textChannel.send(`${message.author} ⏹ stopped the music!`).catch(console.error);
  }
};
