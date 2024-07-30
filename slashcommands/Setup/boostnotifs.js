const discord = require("discord.js")

module.exports = {
    name: "boostnotifs",
    options: [
        {
          name: "boostchannel",
          description: "Channel To Display Boost Notifications",
          type: 7,
          required: true
        }
      ],
    description: "Setup Boost Notifications!",
    run: async (client, createAPIMessage, args, interaction, command, sendmsg, sendembed) => {
      interaction.guild.members.cache.forEach(async member => {
        if (member.id === interaction.author.id && !member.hasPermission("ADMINISTRATOR")) {return interaction.sendinvinsiblemsg(`**You Need To Be a Server Admin To Use This Command!**`);} else if (member.id === interaction.author.id && member.hasPermission("ADMINISTRATOR")) {

      let channelid;

      if (args) {
        channelid = args.find(a => a.name.toLowerCase() === "boostchannel").value;
      } else channelid = interaction.channel.id
      if (client.channels.cache.get(channelid).type != 'text') return interaction.sendinvinsiblemsg(`**Please Choose a Text Channel!**`);
      await client.db.set(`${interaction.guild.id}_boost`, channelid)
      client.channels.cache.get(channelid).send(`**Boost Notifications: Enabled**`)
      interaction.sendmsg(`**Boost Notifications: Enabled**`)
      }
      })
  }
}
