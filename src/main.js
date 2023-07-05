const { Telegraf } = require("telegraf");
const express = require("express");
const CronJob = require("cron").CronJob;
require("dotenv").config();

const app = express();
const bot = new Telegraf(process.env.BOT_TOKEN);

async function sendSticker1(channel_id) {
  await bot.telegram.sendSticker(
    channel_id,
    "CAACAgIAAxkBAAEJlG9kpAAB9P8OaBiUEtQdyZkUtmIh6uUAAgMBAAJWnb0KAuXReIfl-k8vBA"
  );
}

async function sendSticker2(channel_id) {
  await bot.telegram.sendSticker(
    channel_id,
    "CAACAgIAAxkBAAEJmpFkpZzqQ1-hj24dc04_u5rez-Dc8wACNhYAAlxA2EvbRm7S3ZV6DS8E"
  );
}

const job1 = new CronJob("*/8 * * * *", () => {
  sendSticker1("-1001910500046");
});

const job2 = new CronJob("*/16 * * * *", () => {
  sendSticker2("-1001910500046");
});

bot.launch();
job1.start();
job2.start();

app.get("/play", (req, res) => {
  res.send({ ping: "pong ⚾" });
});

app.listen(8080 || process.env.PORT, () => {
  console.log(`Bot is running on http://localhost:8080`);
});
