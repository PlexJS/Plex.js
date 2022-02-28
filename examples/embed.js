// Embed

async function sa() {
    const plex = require("../src/Base/Base")

    const client = new plex.Client("zort")
    const clientEvents = plex.events
    client.start()
    clientEvents.on("ready", async() => {
        console.log("açıldı")
    })
    clientEvents.on("message", async(msg) => {
        if(msg.author.bot) return msg.reply("Hello Bot ! ")
        let plexEmbed = plex.Embed()
        .setTitle("Plex.JS")
        .setColor("green")
        .setDescription(`Plex.JS  Wonderfull ! `);
        msg.reply(plexEmbed)
    })

}
sa()
