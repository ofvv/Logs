const discord = require("discord.js")

module.exports.run = async (client, channel, oldt, newt) => {
  let channelid = await client.db.get(`${channel.guild.id}_logschannel`);

    let logschannel = client.channels.cache.get(channelid)
    if (!logschannel) return;

    let embed = new discord.MessageEmbed()
        .setColor(client.embedcolor)
        .setTimestamp()
        .addField(`Channel`, `\`\`\`fix\n${member.user.tag}\n\`\`\``)
        .addField(`Old Topic`, `\`\`\`fix\n${oldt}\n\`\`\``)
        .addField(`New Topic`, `\`\`\`fix\n${newt}\n\`\`\``)
        try {
            logschannel.send(`**Detected: Channel Topic Update**`, embed);
        } catch (e) {
            if (e) {
                return 1+1;
            } else {
                return 1+1;
            };
        };
}
