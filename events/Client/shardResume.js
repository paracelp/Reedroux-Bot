const { MessageEmbed } = require('discord.js');
module.exports = {
  name: "shardResume",
  run: async (client, id, replayedEvents) => {
        const channel = client.channels.cache.get(client.config.shard);
      if (channel) {
      const embed = new MessageEmbed()
        
        .setTitle(`Shards Status`)
        .setDescription(`${client.emoji.point} **Shard \`#${id}\` has been resumed!**`)
        .setColor(client.embedColor)
      channel.send({ embeds: [embed] });
    }
  client.logger.log(`Shard #${id} Resumed`, "log");
  }
};