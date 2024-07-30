const discord = require("discord.js")

module.exports = {
    name: "memberlog",
    options: [
        {
          name: "logschannel",
          description: "Channel To Display Member Logs",
          type: 7,
          required: true
        }
      ],
    description: "Setup Member Logs!",
    run: async (client, createAPIMessage, args, interaction, command, sendmsg, sendembed) => {
      interaction.guild.members.cache.forEach(async member => {
        if (member.id === interaction.author.id && !member.hasPermission("ADMINISTRATOR")) {return interaction.sendinvinsiblemsg(`**You Need To Be a Server Admin To Use This Command!**`);} else if (member.id === interaction.author.id && member.hasPermission("ADMINISTRATOR")) {
      
      let channelid;

      if (args) {
        channelid = args.find(a => a.name.toLowerCase() === "logschannel").value;
      } else channelid = interaction.channel.id
      await client.db.set(`${interaction.guild.id}_memberlogs`, channelid)
      client.channels.cache.get(channelid).send(`**Member Logs: Enabled**`)
      interaction.sendmsg(`**Member Logs: Enabled**`)
      }
      })
  }
}