const discord = require("discord.js")

module.exports = {
    name: "ping",
    description: "Show Bot's Ping",
    run: async (client, createAPIMessage, args, interaction, command, sendmsg, sendembed) => {
      const dbping = await client.db.ping();

      interaction.sendmsg(`**WebSocket Ping: \`${client.ws.ping}ms\`\nDataBase Ping: \`${Math.round(dbping.average)}ms\`**`)
 }
}