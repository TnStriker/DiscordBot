const Discord = require('discord.js')

module.exports= {
    name: 'prices',
    description: "prices of my commissions",
    execute(message, args) {
        
        const logo = 'https://yt3.ggpht.com/a/AATXAJy6XbekbgDLQumtbXeiWfKf2ujkqYrps5cNdpAgNA=s900-c-k-c0xffffffff-no-rj-mo'

        const embed1 = new Discord.MessageEmbed() 
        .setTitle('Commission Prices')
        .setURL('https://strikerdesigns.carrd.co/')
        .setThumbnail(logo)
        .addFields(
            {name: '*Icon:*', value: '$30(+5 w/BG)\nIf you want to use it for merchandise, you have to pay for **"Logo"** pricing'},
            {name: '*Chibi:*', value: '$50(+10 w/BG)'},
            {name: '*Emote:*', value: '$30 each(3 = $80, 6 = $170)'},
            {name: '*Sub Badge:*', value: '$30 ea/$30 +$3 ea alt'},
            {name: '*Logo:*', value: "$80 - $200(depends on complexity and since it's your **BRAND**)\n**This also allows you to use it for merchandise.**"},
            {name: '*Streamer Package*', value: '$100 -$400 (this is usually a complete overhaul or either new overlays and panels)'},
            {name: '*Time to complete commission?*', value: 'A commission could take from one week to two weeks to complete. (Depending on complexity). If commissioned to do animated alerts or animated singer it could take two weeks.'},
            )
        .setTimestamp()
        .setColor('PURPLE')
        .setFooter("StrikerBot doing it's job :D")

        message.channel.send(embed1)
        .then(message=> {
            const embed2 = new Discord.MessageEmbed() 
            .setTitle('Terms of Service')
            .setURL('https://strikerdesigns.carrd.co/')
            .addFields(
            {name: '*TOS:*', value: 'All payment is in USD $ through PayPal invoicing and payment must be received upfront in full for projects under $50. Projects over $50 have the option to be paid with 50% upfront. The client is eligible for a full refund if made before the delivery of a first draft/first design. In the event of a project cancellation, all rights to the designs are retained by the designer.\n\nProgress updates and drafts are available for the client if desired. The first design of a project will always be previewed to the client to confirm satisfaction on the overall visuals. Small revisions are included with all projects. Once a visual direction has been established for the project, no complete overhauls will take place. Large or extensive revisions may incur an additional fee and is to be assessed by the designer in a case by case scenario.\n\nI do NOT allow refunds. Sales are final unless I, personally, cannot deliver a service. A full or partial refund will be issued if I am unable to deliver.'},
            {name: '\u200b', value: 'Please be aware that I, as the artist, have the right to decline the commission at any time.\n\nIf someone is blacklisted, they are not allowed to commission me. Nor is someone allowed to commission on their behalf. If they do it will result in that person also being blacklisted as well or just straight declined from being commissioned.\n\nIf you do not have an idea in mind and are wanting to brainstorm ideas with me, you may be charged extra. Due to the extra time and effort, I will be putting in.\n\nFor use in commercial work, an extra fee would be applied to the commission. Commercial use is purchasing the rights to my artwork to use for sale, merchandise, advertising, etc. Must be discussed beforehand.\n\nIf any of my artwork is being used for commercial use WITHOUT my acknowledge, it could result in me issuing a takedown or something similar to it.\n\n'},
            {name: '\u200b', value: '**After the final payment, the client owns the rights to the designs and branding. The designer will never re-purpose the designs for other clients or projects. The designer reserves the right to publicly display the final project on social media, portfolio presentations, and any other marketing. Delaying this is possible, but the client must notify the designer in advance before project completion. Full privacy may incur additional fees.**'}
            )
            .setTimestamp()
            .setColor('PURPLE')
            .setFooter("StrikerBot doing it's job :D")

            message.channel.send(embed2)

        })
    }
}