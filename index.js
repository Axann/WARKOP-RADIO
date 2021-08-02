const discord = require ("discord.js")
const ytdl = require ("ytdl-core")

const id1 = "791946785265418250" //music 1
const id2 = "791946781315301396" //music 2
const id3 = "792648582904938516" //music 3
const id4 = "792778000910516224" //music 4

const url1 = 'https://youtu.be/gnyW6uaUgk4' //english
const url2 = 'https://youtu.be/GgrocEkkB_g' //indo
const url3 = 'https://youtu.be/2atQnvunGCo' //lofi
const url4 = 'https://youtu.be/F4aby5WN1Rw' //kpop

const { token1, token2, token3, token4 } = process.env

const client1 = new discord.Client();
//const client2 = new discord.Client();

let broadcast = null;
let interval = null;


//** -------------------------------- ~ AXAN ~ -------------------------------- **//


client1.on('ready', async () => {
  
  const status = [
    `Official Warkop Radio`,
    `24/7 RADIO ON WARKOP`,
    `ENGLISH WARKOP RADIO`,
    `${client1.users.cache.size} users`,
    ]
  setInterval(() => {
    client1.user.setActivity(status[Math.floor(Math.random() * status.length)], {type : "LISTENING"})
  }, 2000)
    
  
  let channel = client1.channels.cache.get(id1) || await client1.channels.fetch(id1)

  
  if (!channel) {
    console.error("channel gaada pantek");
    return process.exit(1);
  } else if (channel.type !== "voice") {
    console.error("voice gaada pantek");
    return process.exit(1);
  }

  
  broadcast = client1.voice.createBroadcast();
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
  if (!client1.voice.connections.size) {
    let channel = client1.channels.cache.get(id1) || await client1.channels.fetch(id1);
    if (!channel) return;
    
    
    try {
      const connection = await channel.join();
      connection.play(broadcast);
    } catch (error) {
      console.error(error);
    }
  }
}, 20000);

client1.login(token1)


//** -------------------------------- ~ AXAN ~ -------------------------------- **//








process.on('unhandledRejection', console.error);