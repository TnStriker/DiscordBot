const secondMessage = require('./second-message')
const Discord = require('discord.js')

module.exports = (client) => {
  //Channel ID
  const channelId = '751670473468936262'

  const getEmoji = (emojiName) =>
    client.emojis.cache.find((emoji) => emoji.name === emojiName)

  const emojis = {
    Twitch: 'Twitch Streamer',
    Youtube: 'Youtube',
    

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
  .setThumbnail('https://64.media.tumblr.com/77f6b7319f1aeb048973be48368b0784/tumblr_ovq5tr4u2M1v6lhveo1_250.png')
  //.setImage('')
  .addField('These are the roles you can choose from!\n', emojiText)
  .setTimestamp()
  .setColor('PURPLE')
  .setFooter("StrikerBot doing it's job :D")

  
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