const discord = require("discord.js")
const os = require("os")

module.exports = {
    name: "botinfo",
    description: "Show Bot's Info",
    run: async (client, createAPIMessage, args, interaction, command, sendmsg, sendembed) => {
      const dbping = await client.db.ping();
      const humanized = require("humanize-duration")(client.uptime, {
         round: true,
         conjunction: " and "
       })
var totalMembers = 0;
client.guilds.cache.forEach(guild => {
    var x = parseInt(guild.memberCount);
    totalMembers = totalMembers + x;
})

var totalChannels = 0;
client.guilds.cache.forEach(guild => {
    var x = parseInt(guild.channels.cache.size);
    totalChannels = totalChannels + x;
})
      const embed = new discord.MessageEmbed()
      .setColor(client.embedcolor)
      .addField(`Owner`, `\`\`\`fix\n${client.users.cache.get(client.ownerid).tag}\n\`\`\``, true)
      .addField(`WebSocket Ping`, `\`\`\`fix\n${client.ws.ping}ms\n\`\`\``, false)
      .addField(`DataBase Ping`, `\`\`\`fix\n${Math.round(dbping.average)}ms\n\`\`\``, false)
      .addField(`Client Uptime`, `\`\`\`fix\n${humanized}\n\`\`\``, false)
      .addField(`Client Guilds`, `\`\`\`fix\n${client.guilds.cache.size}\n\`\`\``, false)
      .addField(`Client Users`, `\`\`\`fix\n${totalMembers}\n\`\`\``, false)
      .addField(`Client Channels`, `\`\`\`fix\n${totalChannels}\n\`\`\``, false)
      .addField(`Machine Ram`, `\`\`\`fix\n${Math.floor(os.freemem()/10000000)/100}GB/${Math.floor(os.totalmem()/10000000)/100}GB\n\`\`\``)
      .addField(`Links`, `**[Invite](https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands) | [Source Code](https://dis.gd/threads)**`, true)
      .setFooter(`Created At: ${require("moment")(client.user.createdTimestamp).format('LT')} ${require("moment")(client.user.createdTimestamp).format('LL')}`)
      //interaction.sendinvinsiblemsg(`**Soon!**`)
      interaction.sendembed(embed)
 }
}