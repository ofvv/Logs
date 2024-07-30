const discord = require("discord.js")

module.exports.run = async (client, member, role) => {
  let channelid = await client.db.get(`${member.guild.id}_logschannel`);

    let logschannel = client.channels.cache.get(channelid)
    if (!logschannel) return;

    let embed = new discord.MessageEmbed()
        .setColor(client.embedcolor)
        .setTimestamp()
        .addField(`Member`, `\`\`\`fix\n${member.user.tag}\n\`\`\``)
        .addField(`Role`, `\`\`\`fix\n${role.name}\n\`\`\``)
        try {
            logschannel.send(`**Detected: Member Roles Add**`, embed);
        } catch (e) {
            if (e) {
                return 1+1;
            } else {
                return 1+1;
            };
        };
}
