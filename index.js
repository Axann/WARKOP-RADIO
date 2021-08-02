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

  
  broadcast = client2.voice.createBroadcast();
  let stream = ytdl(url2);
  stream.on('error', console.error);
  broadcast.play(stream);
  
  
  if (!interval) {
    interval = setInterval(async function () {
      try {
        if (stream && !stream.ended) stream.destroy();
        stream = ytdl(url2, { highWaterMark: 100 << 150 });
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
  if (!client2.voice.connections.size) {
    let channel = client2.channels.cache.get(id2) || await client2.channels.fetch(id2);
    if (!channel) return;
    
    
    try {
      const connection = await channel.join();
      connection.play(broadcast);
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

  
  broadcast = client3.voice.createBroadcast();
  let stream = ytdl(url3);
  stream.on('error', console.error);
  broadcast.play(stream);
  
  
  if (!interval) {
    interval = setInterval(async function () {
      try {
        if (stream && !stream.ended) stream.destroy();
        stream = ytdl(url3, { highWaterMark: 100 << 150 });
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
  if (!client3.voice.connections.size) {
    let channel = client3.channels.cache.get(id3) || await client3.channels.fetch(id3);
    if (!channel) return;
    
    
    try {
      const connection = await channel.join();
      connection.play(broadcast);
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

  
  broadcast = client4.voice.createBroadcast();
  let stream = ytdl(url4);
  stream.on('error', console.error);
  broadcast.play(stream);
  
  
  if (!interval) {
    interval = setInterval(async function () {
      try {
        if (stream && !stream.ended) stream.destroy();
        stream = ytdl(url4, { highWaterMark: 100 << 150 });
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
  if (!client4.voice.connections.size) {
    let channel = client4.channels.cache.get(id4) || await client4.channels.fetch(id4);
    if (!channel) return;
    
    
    try {
      const connection = await channel.join();
      connection.play(broadcast);
    } catch (error) {
      console.error(error);
    }
  }
}, 20000);

client4.login(token4)



process.on('unhandledRejection', console.error);