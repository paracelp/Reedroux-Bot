const { MessageEmbed } = require('discord.js');
module.exports = {
  name: "shardReady",
  run: async (client, id) => {
        const channel = client.channels.cache.get(client.config.shard);
      if (channel) {
      const embed = new MessageEmbed()
        .setTitle(`Shards Status`)
        .setDescription(`${client.emoji.point} **Shard \`#${id}\` is ready to go!**`)
        .setColor(client.embedColor)
      channel.send({ embeds: [embed] });
    }
  client.logger.log(`Shard #${id} Ready`, "ready");
  }
};