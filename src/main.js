const { Telegraf } = require("telegraf");
const express = require("express");
const CronJob = require("cron").CronJob;
require("dotenv").config();

const app = express();
const bot = new Telegraf(process.env.BOT_TOKEN);

async function sendMessage(channel_id) {
  await bot.telegram.sendSticker(
    channel_id,
    "CAACAgIAAxkBAAEJlG9kpAAB9P8OaBiUEtQdyZkUtmIh6uUAAgMBAAJWnb0KAuXReIfl-k8vBA"
  );
}

const job = new CronJob("*/8 * * * *", () => {
  sendMessage("-1001910500046");
});

bot.launch();
job.start();

app.get("/play", (req, res) => {
  res.send({ ping: "pong ⚾" });
});

app.listen(8080 || process.env.PORT, () => {
  console.log(`Bot is running on http://localhost:8080`);
});
