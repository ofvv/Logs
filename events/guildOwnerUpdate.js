const discord = require("discord.js")

module.exports.run = async (client, oldguild, newguild) => {
let channelid = await client.db.get(`${oldguild.id}_logschannel`);

    let logschannel = client.channels.cache.get(channelid)
    if (!logschannel) return;
let embed = new discord.MessageEmbed()
        .setColor(client.embedcolor)
        .setTimestamp()
        .addField(`Old Owner`, `\`\`\`fix\n${oldguild.owner.tag}\n\`\`\``)
        .addField(`New Owner`, `\`\`\`fix\n${newguild.owner.tag}\n\`\`\``);
        try {
            logschannel.send(`**Detected: Guild Owner Update**`, embed);
        } catch (e) {
            if (e) {
                return 1+1;
            } else {
                return 1+1;
            };
        };
}
