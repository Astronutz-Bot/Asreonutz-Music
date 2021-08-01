const { canModifyQueue } = require("../util/Util");

module.exports = {
  name: "loop",
  aliases: ["l", "repeat"],
  description: "Toggle music loop",
  execute(message) {
    const queue = message.client.queue.get(message.guild.id);
     message.react('<a:TCC_NitroHeart:852844050758369290>');
    if (!queue) return message.reply("<a:yqb_smh:852828447981043722> | There is nothing playing.").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    // toggle from false to true and reverse
    queue.loop = !queue.loop;
    return queue.textChannel.send(`<a:zzzghostheart:852827782706495488> Loop is now ${queue.loop ? "**on**" : "**off**"}`).catch(console.error);
   
  }
};
