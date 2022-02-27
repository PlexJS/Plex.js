async function sa() {
    const plex = require("./src/Base/Base")

    const client = new plex.Client("zort")
    const clientEvents = plex.events
    client.start()
    clientEvents.on("ready", async() => {
        console.log("açıldı")
    })
    clientEvents.on("message", async(msg) => {
        console.log(msg)
    })
    
  /*  client.channels.fetch("877923470476996658").then(data => {
        console.log(data)
    })*/

}
sa()

