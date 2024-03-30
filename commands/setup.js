const { SlashCommandBuilder, EmbedBuilder, ButtonBuilder, ActionRowBuilder, ButtonStyle } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('setup')
        .setDescription('xxxxxxxxxxx')
        .addChannelOption(option => option.setName('channel').setDescription('เลือก channel ที่ต้องการจะ setup ระบบ ticket').setRequired(true)),
    async execute({ interaction, client }) {
        if (!client.config.ownerId.includes(interaction.user.id)) return
        const channel = interaction.options.getChannel('channel');
        const embed = new EmbedBuilder()
            .setColor('DarkPurple')
            .setTitle(client.button.ticketSetup.description)
            .setImage('https://media.discordapp.net/attachments/1110564432674832466/1118115517669048350/1686649896508.jpg?width=1248&height=702')
            .setFooter({
                text: client.button.ticketSetup.footer
            });
        const buttons = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
                .setCustomId('ticket_1')
                .setEmoji(client.button.buttonOne.emoji)
                .setLabel(client.button.buttonOne.description)
                .setStyle(ButtonStyle.Primary),
            new ButtonBuilder()
                .setCustomId('ticket_2')
                .setEmoji(client.button.buttonTwo.emoji)
                .setLabel(client.button.buttonTwo.description)
                .setStyle(ButtonStyle.Primary),
            new ButtonBuilder()
                .setCustomId('ticket_3')
                .setEmoji(client.button.buttonThree.emoji)
                .setLabel(client.button.buttonThree.description)
                .setStyle(ButtonStyle.Primary),
            new ButtonBuilder()
                .setCustomId('ticket_4')
                .setEmoji(client.button.buttonFour.emoji)
                .setLabel(client.button.buttonFour.description)
                .setStyle(ButtonStyle.Primary)
        );
        await channel.send({
            embeds: [embed],
            components: [buttons]
        }).catch((e) => { console.log(e)})
        await interaction.reply({
            content: "เรียบร้อย!",
            ephemeral: true
        })
    }
}