const discord = require("discord.js")

module.exports.run = async (client, guild, oldvanity, newvanity) => {
let channelid = await client.db.get(`${guild.id}_logschannel`);

    let logschannel = client.channels.cache.get(channelid)
    if (!logschannel) return;
let embed = new discord.MessageEmbed()
        .setColor(client.embedcolor)
        .setTimestamp()
        .addField(`Old Vanity`, `\`\`\`fix\n${oldvanity}\n\`\`\``)
        .addField(`New Vanity`, `\`\`\`fix\n${newvanity}\n\`\`\``);
        try {
            logschannel.send(`**Detected: Server Vanity URL Update**`, embed);
        } catch (e) {
            if (e) {
                return 1+1;
            } else {
                return 1+1;
            };
        };
}
