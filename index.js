async function sa() {
    const plex = require("./src/Base/Base")

    const client = new plex.Client("zort")
    const clientEvents = plex.events
    client.start()
    clientEvents.on("ready", async() => {
      const embed = new plex.Embed()
       .title("merhaba")
       .color("224,224,7")
        console.log("açıldı")
         const get = await client.channels.fetch("877923470476996658")
         console.log(embed.title)
        await get.send(embed)
    })
    
  /*  client.channels.fetch("877923470476996658").then(data => {
        console.log(data)
    })*/

}
sa()

