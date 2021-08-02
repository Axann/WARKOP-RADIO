const discord = require ("discord.js")
const ytdl = require ("ytdl-core")

const id1 = "791946785265418250" //music 1
const id2 = "791946781315301396" //music 2
const id3 = "792648582904938516" //music 3
const id4 = "792778000910516224" //music 4

const url1 = ('https://youtu.be/gnyW6uaUgk4') //english
const url2 = ('https://youtu.be/GgrocEkkB_g') //indo
const url3 = ('https://youtu.be/2atQnvunGCo') //lofi
const url4 = ('https://youtu.be/F4aby5WN1Rw') //kpop

const { token1, token2, token3, token4 } = process.env

const client1 = new discord.Client();
const client2 = new discord.Client();
const client3 = new discord.Client();
const client4 = new discord.Client();

let broadcast1 = null;
let broadcast2 = null;
let broadcast3 = null;
let broadcast4 = null;

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

  
  broadcast1 = client1.voice.createBroadcast();
  let stream1 = ytdl(url1);
  stream1.on('error', console.error);
  broadcast1.play(stream1);


  if (!interval) {
    interval = setInterval(async function () {
      try {
        if (stream1 && !stream1.ended) stream1.destroy();
        stream1 = ytdl(url1, { highWaterMark: 100 << 150 });
        stream1.on('error', console.error);
        broadcast1.play(stream1);
      } catch (e) { return }
    }, 1800000)
  }
  
  
  try {
    const connection = await channel.join();
    connection.play(broadcast1);
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
      connection.play(broadcast1);
    } catch (error) {
      console.error(error);
    }
  }
}, 20000);

client1.login(token1)


//** -------------------------------- ~ AXAN ~ -------------------------------- **//


client2.on('ready', async () => {
  
  const status = [
    `Official Warkop Radio`,
    `24/7 RADIO ON WARKOP`,
    `INDONESIA WARKOP RADIO`,
    `${client2.users.cache.size} users`,
    ]
  setInterval(() => {
    client2.user.setActivity(status[Math.floor(Math.random() * status.length)], {type : "LISTENING"})
  }, 2000)
    
  
  let channel = client2.channels.cache.get(id2) || await client2.channels.fetch(id2)

  
  if (!channel) {
    console.error("channel gaada pantek");
    return process.exit(1);
  } else if (channel.type !== "voice") {
    console.error("voice gaada pantek");
    return process.exit(1);
  }

  
  broadcast2 = client2.voice.createBroadcast();
  let stream2 = ytdl(url2);
  stream2.on('error', console.error);
  broadcast2.play(stream2);
  
  
  if (!interval) {
    interval = setInterval(async function () {
      try {
        if (stream2 && !stream2.ended) stream2.destroy();
        stream2 = ytdl(url2, { highWaterMark: 100 << 150 });
        stream2.on('error', console.error);
        broadcast2.play(stream2);
      } catch (e) { return }
    }, 1800000)
  }
  
  
  try {
    const connection = await channel.join();
    connection.play(broadcast2);
  } catch (error) {
    console.error(error);
  }
});


setInterval(async function () {
  if (!client2.voice.connections.size) {
    let channel = client2.channels.cache.get(id2) || await client2.channels.fetch(id2);
    if (!channel) return;
    
    
    try {
      const connection = await channel.join();
      connection.play(broadcast2);
    } catch (error) {
      console.error(error);
    }
  }
}, 20000);

client2.login(token2)


//** -------------------------------- ~ AXAN ~ -------------------------------- **//


client3.on('ready', async () => {
  
  const status = [
    `Official Warkop Radio`,
    `24/7 RADIO ON WARKOP`,
    `LOFI WARKOP RADIO`,
    `${client3.users.cache.size} users`,
    ]
  setInterval(() => {
    client3.user.setActivity(status[Math.floor(Math.random() * status.length)], {type : "LISTENING"})
  }, 2000)
    
  
  let channel = client3.channels.cache.get(id3) || await client3.channels.fetch(id3)

  
  if (!channel) {
    console.error("channel gaada pantek");
    return process.exit(1);
  } else if (channel.type !== "voice") {
    console.error("voice gaada pantek");
    return process.exit(1);
  }

  
  broadcast3 = client3.voice.createBroadcast();
  let stream3 = ytdl(url3);
  stream3.on('error', console.error);
  broadcast3.play(stream3);
  
  
  if (!interval) {
    interval = setInterval(async function () {
      try {
        if (stream3 && !stream3.ended) stream3.destroy();
        stream3 = ytdl(url3, { highWaterMark: 100 << 150 });
        stream3.on('error', console.error);
        broadcast3.play(stream3);
      } catch (e) { return }
    }, 1800000)
  }
  
  
  try {
    const connection = await channel.join();
    connection.play(broadcast3);
  } catch (error) {
    console.error(error);
  }
});


setInterval(async function () {
  if (!client3.voice.connections.size) {
    let channel = client3.channels.cache.get(id3) || await client3.channels.fetch(id3);
    if (!channel) return;
    
    
    try {
      const connection = await channel.join();
      connection.play(broadcast3);
    } catch (error) {
      console.error(error);
    }
  }
}, 20000);

client3.login(token3)


//** -------------------------------- ~ AXAN ~ -------------------------------- **//


client4.on('ready', async () => {
  
  const status = [
    `Official Warkop Radio`,
    `24/7 RADIO ON WARKOP`,
    `KPOP WARKOP RADIO`,
    `${client4.users.cache.size} users`,
    ]
  
  setInterval(() => {
    client4.user.setActivity(status[Math.floor(Math.random() * status.length)], {type : "LISTENING"})
  }, 2000)
    
  
  let channel = client4.channels.cache.get(id4) || await client4.channels.fetch(id4)

  
  if (!channel) {
    console.error("channel gaada pantek");
    return process.exit(1);
  } else if (channel.type !== "voice") {
    console.error("voice gaada pantek");
    return process.exit(1);
  }

  
  broadcast4 = client4.voice.createBroadcast();
  let stream4 = ytdl(url4);
  stream4.on('error', console.error);
  broadcast4.play(stream4);
  
  
  if (!interval) {
    interval = setInterval(async function () {
      try {
        if (stream4 && !stream4.ended) stream4.destroy();
        stream4 = ytdl(url4, { highWaterMark: 100 << 150 });
        stream4.on('error', console.error);
        broadcast4.play(stream4);
      } catch (e) { return }
    }, 1800000)
  }
  
  
  try {
    const connection = await channel.join();
    connection.play(broadcast4);
  } catch (error) {
    console.error(error);
  }
});


setInterval(async function () {
  if (!client4.voice.connections.size) {
    let channel = client4.channels.cache.get(id4) || await client4.channels.fetch(id4);
    if (!channel) return;
    
    
    try {
      const connection = await channel.join();
      connection.play(broadcast4);
    } catch (error) {
      console.error(error);
    }
  }
}, 20000);

client4.login(token4)



process.on('unhandledRejection', console.error);