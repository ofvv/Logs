const discord = require("discord.js")

module.exports.run = async (client, oldChannel, newChannel) => {
let channelid = await client.db.get(`${oldChannel.guild.id}_logschannel`);

    let logschannel = client.channels.cache.get(channelid)
    if (!logschannel) return;

    if (oldChannel === newChannel) return;

    if (oldChannel.type === 'voice') return;

    if (oldChannel.type === 'dm') return;

    if (oldChannel.type === 'category') return;

    let old_nsfw = oldChannel.nsfw ? 'Yes' : 'No';

    let new_nsfw = newChannel.nsfw ? 'Yes' : 'No';

    let old_parent = oldChannel.parent ? oldChannel.parent : 'No Category';

    let new_parent = newChannel.parent ? newChannel.parent : 'No Category';

    let old_topic = oldChannel.topic ? oldChannel.topic : 'None';

    let new_topic = newChannel.topic ? newChannel.topic : 'None'

let embed = new discord.MessageEmbed()
        .setColor(client.embedcolor)
        .setTimestamp()
        .addField(`Old Channel`, `\`\`\`fix\nChannel Name: #${oldChannel.name}\nNSFW: ${old_nsfw}\nSlowmode: ${oldChannel.rateLimitPerUser} Seconds\nCategory: ${old_parent}\nTopic: ${old_topic}\n\`\`\``)
        .addField(`New Channel`, `\`\`\`fix\nChannel Name: #${newChannel.name}\nNSFW: ${new_nsfw}\nSlowmode: ${newChannel.rateLimitPerUser} Seconds\nCategory: ${new_parent}\nTopic: ${new_topic}\n\`\`\``)
        .setFooter(`Channel ID: ${oldChannel.id}`)
        try {
            logschannel.send(`**Detected: Channel Update**`, embed);
        } catch (e) {
            if (e) {
                return 1+1;
            } else {
                return 1+1;
            };
        };
}