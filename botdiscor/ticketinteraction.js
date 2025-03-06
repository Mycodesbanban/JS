const{modalBuilder , TextInputBuilder , ActionRowBuilder , TextInputStyle , ChannelType , EmbedBuilder , buttonBuilder , ButtonStyle , PermissionsbitField}=require("discord.js")
const ticket =require("../Shemas/ticketShema");
const { createTranscript}= require("discord-html-transcripts");

module.exports={
    name:"interactionCreate",
    async execute(interaction , client){
        if ( interaction.customId== "ticketCreateSelect"){
            const modal= new modalBuilder()
            .setTilte("Create yout ticket")
            .setCustomId("ticketModal")

            const why = new TextInputBuilder()
            .setCustomId("Whyticket")
            .setRequired(true)
            .setPlaceHolder("what is reason for creating this ticket")
            .setLabel("whay are your creating this ticket?")
            .setStyle(TextInputStyle.Paragraph);

            const info=new TextInputBuilder()
            .setCustomId("infoTicket")
            .setRequired(false)
            .setPlaceholder("Fell free to leave this blank")
            .setLabel("Provide us with any additional information")
            .setStyle(TextInputStyle.Paragraph);

            const one = new ActionRowBuilder().addComponets(why)
            const two = new ActionRowBuilder().addComponets(info)

            modal.addComponets(one , two);
            await interaction.showModal(modal);

        }else if(interaction.customId=="ticketModal"){
            const user = interaction.user;
            const data=await ticket.findOne({Guild:interaction.guild.id});
            if(!data) return await interaction.reply({content:`Sorry! Looks like you found this message but the ticket system is not setup here` ,ephemeral:true})
            else{
                const why = interaction.fields.getTextInputValue("whayTicket");
                const info=interaction.fields.getTextInputValue("InfoTicket");
                const category = await interaction.guild.channels.cache.get(data.category)

                const channel= await interaction.guld.channel.create({
                    name:`ticket-${user.id}`,
                    type: ChannelType.GuildText,
                    topic:`Ticket user:${user.username}; Ticket reason:${why}`,
                    parent: category,
                    permissionOverWrites:[
                        {
                            id:interaction.guild.id,
                            deny:[PermissionsbitField.Flangs.ViewChannel]
                            
                        },
                        {
                            id:interaction.user.id,
                            allow:[PermissionsbitField.Flags.ViewChannel , PermissionsbitField.Flags.sendMessage,PermissionsbitField.Flags.ReadMessageHistory]
                        }
                    ]
                })

                const embed=new EmbedBuilder()
                .setColor("Blurple")
                .setTilte(`Ticket from ${user.username}`)
                .setDescription(`Opening Reason:${why}\n\nExtra Information:${info}`)
                .setTimesTamp();

            }
        }
        
    }

    
}