const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
    let prefix = config.prefix;
    if (message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;

    let invite = new Discord.MessageEmbed()
    .setTitle("Invite & Support Link!")
    .addField("Support Server", "[Click to join support Server](https://discord.gg/dBEabhxqWQ)")
    .setTitle("Bot invite Link")
    .addField("Invite Link", "[Click to invite the bot](https://discord.com/api/oauth2/authorize?client_id=824639515062829117&permissions=8&scope=bot)")
    .setTimestamp()
    .setFooter(`Requested by ${message.author.tag}`, client.user.displayAvatarURL())
    message.channel.send(invite);
}

module.exports.help = {
    name: "invite"
}
