const secondMessage = require('./second-message')
const Discord = require('discord.js')

module.exports = (client) => {
  //Channel ID
  const channelId = '**'

  const getEmoji = (emojiName) =>
    client.emojis.cache.find((emoji) => emoji.name === emojiName)

  //You can add more roles here
  const emojis = {
  //Role Name: 'Emoji Name',
  //Role Name: 'Emoji Name',
  //Role Name: 'Emoji Name',
  }

  const reactions = []

  let emojiText = ''
  for (const key in emojis) {
    const emoji = getEmoji(key)
    reactions.push(emoji)

    const role = emojis[key]
    emojiText += `${emoji} = ${role}\n`
  }
  

  const embed = new Discord.MessageEmbed() 
  .setTitle('Roles')
  .setThumbnail('**')
  //.setImage('')
  .addField('These are the roles you can choose from!\n', emojiText)
  .setTimestamp()
  .setColor('PURPLE')
  .setFooter("DiscordBot doing it's job :D")

  
  secondMessage(client, channelId, embed, reactions)
  

  const handleReaction = (reaction, user, add) => {
    if (user.id === '736014724348641423') {
        return
  }

  const emoji = reaction._emoji.name

  const { guild } = reaction.message

  const roleName = emojis[emoji]
  if (!roleName) {
      return
  }

  const role = guild.roles.cache.find((role) => role.name === roleName)
  const member = guild.members.cache.find((member) => member.id === user.id)

  if (add) {
      member.roles.add(role)
  } else {
      member.roles.remove(role)
  }
}

  client.on('messageReactionAdd', (reaction,user) => {
    if (reaction.message.channel.id === channelId) {
        handleReaction(reaction, user, true)
      console.log(`role added to ${user.tag}`)
    }
  })

  client.on('messageReactionRemove', (reaction,user) => {
    if (reaction.message.channel.id === channelId) {
        handleReaction(reaction, user, false)
    console.log(`roled removed from ${user.tag}`)
    }
  })
}