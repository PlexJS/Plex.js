const Client = require("../Client/Client")
const eventsreq = require("../Client/Client")

exports.Embed = void 0;
class Embed {
    constructor() {
     
    }
    auhtor(authorget) {
        this.auhtor = authorget
        return this
    }
    title(titleget) {
        this.title = titleget
        return this
    }
    description(descriptionget) {
        this.description = descriptionget
        return this
    }
    color(colorcode) {
        this.color = colorcode
        return this
    }
}


exports.Client = Client.Client
exports.events = eventsreq.events
exports.Embed = Embed