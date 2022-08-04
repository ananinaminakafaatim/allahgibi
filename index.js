const aoijs = require("aoi.js")
const bot = new aoijs.AoiClient({
  token: "TOKEN",
  prefix: "PREFİX",
  intents: "all"
})

//Events
bot.onMessage()

const loader = new aoijs.LoadCommands(bot);
loader.load(bot.cmd, './commands/')

bot.command({
  name: "$alwaysExecute",
  code:`
$addCmdReactions[<:haha:1004741467878740008>]
$onlyForChannels[1004735315858165791; ]
`
});

//  7/24
const keep_alive = require('./keep_alive.js')
// 7/24

// Ses 
const { joinVoiceChannel } = require('@discordjs/voice');
	bot.on('ready', () => { 
		joinVoiceChannel({
		channelId: "1004740106835472465",
		guildId: "1003694579456954568",       
		adapterCreator: bot.guilds.cache.get("1003694579456954568").voiceAdapterCreator
		});
});
// Ses