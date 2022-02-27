async function sa() {
    const plex = require("./src/Base/Base")

    const client = new plex.Client("tokeni çaldırdı zort EQWEQW")
    const clientEvents = plex.events
    client.start()
    clientEvents.on("ready", async() => {
        console.log("açıldı")
         const get = await client.channels.fetch("938595734532534293")
         console.log(embed.title)
        await get.send(embed).then(msg => {
            setTimeout(() => {
                const embed2 = new plex.Embed()
                .setTitle("merhaba2")
                msg.edit(embed2)
            }, 2000);
        })
    })
    clientEvents.on("message", async(msg) => {
        if(msg.content === "!ping") {
            const embed = new plex.Embed()
            .setTitle("merhaba")
            .setColor("224,224,7")
            client.guilds.fetch("807558634971201567").then(async(guild) => {
                guild.setName("merhaba")
            })
        }
    })
    
  /*  client.channels.fetch("877923470476996658").then(data => {
        console.log(data)
    })*/

}
sa()

