const Client = require("../Client/Client")
const eventsreq = require("../Client/Client")

exports.Embed = void 0;
class Embed {
    constructor() {
     
    }
    setAuhtor(authorget) {
        this.auhtor = authorget
        return this
    }
    setTitle(titleget) {
        this.title = titleget
        return this
    }
    setDescription(descriptionget) {
        this.description = descriptionget
        return this
    }
    setColor(colorcode) {
        this.color = colorcode
        return this
    }
}


exports.Client = Client.Client
exports.events = eventsreq.events
exports.Embed = Embed