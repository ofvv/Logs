const discord = require("discord.js")

module.exports.run = async (client, message) => {
let channelid = await client.db.get(`${message.guild.id}_logschannel`);

    let logschannel = client.channels.cache.get(channelid)
    if (!logschannel) return;

    let embed = new discord.MessageEmbed()
            .setColor(client.embedcolor)
            .setTimestamp()
            .addField(`Message`, `\`\`\`fix\n${message}\n\`\`\``);
            try {
                logschannel.send(`**Detected: Message Pinned**`, embed);
            } catch (e) {
                if (e) {
                    return 1+1;
                } else {
                    return 1+1;
                };
            };
}
