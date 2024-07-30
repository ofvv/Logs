const discord = require("discord.js")

module.exports.run = async (client, guild, bannerURL) => {
let channelid = await client.db.get(`${guild.id}_logschannel`);

    let logschannel = client.channels.cache.get(channelid)
    if (!logschannel) return;
let embed = new discord.MessageEmbed()
        .setColor(client.embedcolor)
        .setTimestamp()
        .setImage(bannerURL);
        try {
            logschannel.send(`**Detected: New Server Banner!**`, embed);
        } catch (e) {
            if (e) {
                return 1+1;
            } else {
                return 1+1;
            };
        };
}
