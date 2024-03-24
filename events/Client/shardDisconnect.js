const { MessageEmbed } = require('discord.js');
module.exports = {
  name: "shardDisconnect",
  run: async (client, event, id) => {
    const channel = client.channels.cache.get(client.config.shard);
      if (channel) {
      const embed = new MessageEmbed()
        .setTitle(`Shards Status`)
        .setDescription(`${client.emoji.point} **Shard \`#${id}\` has been disconnected!**`)
        .setColor(client.embedColor)
      channel.send({ embeds: [embed] });
    }
    
  client.logger.log(`Shard #${id} Disconnected`, "warn");
  }
};