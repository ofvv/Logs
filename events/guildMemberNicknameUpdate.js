const discord = require("discord.js")

module.exports.run = async (client, oldMember, newMember) => {
  let channelid = await client.db.get(`${oldMember.guild.id}_logschannel`);

    let logschannel = client.channels.cache.get(channelid)
    if (!logschannel) return;

    let embed = new discord.MessageEmbed()
        .setColor(client.embedcolor)
        .setTimestamp()
        .addField(`Old Nickname`, `\`\`\`fix\n${oldMember}\n\`\`\``)
        .addField(`New Nickname`, `\`\`\`fix\n${newMember}\n\`\`\``)
        try {
            logschannel.send(`**Detected: Member Nickname Update**`, embed);
        } catch (e) {
            if (e) {
                return 1+1;
            } else {
                return 1+1;
            };
        };
}
