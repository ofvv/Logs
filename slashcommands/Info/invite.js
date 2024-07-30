const discord = require("discord.js")

module.exports = {
    name: "invite",
    description: "Invite Me",
    run: async (client, createAPIMessage, args, interaction, command, sendmsg, sendembed) => {
      interaction.sendinvinsiblemsg(`**[Invite Me](<https://discord.com/api/oauth2/authorize?client_id=845696953932709939&permissions=8&scope=bot%20applications.commands>)**`)
    }
  }
