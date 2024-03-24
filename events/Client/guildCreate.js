const { MessageEmbed, CommandInteraction, Client, MessageButton, MessageActionRow } = require("discord.js")
const moment = require('moment');

module.exports = {
  name: "guildCreate",
  run: async (client, guild) => {

    var invitee = client.config.links.invite;
    var supportt = client.config.links.support;
    var votee = client.config.links.vote;
    
     const row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setLabel("Invite")
          .setStyle("LINK")
          .setURL(invitee)
      )
    .addComponents(
        new MessageButton()
          .setLabel("Support")
          .setStyle("LINK")
          .setURL(supportt)
      )
     .addComponents(
        new MessageButton()
          .setLabel("Vote")
          .setStyle("LINK")
          .setURL(votee)
      );

 const embedd = new MessageEmbed()
    .setTitle(`Thanks for adding me to your server!😊`)
   .setThumbnail(guild.iconURL({ dynamic: true, size: 1024 }))
    .setDescription(`Enjoy high-quality music streaming directly in your Discord voice channels. Use the \`/play\` command to search and play songs from YouTube or other supported sources.\n\n**Need Help?**\n Type \`/help\` to get help menu of all commands! If you have any questions or need help with ${client.user.username}, [click here](${client.config.links.support}) to talk to our support team!\n\nWanna invite me in your server ? [click here](${client.config.links.invite}) to add me in yours.`)
    .setColor(client.embedColor)
    let textt;
   guild.channels.cache.forEach(cc => {
      if (cc.type === "GUILD_TEXT" && !textt) textt = cc;
    });

  if (textt) {
    textt.send({
      embeds: [embedd],
    components: [row]})
  }


    
    const channel = client.channels.cache.get(client.config.logs);
    let own = await guild?.fetchOwner();
    let text;
    guild.channels.cache.forEach(c => {
      if (c.type === "GUILD_TEXT" && !text) text = c;
    });
    

    if (channel) {

      const embed = new MessageEmbed()
        .setThumbnail(guild.iconURL({ dynamic: true, size: 1024 }))
        .setTitle(`📥 Joined a Guild !!`)
        .addFields([
          { name: 'Name', value: `\`${guild.name}\`` },
          { name: 'ID', value: `\`${guild.id}\`` },
          { name: 'Owner', value: `\`${guild.members.cache.get(own.id) ? guild.members.cache.get(own.id).user.tag : "Unknown user"} [ ${own.id} ] \`` },
          { name: 'Member Count', value: `\`${guild.memberCount}\` Members` },
          { name: 'Creation Date', value: `\`${moment.utc(guild.createdAt).format('DD/MMM/YYYY')}\`` },
          { name: `${client.user.username}'s Server Count`, value: `\`${client.guilds.cache.size}\` Severs` }
        ])
        .setColor(client.embedColor)
        .setTimestamp()
      channel.send({ embeds: [embed] });
    }
  }
};