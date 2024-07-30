const discord = require("discord.js")

module.exports.run = async (client, oldLevel, newLevel) => {
let channelid = await client.db.get(`${oldLevel.guild.id}_logschannel`);

    let logschannel = client.channels.cache.get(channelid)
    if (!logschannel) return;

let embed = new discord.MessageEmbed()
        .setColor(client.embedcolor)
        .setTimestamp()
        .addField(`Old Boost Level`, `\`\`\`fix\n${oldLevel}\n\`\`\``)
        .addField(`New Boost Level`, `\`\`\`fix\n${newLevel}\n\`\`\``)
        .setFooter(`Channel ID: ${oldChannel.id}`)
        try {
            logschannel.send(`**Detected: Boost Level Changed**`, embed);
        } catch (e) {
            if (e) {
                return 1+1;
            } else {
                return 1+1;
            };
        };
}
