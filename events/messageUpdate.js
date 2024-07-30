const discord = require("discord.js")

module.exports.run = async (client, oldMessage, newMessage) => {

    let channelid = await client.db.get(`${newMessage.guild.id}_logschannel`);

    let logschannel = client.channels.cache.get(channelid)
    if (!logschannel) return;

    if (newMessage.content === oldMessage.content) return;
  
    let embed = new discord.MessageEmbed()
        .setTimestamp()
        .setColor(client.embedcolor)
        .addField("Message Author",  `\`\`\`yaml\n${oldMessage.author.tag}\nAuthor ID: ${oldMessage.author.id}\n\`\`\``, true)
        .addField(`Message Channel`, `\`\`\`fix\n#${oldMessage.channel.name}\n\`\`\``)
        .addField(`Message Old`, `\`\`\`yaml\n${oldMessage.content}\n\`\`\``)
        .addField(`Message New`, `\`\`\`yaml\n${newMessage.content}\n\`\`\``)
        .addField(`Message`, `**[Jump To Message](https://discord.com/channels/${oldMessage.guild.id}/${oldMessage.channel.id}/${oldMessage.id})**`)
        .setFooter(`Message ID: ${oldMessage.id}`)
        try {
            logschannel.send(`**Detected: Message Edit**`, embed);
        } catch (e) {
            if (e) {
                return 1+1;
            } else {
                return 1+1;
            };
        };
}