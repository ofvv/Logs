const discord = require("discord.js")

module.exports = {
    name: "disable",
    description: "Disable Logs!",
    run: async (client, createAPIMessage, args, interaction, command, sendmsg, sendembed) => {
      interaction.guild.members.cache.forEach(async member => {
        if (member.id === interaction.author.id && !member.hasPermission("ADMINISTRATOR")) {return interaction.sendinvinsiblemsg(`**You Need To Be a Server Admin To Use This Command!**`);} else if (member.id === interaction.author.id && member.hasPermission("ADMINISTRATOR")) {
      let channelid;

      if (args) {
        channelid = args.find(a => a.name.toLowerCase() === "logschannel").value;
      } else channelid = interaction.channel.id;
      if (client.db.get(`${interaction.guild.id}_logschannel`)) {
      await client.db.delete(`${interaction.guild.id}_logschannel`)
      await client.db.delete(`${interaction.guild.id}_memberlogs`)
      await client.db.delete(`${interaction.guild.id}_boost`)
      interaction.sendmsg(`**Server Logs: Disabled**`)
      } else {return;}
        }
      })
  }
}
