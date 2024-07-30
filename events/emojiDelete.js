const discord = require("discord.js")

module.exports.run = async (client, emoji) => {
let channelid = await client.db.get(`${emoji.guild.id}_logschannel`);

    let logschannel = client.channels.cache.get(channelid)
    if (!logschannel) return;
let embed = new discord.MessageEmbed()
        .setColor(client.embedcolor)
        .setTimestamp()
        .addField(`Emoji`, `\`\`\`fix\nName: ${emoji.name}\nID: ${emoji.id}\n\`\`\``);
        try {
            logschannel.send(`**Detected: Emoji Delete**`, embed);
        } catch (e) {
            if (e) {
                return 1+1;
            } else {
                return 1+1;
            };
        };
}