const discord = require("discord.js")

module.exports.run = async (client, guild) => {
  let logs = await client.db.get(`${guild.id}_logschannel`);
  let memberlogs = await client.db.get(`${guild.id}_memberlogs`)
  if (memberlogs) await client.db.delete(`${guild.id}_memberlogs`)
  if (logs) await client.db.delete(`${guild.id}_logschannel`)
const logschannel = client.channels.cache.get(client.serverlogs)

let embed = new discord.MessageEmbed()
      .setColor(client.embedcolor)
      .addField("Server", `\`\`\`fix\nName: ${guild.name || "Glitched"}\n\`\`\``, true)
      .addField("Members", `\`\`\`fix\n${guild.memberCount || "Glitched"}\n\`\`\``, false)
      .addField("Roles", `\`\`\`fix\n${guild.roles.cache.size || "Glitched"}\n\`\`\``, false)
      .addField("ID", `\`\`\`fix\n${guild.id || "Glitched" || "Glitched"}\n\`\`\``, true)
      .addField("Boosts", `\`\`\`fix\n${guild.premiumSubscriptionCount || '0'}\n\`\`\``, false)
      .addField("Created", `\`\`\`fix\n${guild.createdAt || 'Cannot Fetch'}\n\`\`\``, true)
      .setTimestamp()
      .setFooter(`${client.guilds.cache.size} Servers`, client.user.avatarURL);

try {
            logschannel.send(`**Detected: Server Kicked**`, embed);
        } catch (e) {
            if (e) {
                return 1+1;
            } else {
                return 1+1;
            };
        };

}