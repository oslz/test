
const Discord = require(`discord.js`);
const client = new Discord.Client();
exports.run = (client, message, args)  => {
    var falas = [
        "10% [█.........]", 
        "20% [██........]", 
        "30% [███.......]", 
        "40% [████......]", 
        "50% [█████.....]", 
        "60% [██████....]", 
        "90% [█████████.]", 
        "80% [████████..]", 
        "70% [███████...]", 
        "100%[██████████]"
    ];
    var mentions = message.mentions.users.first(2);
    embed = new Discord.RichEmbed()
        .setTitle(`💞 Será que temos um casal novo por aqui?`)
        .setColor(2490112)
        .setTimestamp(new Date())
        .addField('Casal escolhido foi', `${mentions[0]} ${mentions[1]}`)
        .addField('Chances atuais', `${falas[Math.round(Math.random() * falas.length - 1)]}`, true)
        message.channel.send(embed);
}