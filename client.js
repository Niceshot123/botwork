const discord = require('discord.js')
const fs = require('fs')
const path = require('path')
const config = require('./config')
const client = new discord.Client({
    intents: 32767,
    rest: {
        timeout: 15000
    },

})
const button = require('./configs/button.json');

client.button = button;
client.config = config;
client.commands = new discord.Collection()
client.events = new discord.Collection()

const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    client.commands.set(command.data.name, command);
}

const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
    const filePath = path.join(eventsPath, file);
    const event = require(filePath);
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args));
    } else {
        client.on(event.name, (...args) => event.execute(...args, client));
    }
}
module.exports = client;
client.login(config.token)