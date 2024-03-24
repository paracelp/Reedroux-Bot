const { MessageEmbed } = require('discord.js');
module.exports = {
  name: "shardReconnecting",
  run: async (client, id) => {
        const channel = client.channels.cache.get(client.config.shard);
      if (channel) {
      const embed = new MessageEmbed()
        .setTitle(`Shards Status`)
        .setDescription(`${client.emoji.point} **Trying to reconnect Shard \`#${id}\`!**`)
        .setColor(client.embedColor)
      channel.send({ embeds: [embed] });
    }
  client.logger.log(`Shard #${id} Reconnecting`, "log");
  }
};