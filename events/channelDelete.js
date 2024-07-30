const discord = require("discord.js")

module.exports.run = async (client, channel) => {
let channelid = await client.db.get(`${channel.guild.id}_logschannel`);

    let logschannel = client.channels.cache.get(channelid)
    if (!logschannel) return;
    if (channel.type === 'category') return;
    if (channel.type === 'voice') return;
    if (channel.type === 'dm') return;
let embed = new discord.MessageEmbed()
        .setColor(client.embedcolor)
        .setTimestamp()
        .addField(`Channel`, `\`\`\`fix\n#${channel.name}\nID: ${channel.id}\n\`\`\``);
        try {
            logschannel.send(`**Detected: Channel Delete**`, embed);
        } catch (e) {
            if (e) {
                return 1+1;
            } else {
                return 1+1;
            };
        };
}