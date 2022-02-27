async function sa() {
    const plex = require("./src/Base/Base")

    const client = new plex.Client("zort")
    const clientEvents = plex.events
    client.start()
    clientEvents.on("ready", async() => {
         const get = await client.channels.fetch("877923470476996658")
         const getMessage = await get.messages.fetch("947232272128573533")
         await getMessage.delete()
    })
    
  /*  client.channels.fetch("877923470476996658").then(data => {
        console.log(data)
    })*/

}
sa()

