const discord = require("discord.js")

module.exports.run = async (client, role) => {
let channelid = await client.db.get(`${role.guild.id}_logschannel`);

    let logschannel = client.channels.cache.get(channelid)
    if (!logschannel) return;
let embed = new discord.MessageEmbed()
        .setColor(client.embedcolor)
        .setTimestamp()
        .addField(`Role`, `\`\`\`fix\nName ${role.name}\nRole ID: ${role.id}\nHex: ${role.hexColor}\n\`\`\``);
        try {
            logschannel.send(`**Detected: Role Delete**`, embed);
        } catch (e) {
            if (e) {
                return 1+1;
            } else {
                return 1+1;
            };
        };
}