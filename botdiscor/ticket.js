const {SlashCommandBuilder , EmbedBuilder , PermissionBitfilde ,actionRowBuilder , StringSlectMenuBuilder , ChannelType}= require("discord js")
const ticket=require(".../../Schemas/ticketShema");

module.exports={
    data:new SlashCommandBuilder()
    .setName("ticket")
    .setDescripition("manage the ticket system")
    .addSubcomand(command => command.setName("send").setDescripition("send the ticket massage").addStingOption(option =>option.setName("name").setDescripition("the name for the open selecy menu content").setRequired(true)).addStingOption(option => option.setName("message").setDescripition("A custom massage to add to the embed").setRequired(false)))
    .addSubcomand(command => command.setName("Setup").setDescripition("Setup the ticket category").addChannelOption(option => option.setName("category").setDescripition("the category to send ticket in").addChanelTypes(ChannelType.GuildCategory).setRequired(true)))
    .addSubcomand(command => command.setName("Remove").setDescripition("Disable the ticket system"))
    .setDefaultMenberPermissions(PermissionBitfilde.Flags.Admistrator),
    async execute(interaction){
        const { options}=interaction;
        const sub = options.getSubcommand();
        const data = await ticket.findOne({Guild: interaction.guild.id})
        switch(sub){
            case "send":
                if(!data) return await interaction.reply({content:`You have to do /ticket before you can send a ticket message...`, ephmeral:true});
                const name = options.getString("name");
                let message= options.getString("message") || "Create a ticket to talk with the server saff! once tou select below , use the input to describe why you are creating this ticket";

                const select = new actionRowBuilder()
                .addComponets(
                    new StringSlectMenuBuilder()
                    .setCustomId("ticketCreateSelect")
                    .setPlaceholder(`${name}`)
                    .setMinValue(1)
                    .addOptions(
                        {
                            label:"create your ticket",
                            descreption:"Click to begin the ticket creation process",
                            value:"createTicket"
                        }
                    )
                )
                const embed=new EmbedBuilder()
                .setColor("Blurple")
                .setTitle(`Create a ticket`)
                .setDescripition(message+"🎟️")
                .setFooter({text:`${interaction.guild.name}` , iconURL:`${interaction.guild.iconURL()}`})

                await interaction.reply({content:`I have sent your ticket message below` , ephmeral:true})
                await interaction.channel.send({embeds:[embed] , components:[select]})

            break;
            case "remove":
                if(!data) return await interaction.reply({content:`Looks like tou don't already have a ticket system set` , ephmeral:true})
                else{
                     await ticket.deleteOne({Guild:interaction.guild.id})
                     await interaction.reply({content:`I have delete your ticket category` , ephmeral:true})
            }
            break;
            case "setup":
                if (data) return await interaction.reply({content:`Looks like you already have a ticket category set to <#${data.Categoy}>`, ephmeral:true})
                else{
                    const category = options.getChannel("category");
                    await ticket.create({
                        Guild:interaction.guild.id , 
                        category: category.id
                    })

            }
        }
    }

}