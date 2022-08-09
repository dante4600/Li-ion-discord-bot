const {Client, GatewayIntentBits} = require('discord.js');

const {token} = require('./auth.json');
const client = new Client({intents: [GatewayIntentBits.DirectMessages]});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }
});

client.login(token);
