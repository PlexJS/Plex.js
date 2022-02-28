exports.Embed = void 0;
const color = require("../Json/colors.json");
class Embed {
    constructor() {
     
    }
    setAuthor(authorget) {
        this.author = authorget
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
        let getColor = color.colorcode;
        this.color = getColor
       
        return this
    }
    setThumbnail(thumb) {
        this.thumbnail = thumb
        
        return this
    }
    setFooter(footerr) {
        this.footer = footerr
        return this
    }
}

exports.Embed = Embed
