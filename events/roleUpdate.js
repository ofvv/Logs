const discord = require("discord.js")

module.exports.run = async (client, oldRole, newRole) => {
let channelid = await client.db.get(`${oldRole.guild.id}_logschannel`);

    let logschannel = client.channels.cache.get(channelid)
    if (!logschannel) return;
    if (oldRole === newRole) return;
let embed = new discord.MessageEmbed()
        .setColor(client.embedcolor)
        .setTimestamp()
        .addField(`Old Role`, `\`\`\`fix\nName ${oldRole.name}\nHex: ${oldRole.hexColor}\n\`\`\``)
        .addField(`New Role`, `\`\`\`fix\nName ${newRole.name}\nHex: ${newRole.hexColor}\n\`\`\``)
        .setFooter(`Role ID: ${newRole.id || oldRole.id}`)
        try {
            logschannel.send(`**Detected: Role Update**`, embed);
        } catch (e) {
            if (e) {
                return 1+1;
            } else {
                return 1+1;
            };
        };
}