const Discord = require('discord.js');

module.exports = {
    name: "convite",
    aliases: [""],
    run: (client, message, args) => {
        message.delete()
    const embed = new Discord.MessageEmbed()

    .setColor("#851d86")
    .setDescription("***Então você gostaria de entrar no meu servidor? Ficaria tão feliz!!!***")
    .addFields({ name: '***O convite esta abaixo:***', value: "[Clique Aqui](https://top.gg/bot/735241944757829792)", incline: true})
    .setFooter(`Comando enviado por ${message.author.username}`, client.user.displayAvatarURL());

    message.channel.send(embed).then(msg => {
        msg.delete({ timeout: 10000 })
      })
      .catch(console.error);
    }
}