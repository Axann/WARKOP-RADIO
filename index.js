const discord = require ("discord.js")
const ytdl = require ("ytdl-core")

const { id1, id2, id3, id4 } = require ("./config.json")
const { url1, url2, url3, url4 } = require ("./config.json")
const { token1, token2, token3, token4 } = process.env

const client = new discord.Client();
//const client2 = new discord.Client();

let broadcast = null;
let interval = null;


//** -------------------------------- ~ AXAN ~ -------------------------------- **//


client.on('ready', async () => {
  
  const status = [
    `Official Warkop Radio`,
    `24/7 RADIO ON WARKOP`,
    `ENGLISH WARKOP RADIO`,
    `${client.users.cache.size} users`,
    ]
  setInterval(() => {
    client.user.setActivity(status[Math.floor(Math.random() * status.length)], {type : "LISTENING"})
  }, 2000)
    
  
  let channel = client.channels.cache.get(id1) || await client.channels.fetch(id1)

  
  if (!channel) {
    console.error("channel gaada pantek");
    return process.exit(1);
  } else if (channel.type !== "voice") {
    console.error("voice gaada pantek");
    return process.exit(1);
  }

  
  broadcast = client.voice.createBroadcast();
  let stream = ytdl(url1);
  stream.on('error', console.error);
  broadcast.play(stream);
  
  
  if (!interval) {
    interval = setInterval(async function () {
      try {
        if (stream && !stream.ended) stream.destroy();
        stream = ytdl(url1, { highWaterMark: 100 << 150 });
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
    let channel = client.channels.cache.get(id1) || await client.channels.fetch(id1);
    if (!channel) return;
    
    
    try {
      const connection = await channel.join();
      connection.play(broadcast);
    } catch (error) {
      console.error(error);
    }
  }
}, 20000);

client.login(token1)


//** -------------------------------- ~ AXAN ~ -------------------------------- **//








process.on('unhandledRejection', console.error);