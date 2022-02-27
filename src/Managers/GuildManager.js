let acs = require("../Request/Request")


module.exports = {
    fetch: function(id) {
        return acs.req(`https://discord.com/api/v9/guilds/${id}`, "GET").then(async(dataget1) => {
            return new Promise((resolve, reject) => {
                dataget1.banMember = function(obj) {
                    return new Promise((resolve, reject) => {
                    return acs.req(`https://discord.com/api/v9/guilds/${dataget1.id}/bans/${obj.id}`, "PUT", {
                        delete_message_days: obj.deleteMessageDays,
                        reason: obj.reason
                    }).then(dataget => {
                        resolve(dataget)
                    })
                })
                }
                resolve(dataget1)
            })
        })
    }
}