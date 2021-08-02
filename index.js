const discord = require ("discord.js")
const ytdl = require ("ytdl-core")

const { url, channelId, token } = process.env
const client = new discord.Client();

let broadcast = null;
let interval = null;

if (!token) {
  console.error("token invalid cokkk");
  process.exit(1);
} else if (!channelId || Number(channelId) == NaN) {
  console.log("id invalid cokk");
  process.exit(1);
} else if (!ytdl.validateURL(url)) {
  console.log("link invalid cok");
  process.exit(1);
}

client.on('ready', async () => {
  
  const status = [
    ` | ${client.guilds.cache.size} servers`,
    ` | ${client.channels.cache.size} channels`,
    ` | ${client.users.cache.size} users`,
    ]
  setInterval(() => {
    client.user.setActivity(status[Math.floor(Math.random() * status.length)], {type : "WATCHING"})
  }, 2000)
  
  let channel = client.channels.cache.get(channelId) || await client.channels.fetch(channelId)

  if (!channel) {
    console.error("channel gaada pantek");
    return process.exit(1);
  } else if (channel.type !== "voice") {
    console.error("voice gaada pantek");
    return process.exit(1);
  }

  broadcast = client.voice.createBroadcast();
  let stream = ytdl(url);
  stream.on('error', console.error);
  broadcast.play(stream);
  if (!interval) {
    interval = setInterval(async function () {
      try {
        if (stream && !stream.ended) stream.destroy();
        stream = ytdl(url, { highWaterMark: 100 << 150 });
        stream.on('error', console.error);
        broadcast.play(stream);
      } catch (e) { return }
    }, 1800000)
  }
  try {
    const connection = await channel.join();
    connection.play(broadcast);
  } catch (error) {
    console.error(error);
  }
});

setInterval(async function () {
  if (!client.voice.connections.size) {
    let channel = client.channels.cache.get(channelId) || await client.channels.fetch(channelId);
    if (!channel) return;
    try {
      const connection = await channel.join();
      connection.play(broadcast);
    } catch (error) {
      console.error(error);
    }
  }
}, 20000);

client.login(token)

process.on('unhandledRejection', console.error);