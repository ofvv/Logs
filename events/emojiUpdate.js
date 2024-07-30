const discord = require("discord.js")

module.exports.run = async (client, oldEmoji, newEmoji) => {
let channelid = await client.db.get(`${oldEmoji.guild.id}_logschannel`);

    let logschannel = client.channels.cache.get(channelid)
    if (!logschannel) return;
let embed = new discord.MessageEmbed()
        .setColor(client.embedcolor)
        .setTimestamp()
        .addField(`Old Emoji`, `\`\`\`fix\nName: ${oldEmoji.name}\n\`\`\``)
        .addField(`New Emoji`, `\`\`\`fix\nName: ${newEmoji.name}\n\`\`\``)
        .setFooter(`Emoji ID: ${oldEmoji.id}`)
        try {
            logschannel.send(`**Detected: Emoji Update**`, embed);
        } catch (e) {
            if (e) {
                return 1+1;
            } else {
                return 1+1;
            };
        };
}