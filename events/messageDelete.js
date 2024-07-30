const discord = require("discord.js")

module.exports.run = async (client, message) => {

    let channelid = await client.db.get(`${message.guild.id}_logschannel`);

    let logschannel = client.channels.cache.get(channelid)
    if (!logschannel) return;
  
    let embed = new discord.MessageEmbed()
        .setTimestamp()
        .setColor(client.embedcolor)
        .addField("Message Author",  `\`\`\`yaml\n${message.author.tag}\nAuthor ID: ${message.author.id}\n\`\`\``, true)
        .addField(`Message Channel`, `\`\`\`fix\n#${message.channel.name}\nID: ${message.channel.id}\n\`\`\``)
        .addField(`Message Content`, `\`\`\`yaml\n${message.content}\n\`\`\``)
        if (message.attachments.size > 0) {
          let link = message.attachments.map(a => `${a.proxyURL}`)
        embed.addField(`Image`, `**[Link](${link})**`)
        try {
          setTimeout(function() {
            logschannel.send(`**Detected: Image Deleted -** ${link}`);
            }, 1500)
        } catch (e) {
            if (e) {
                return 1+1;
            } else {
                return 1+1;
            };
        };
        }
        try {
            logschannel.send(`**Detected: Message Delete**`, embed);
        } catch (e) {
            if (e) {
                return 1+1;
            } else {
                return 1+1;
            };
        };
}