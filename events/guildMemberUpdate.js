const discord = require("discord.js")

module.exports.run = async (client, oldMember, newMember) => {/*
let channelid = await client.db.get(`${oldMember.guild.id}_logschannel`);

    let logschannel = client.channels.cache.get(channelid)
    if (!logschannel) return;

    if (oldMember === newMember) return;

let embed = new discord.MessageEmbed()
        .setColor(client.embedcolor)
        .setTimestamp()
        .addField(`User`, `\`\`\`fix\n${oldMember.user.tag}\nID: ${oldMember.user.id}\n\`\`\``)
        if (newMember.nickname != oldMember.nickname) {
          embed.addField(`Nickname Update`, `\`\`\`fix\n${oldMember.nickname || 'No Nickname'} => ${newMember.nickname || 'No Nickname'}\n\`\`\``)
        } else if (newMember._roles != oldMember._roles) {
          embed.addField(`Roles Update`, `\`\`\`fix\nUser Roles Updated!\n\`\`\``)
        }
        
        try {
            logschannel.send(`**Detected: Member Update**`, embed);
        } catch (e) {
            if (e) {
                return 1+1;
            } else {
                return 1+1;
            };
        };*/
}