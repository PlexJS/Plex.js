async function sa() {
    const plex = require("./src/Base/Base")

    const client = new plex.Client("ZORT")
    const clientEvents = plex.events
    client.start()
    clientEvents.on("ready", async() => {
        console.log("açıldı")
    })
    clientEvents.on("message", async(msg) => {
        if(msg.content === "!ping") {
            msg.guild.scheduleEvent({
                name: "ping",
                scheduled_start_time: Date.now() + 5000,
                description: "test",
                channel_id: "947512569676054548",
                entity_type: "VOICE",
                privacy_level: "GUILD_ONLY",
            })
        }
    })

}
sa()

