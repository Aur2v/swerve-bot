const Discord = require("discord.js")
require("dotenv").config()

const TOKEN = "OTgyOTY5ODI3Mzk4MzkzOTA3.GyLisr.MVhmY4vHZ8uVtgkG4b4LJJeQUOAGHVz8gFn_A0"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply("hey mamas")
    }
})

client.login(process.env.TOKEN)