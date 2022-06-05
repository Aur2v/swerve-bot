const Discord = require("discord.js")
require("dotenv").config()

const TOKEN = "OTgyOTY5ODI3Mzk4MzkzOTA3.GhXLGl.5zmLTNvfT-b_4yIZRGFE7qHIeLxm0RdZVDb_iM"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on('ready', () => { 
    console.log(`Logged in as ${client.user.tag}`)
});

client.on("messageCreate", (message) => {
    if (message.content == "ping"){
        message.reply("hey lol")
    }
})

client.login(process.env.TOKEN)