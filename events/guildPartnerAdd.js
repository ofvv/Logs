const discord = require("discord.js")

module.exports.run = async (client, guild) => {
  const channel = guild.channels.cache.first();
  channel.send(`**${guild.name} Got Discord Partnered!**`)
}
