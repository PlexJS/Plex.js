Object.defineProperty(exports, "__esModule", {
    value: true
});

const WebSocket = require('ws')
const ws = new WebSocket('wss://gateway.discord.gg/?v=9&encoding=json')
const fetch = require('node-fetch')
let EventEmitter1 = require('node:events')
let em = new EventEmitter1.EventEmitter();
let seqnum = null

let acs = require("../Request/Request")
const GuildManager = require("../Managers/GuildManager");
const ChannelManager = require('../Managers/ChannelManager');
const UserManager = require('../Managers/UserManager');


let token = null



exports.Client = void 0;
class Client {
    constructor(tokenget) {
        if(!tokenget) return
        token = tokenget
        acs.setToken(tokenget)

        this.clientUserSet().then(data => {
            this.user = data
        })
    }

   async start() {
       var payload = {
            op: 2,
            d: {
                token: token,
                intents: 98303,
                properties: {
                    $os: 'linux',
                    $browser: 'chrome',
                    $device: 'chrome'
                },
            }
        }
    
        ws.on('open', function open(data) {
            ws.send(JSON.stringify(payload))
        })
    
        ws.addEventListener('message', function (event) {
            let payload = event.data
        })
    
        ws.on('message', async function incoming(data) {
            let payload = JSON.parse(data)
            let {
                t,
                op,
                d,
                s
            } = payload;
            seqnum = s
            switch (op) {
                case 10:
                    const {
                        heartbeat_interval
                    } = d;
                    var interval = heartbeat(heartbeat_interval)
                    break;
            }
            switch (t) {
                case "READY":
                    em.emit("ready")
                    break;
                case "MESSAGE_CREATE":
                    d["channel"] = d.channel_id
                    em.emit("message", d)
                    break;
                case "INTERACTION_CREATE":
                    let URL = `https://discord.com/api/v9/interactions/${d.id}/${d.token}/callback`;
                    let requestOptions = {
                        method: 'POST',
                        headers: {
                            "Authorization": `Bot ${token}`,
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            "type": 4,
                            "data": {
                                "content": "Hello",
                            }
                        })
                    };
    
                    fetch(URL, requestOptions)
                        .then(response => response.text())
                        .catch(console.error);
                    break
                case "MESSAGE_DELETE":
                    em.emit("messageDelete", d)
            }
        })
    
        const heartbeat = (ms) => {
            setInterval(() => {
                ws.send(JSON.stringify({
                    op: 1,
                    d: seqnum
                }))
            }, ms)
        }
    }

    clientUserSet() {
        return acs.req(`https://discord.com/api/v9/users/@me`, "GET").then(async(dataget) => {
            return new Promise((resolve, reject) => {
                resolve(dataget)
            })
        })
    }

    users = UserManager

    guilds = GuildManager

    channels = ChannelManager
}
exports.Client = Client
exports.events = em;
//Compiled From TypeScript | Thanks For The Help Okeanos#0017 ❤