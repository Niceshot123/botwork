const { ChannelType, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js')
// import { Interaction, Message } from "discord.js"
module.exports = {
    name: 'interactionCreate',
    once: false,
    async execute(interaction, client) {
        if (interaction.isCommand()) {
            if (!interaction.guildId) return;
            try {
                const command = client.commands.get(interaction.commandName);
                if (!command) return interaction.reply({ content: "Command not found!", ephemeral: true });
                await command.execute({ interaction, client });
            } catch (e) {
                console.log(e.message);
                return interaction.reply({
                    content: "Interaction error!",
                    ephemeral: true
                })
            }
        } else if (interaction.isButton()) {
            interaction.deferUpdate();
            console.log(interaction.customId)
            if (interaction.customId == "ticket_1") {
                const embed = new EmbedBuilder()
                .setDescription("<@" + interaction.user.id + ">" + " " + "ได้ทำการเลือกบ้าน **Faither** เสร็จแล้ว ไปสนุกกันได้เลย!")
                .setColor('DarkPurple')
                client.channels.cache.get(interaction.channelId).send({
                    embeds: [embed]
                }).then((msg) => {
                    setTimeout(() => {
                        msg.delete()
                    }, 3000)
                })
                interaction.member.roles.add(client.button.role.RoleId1)
            } else if (interaction.customId == "ticket_2") {
                const embed = new EmbedBuilder()
                .setDescription("<@" + interaction.user.id + ">" + " " + "ได้ทำการเลือกบ้าน **Serpent** เสร็จแล้ว ไปสนุกกันได้เลย!")
                .setColor('DarkPurple')
                client.channels.cache.get(interaction.channelId).send({
                    embeds: [embed]
                }).then((msg) => {
                    setTimeout(() => {
                        msg.delete()
                    }, 3000)
                })
                interaction.member.roles.add(client.button.role.RoleId2)
            } else if (interaction.customId == "ticket_3") {
                const embed = new EmbedBuilder()
                .setDescription("<@" + interaction.user.id + ">" + " " + "ได้ทำการเลือกบ้าน **Wild** เสร็จแล้ว ไปสนุกกันได้เลย!")
                .setColor('DarkPurple')
                client.channels.cache.get(interaction.channelId).send({
                    embeds: [embed]
                }).then((msg) => {
                    setTimeout(() => {
                        msg.delete()
                    }, 3000)
                })
                interaction.member.roles.add(client.button.role.RoleId3)
            } else if (interaction.customId == "ticket_4") {
                const embed = new EmbedBuilder()
                .setDescription("<@" + interaction.user.id + ">" + " " + "ได้ทำการเลือกบ้าน **Insects** เสร็จแล้ว ไปสนุกกันได้เลย!")
                .setColor('DarkPurple')
                client.channels.cache.get(interaction.channelId).send({
                    embeds: [embed]
                }).then((msg) => {
                    setTimeout(() => {
                        msg.delete()
                    }, 3000)
                })
                interaction.member.roles.add(client.button.role.RoleId4)
            }
        }
    }
}