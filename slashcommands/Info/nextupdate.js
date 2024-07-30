const discord = require("discord.js")

module.exports = {
    name: "nextupdate",
    description: "Show Bot's Next Update",
    run: async (client, createAPIMessage, args, interaction, command, sendmsg, sendembed) => {

      interaction.sendmsg(`**Next Update Log:\n\`Still Nothing Planned!\`**`)
 }
}