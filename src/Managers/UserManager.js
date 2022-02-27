let acs = require("../Request/Request")


module.exports = {
    fetch: function(id) {
        return acs.req(`https://discord.com/api/v9/users/${id}`, "GET").then(async(dataget1) => {
            return new Promise((resolve, reject) => {
                dataget1.send = function(content) {
                    return new Promise((resolve1, reject) => {
                        return acs.req(`https://discord.com/api/v9/users/@me/channels`, "POST", {
                            recipient_id: dataget1.id
                        }).then(dataget => {
                            return acs.req(`https://discord.com/api/v9/channels/${dataget.id}/messages`, "POST", {
                                content: content
                            }).then(msg => {
                                resolve1(msg)
                            })
                        })
                    })
                }
                resolve(dataget1)
            })
        })
    }
}