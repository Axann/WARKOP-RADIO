const discord = require ("discord.js")
const ytdl = require ("ytdl-core")

const { url, channelId, token } = process.env
const client = new discord.Client();

let broadcast = null;
let interval = null;


//** -------------------------------- ~ AXAN ~ -------------------------------- **//


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


//** -------------------------------- ~ AXAN ~ -------------------------------- **//


client.on('ready', async () => {
  
  const status = [
    `Official Warkop Radio`,
    `24/7 RADIO ON WARKOP`,
    `${client.users.cache.size} users`,
    ]
  setInterval(() => {
    client.user.setActivity(status[Math.floor(Math.random() * status.length)], {type : "LISTENING"})
  }, 2000)
  
  
//** -------------------------------- ~ AXAN ~ -------------------------------- **//
  
  
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
  
  
//** -------------------------------- ~ AXAN ~ -------------------------------- **//

  
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


//** -------------------------------- ~ AXAN ~ -------------------------------- **//


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


//** -------------------------------- ~ AXAN ~ -------------------------------- **//


client.login(token)
process.on('unhandledRejection', console.error);