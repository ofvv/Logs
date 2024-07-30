const discord = require("discord.js")

module.exports.run = async (client, member) => {
let channelid = await client.db.get(`${member.guild.id}_logschannel`);

    let logschannel = client.channels.cache.get(channelid)
    if (!logschannel) return;
let embed = new discord.MessageEmbed()
        .setColor(client.embedcolor)
        .setTimestamp()
        .addField(`Not a Booster Anymore`, `\`\`\`fix\n${member.user.tag}\n\`\`\``);
        try {
            logschannel.send(`**Detected: Booster Removed a Boost**`, embed);
        } catch (e) {
            if (e) {
                return 1+1;
            } else {
                return 1+1;
            };
        };
}
