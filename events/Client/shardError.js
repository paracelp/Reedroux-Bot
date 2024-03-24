const { MessageEmbed } = require('discord.js');
module.exports = {
  name: "shardError",
  run: async (client, error, id) => {
        const channel = client.channels.cache.get(client.config.shard);
      if (channel) {
      const embed = new MessageEmbed()
        .setTitle(`Shards Status`)
        .setDescription(`${client.emoji.point} **Shard \`#${id}\` got some error!**`)
        .setColor(client.embedColor)
      channel.send({ embeds: [embed] });
    }
  client.logger.log(`Shard #${id} Errored`, "error");
  }
};