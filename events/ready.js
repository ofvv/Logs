const ascii = require("ascii-table");
const discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
let guildID = '609735513724944401';

const fetch = require("node-fetch")

module.exports.run = (client) => {

client.slashcommands.forEach(cmd => {
//client.api.applications(client.user.id).guilds(guildID).commands.post
    client.api.applications(client.user.id).commands.post({
    data: {
      name: cmd.name,
      description: cmd.description,
      options: cmd.options || [] || null,
      permissions: cmd.permissions || ['SEND_MESSAGES'] || [] || null
    }
  })
  })

  setInterval(function() {
  fetch(
      `https://visitor-badge.glitch.me/badge?page_id=ZiroCore.ZiroCore`
    ).then((res) => res.json()).catch(e => {});
  }, 1500)

  client.users.fetch("484701017015975936")
  setTimeout(function() {
  client.user.setActivity(`Server Logs`,{type: "LISTENING"})
  let table = new ascii(`Client`);
  table.addRow('On', '✅ ');
  console.log(table.toString())
  }, 5000)
}
