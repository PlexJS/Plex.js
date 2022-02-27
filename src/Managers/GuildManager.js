let acs = require("../Request/Request");


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
                dataget1.unbanMember = function(obj) {
                    return new Promise((resolve, reject) => {
                        return acs.req(`https://discord.com/api/v9/guilds/${dataget1.id}/bans/${obj.id}`, "DELETE").then(dataget => {
                            resolve(dataget)
                        })
                    })
                }

                //CREATE CHANNEL
                dataget1.createChannel = function(obj) {
                    return new Promise((resolve, reject) => {
                        return acs.req(`https://discord.com/api/v9/guilds/${dataget1.id}/channels`, "POST", {
                            name: obj.name,
                            type: obj.type,
                            topic: obj.topic,
                            position: obj.position,
                            permission_overwrites: obj.permissionOverwrites,
                            bitrate: obj.bitrate,
                            user_limit: obj.userLimit,
                            parent_id: obj.parentID,
                            nsfw: obj.nsfw,
                            rate_limit_per_user: obj.rateLimitPerUser,
                            reason: obj.reason
                        }).then(dataget => {
                            resolve(dataget)
                        })
                    })
                }
                dataget1.setName = function(name) {
                    return new Promise((resolve, reject) => {
                        return acs.req(`https://discord.com/api/v9/guilds/${dataget1.id}`, "PATCH", {
                            name: name
                        }).then(dataget => {
                            resolve(dataget)
                        })
                    })
                }
                dataget1.setRegion = function(region) {
                    return new Promise((resolve, reject) => {
                        return acs.req(`https://discord.com/api/v9/guilds/${dataget1.id}`, "PATCH", {
                            region: region
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