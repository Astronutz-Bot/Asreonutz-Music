module.exports = { 
    name: "join",
    aliases: ["24/7"], 
    description: "Join the current channel", 
    execute(message) {
         const { channel } = message.member.voice; 
         const serverQueue = message.client.queue.get(message.guild.id); 
         if (!channel) return message.reply("You need to join a voice channel first!").catch(console.error); 
          
         if(serverQueue) { 
             serverQueue.connection.dispatcher.destroy(); 
             channel.join(); 
             message.client.queue.delete(message.guild.id); 
             serverQueue.textChannel.send('<a:zTW_prplneonwalwal:853575935843762226> | **Cheers** I have joined your voice channel.').catch(console.error); 
             return 
            }
            channel.join(); 
            
    message.client.queue.delete(message.guild.id); 
    message.channel.send('<a:zTW_prplneonwalwal:853575935843762226> | **Cheers** I have joined your voice channel.').catch(console.error); } };