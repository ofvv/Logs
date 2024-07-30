require('dotenv').config()
const { Collection } = require("discord.js");
const discord = require("discord.js");
const ascii = require("ascii-table");
const { MessageEmbed } = require("discord.js");
const { Database } = require('quickmongo');
require("discord-reply")
const client = new discord.Client({
  disableMentions: 'everyone'
})
require('discord-logs')(client)

discord.Constants.DefaultOptions.ws.properties.$browser = "Discord Android";
client.slashcommands = new Collection();
client.db = new Database(process.env.DB);
client.ownerid = "484701017015975936";
client.embedcolor = process.env.color || "#000001";
client.serverlogs = process.env.serverlogs || "845720163583918130";
client.suggestions = process.env.suggestionschannel || "845962767474884638";
client.prefix = process.env.prefix || "logs!";
client.sleep = async function(ms) {
  if (!ms) ms = 1;
  return new Promise(async resolve => setTimeout(resolve, ms));
};
client.randomHex = Math.floor(Math.random() * 16777215).toString(16);
client.codeblock = async function(code, language) {
  if (!language) language = 'yaml';
  if (!code) return `No Code Provided!`;
  return `\`\`\`${language}\n${code}\n\`\`\``;
};
client.formatms = async function(ms) {
  const sec = Math.floor((ms / 1000) % 60).toString();
  const min = Math.floor((ms / (1000 * 60)) % 60).toString();
  const hrs = Math.floor((ms / (1000 * 60 * 60)) % 60).toString();
  const days = Math.floor((ms / (1000 * 60 * 60 * 24)) % 60).toString();
  return `${days.padStart(1, "0")}d ${hrs.padStart(2, "0")}h ${min.padStart(2, "0")}m ${sec.padStart(2, "0")}s`;
};
client.randomArray = async function(array) {
  if (!array) array = [];
  return array[Math.floor(Math.random() * array.length)];
};
client.trimArray = async function(arr, maxlen) {
  if (!arr) arr = [];
  if (!maxlen) maxlen = 20;
  if (arr.length > maxlen) {
    const len = arr.length - maxlen;
    arr = arr.slice(0, maxlen);
    arr.push(`And ${len} More...`);
  }
  return arr;
};

["events", "slashcommands"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});


client.db.on("ready", async () => {
  setTimeout(function() {
  let table = new ascii(`Client DB`);
  table.addRow('On', '✅ ');
  console.log(table.toString())
  }, 4900)
})
client.db.on("debug", async data => console.log("[DB DEBUG] " + data))
client.db.on("error", async data => console.log("[DB ERROR] " + data))

client.login(process.env.TOKEN).catch(e => {
  let table = new ascii(`/`);
  table.addRow('Token', '❌ ');
  console.log(table.toString())
});
