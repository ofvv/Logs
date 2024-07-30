const discord = require("discord.js")

module.exports.run = async (client, oldguild, newguild) => {
let channelid = await client.db.get(`${oldguild.id}_logschannel`);

    let logschannel = client.channels.cache.get(channelid)
    if (!logschannel) return;
let embed = new discord.MessageEmbed()
        .setColor(client.embedcolor)
        .setTimestamp()
        .addField(`New Features`, `\`\`\`fix\n${newGuild.features.join(", ")}\n\`\`\``)
        try {
            logschannel.send(`**Detected: Server Features Update**`, embed);
        } catch (e) {
            if (e) {
                return 1+1;
            } else {
                return 1+1;
            };
        };
}
