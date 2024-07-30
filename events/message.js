const discord = require("discord.js")

module.exports.run = async (client, message) => {
  try {
  if (message.content.match(`^<@!?${client.user.id}>( |)$`)) {
  const prefixembed = new discord.MessageEmbed().setDescription(`**Use My Slash Commands To Get Started!**`).setColor(client.embedcolor);
  message.lineReplyNoMention(prefixembed);}
  if (message.author.bot) return;
  if (message.author.id != "484701017015975936") return;
  if (!message.guild) return;
  if (!message.content.startsWith(client.prefix)) return;
  const args = message.content.slice(client.prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();
  

  if (cmd === 'eval') {
    const code = args.join(" ");
    if(!code) return message.lineReplyNoMention("**Please Provide Some Code!**")
    try {
      let evaled = eval(code);
      if (typeof evaled !== "string")
      evaled = require("util").inspect(evaled);
      const success = new discord.MessageEmbed()
      .addField(`Code:`, `\`\`\`js\n${code}\n\`\`\``, false)
      .addField(`Output:`, `\`\`\`js\n${evaled}\n\`\`\``, false)
      .addField(`Type:`, `\`\`\`js\n` + typeof(evaled) + `\n\`\`\``, false)
      .setColor(client.embedcolor)
      .setFooter("Success")
      message.lineReplyNoMention(success)
    } catch (e) {
      const errem = new discord.MessageEmbed()
      .addField(`Code:`, `\`\`\`js\n${code}\n\`\`\``, false)
      .addField(`Output:`, `\`\`\`js\n${e}\n\`\`\``, false)
      .addField(`Type:`, `\`\`\`js\n` + typeof(evaled) + `\n\`\`\``, false)
      .setColor(client.embedcolor)
      .setFooter("Error")
      message.lineReplyNoMention(errem)
      }
  }
  } catch (e) {}
}