const { ModalBuilder, TextInputBuilder, ActionRowBuilder, TextInputStyle, ChannelType, EmbedBuilder, ButtonBuilder, ButtonStyle, PermissionsBitField } = require("discord.js");
const ticket = require("../Schemas/ticketSchema");
const { createTranscript } = require("discord-html-transcripts");

module.exports = {
    name: "interactionCreate",
    async execute(interaction, client) {
        if (interaction.customId == "ticketCreateSelect") {
            const modal = new ModalBuilder()
                .setTitle("Create your ticket")
                .setCustomId("ticketModal");

            const why = new TextInputBuilder()
                .setCustomId("whyTicket")
                .setRequired(true)
                .setPlaceholder("What is the reason for creating this ticket?")
                .setLabel("Why are you creating this ticket?")
                .setStyle(TextInputStyle.Paragraph);

            const info = new TextInputBuilder()
                .setCustomId("infoTicket")
                .setRequired(false)
                .setPlaceholder("Feel free to leave this blank")
                .setLabel("Provide us with any additional information")
                .setStyle(TextInputStyle.Paragraph);

            const one = new ActionRowBuilder().addComponents(why);
            const two = new ActionRowBuilder().addComponents(info);

            modal.addComponents(one, two);
            await interaction.showModal(modal);

        } else if (interaction.customId == "ticketModal") {
            const user = interaction.user;
            const data = await ticket.findOne({ Guild: interaction.guild.id });
            if (!data) return await interaction.reply({ content: `Sorry! Looks like the ticket system is not set up here`, ephemeral: true });
            else {
                const why = interaction.fields.getTextInputValue("whyTicket");
                const info = interaction.fields.getTextInputValue("infoTicket");
                const category = await interaction.guild.channels.cache.get(data.category);

                const channel = await interaction.guild.channels.create({
                    name: `ticket-${user.id}`,
                    type: ChannelType.GuildText,
                    topic: `Ticket user:${user.username}; Ticket reason:${why}`,
                    parent: category,
                    permissionOverwrites: [
                        {
                            id: interaction.guild.id,
                            deny: [PermissionsBitField.Flags.ViewChannel]
                        },
                        {
                            id: interaction.user.id,
                            allow: [PermissionsBitField.Flags.ViewChannel, PermissionsBitField.Flags.SendMessages, PermissionsBitField.Flags.ReadMessageHistory]
                        }
                    ]
                });

                const embed = new EmbedBuilder()
                    .setColor("Blurple")
                    .setTitle(`Ticket from ${user.username}`)
                    .setDescription(`Opening Reason: ${why}\n\nExtra Information: ${info}`)
                    .setTimestamp();

                const button = new ActionRowBuilder()
                    .addComponents(
                        new ButtonBuilder()
                            .setCustomId("closeTicket")
                            .setLabel("Close Ticket")
                            .setStyle(ButtonStyle.Primary),
                        new ButtonBuilder()
                            .setCustomId("ticketTranscript")
                            .setLabel("Transcript")
                            .setStyle(ButtonStyle.Primary)
                    );

                await channel.send({ embeds: [embed], components: [button] });
                await interaction.reply({ content: `Your ticket has been opened in ${channel}`, ephemeral: true });
            }

        } else if (interaction.customId == "closeTicket") {
            const channel = interaction.channel;
            if (channel.name.startsWith("ticket-")) {
                await channel.delete();
                await interaction.reply({ content: "Your ticket has been closed.", ephemeral: true });
            } else {
                await interaction.reply({ content: "This is not a valid ticket channel.", ephemeral: true });
            }
        }
    }
};
