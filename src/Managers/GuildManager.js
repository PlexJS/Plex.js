let acs = require("../Request/Request");


module.exports = {
    fetch: function(id) {
        return acs.req(`https://discord.com/api/v9/guilds/${id}`, "GET").then(async(dataget1) => {
            return new Promise((resolve, reject) => {

                //BAN MEMBER
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
                dataget1.leave = function() {
                    return new Promise((resolve, reject) => {
                        return acs.req(`https://discord.com/api/v9/users/@me/guilds/${dataget1.id}`, "DELETE").then(dataget => {
                            resolve(dataget)
                        })
                    })
                }
                dataget1.setIcon = function(icon) {
                    return new Promise((resolve, reject) => {
                        return acs.req(`https://discord.com/api/v9/guilds/${dataget1.id}`, "PATCH", {
                            icon: icon
                        }).then(dataget => {
                            resolve(dataget)
                        })
                    })
                }
                dataget1.setOwner = function(obj) {
                    return new Promise((resolve, reject) => {
                        return acs.req(`https://discord.com/api/v9/guilds/${dataget1.id}/members/${obj.id}`, "PATCH", {
                            access_token: obj.accessToken
                        }).then(dataget => {
                            resolve(dataget)
                        })
                    })
                }
                dataget1.setAFKChannel = function(obj) {
                    return new Promise((resolve, reject) => {
                        return acs.req(`https://discord.com/api/v9/guilds/${dataget1.id}`, "PATCH", {
                            afk_channel_id: obj.id
                        }).then(dataget => {
                            resolve(dataget)
                        })
                    })
                }
                dataget1.setAFKTimeout = function(obj) {
                    return new Promise((resolve, reject) => {
                        return acs.req(`https://discord.com/api/v9/guilds/${dataget1.id}`, "PATCH", {
                            afk_timeout: obj.timeout
                        }).then(dataget => {
                            resolve(dataget)
                        })
                    })
                }
                dataget1.setVerificationLevel = function(obj) {
                    return new Promise((resolve, reject) => {
                        return acs.req(`https://discord.com/api/v9/guilds/${dataget1.id}`, "PATCH", {
                            verification_level: obj.level
                        }).then(dataget => {
                            resolve(dataget)
                        })
                    })
                }
                dataget1.scheduleEvent = function(obj) {
                    return new Promise((resolve, reject) => {
                        return acs.req(`https://discord.com/api/v9/guilds/${dataget1.id}/scheduled-events`, "POST", {
                            ...obj
                        }).then(dataget => {
                            resolve(dataget)
                        })
                    })
                }
                dataget1.deleteScheduledEvent = function(id) {
                    return new Promise((resolve, reject) => {
                        return acs.req(`https://discord.com/api/v9/guilds/${dataget1.id}/scheduled-events/${id}`, "DELETE").then(dataget => {
                            resolve(dataget)
                        })
                    })
                }
                dataget1.getScheduledEvents = function() {
                    return new Promise((resolve, reject) => {
                        return acs.req(`https://discord.com/api/v9/guilds/${dataget1.id}/scheduled-events`, "GET").then(dataget => {
                            resolve(dataget)
                        })
                    })
                }
                dataget1.getScheduledEvent = function(id) {
                    return new Promise((resolve, reject) => {
                        return acs.req(`https://discord.com/api/v9/guilds/${dataget1.id}/scheduled-events/${id}`, "GET").then(dataget => {
                            resolve(dataget)
                        })
                    })
                }

                //GUILD CHANNEL SYSTEM
                dataget1.channels = {
                    create: function(obj) {
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
                }

                //SET GUILD NAME 
                dataget1.setName = function(name) {
                    return new Promise((resolve, reject) => {
                        return acs.req(`https://discord.com/api/v9/guilds/${dataget1.id}`, "PATCH", {
                            name: name
                        }).then(dataget => {
                            resolve(dataget)
                        })
                    })
                }
                //SET GUILD REGION
                dataget1.setRegion = function(region) {
                    return new Promise((resolve, reject) => {
                        return acs.req(`https://discord.com/api/v9/guilds/${dataget1.id}`, "PATCH", {
                            region: region
                        }).then(dataget => {
                            resolve(dataget)
                        })
                    })
                }

                //LEAVE FROM GUILD
                dataget1.leave = function() {
                    return new Promise((resolve, reject) => {
                        return acs.req(`https://discord.com/api/v9/users/@me/guilds/${dataget1.id}`, "DELETE").then(dataget => {
                            resolve(dataget)
                        })
                    })
                }
                //SET GUILD ICON
                dataget1.setIcon = function(icon) {
                    return new Promise((resolve, reject) => {
                        return acs.req(`https://discord.com/api/v9/guilds/${dataget1.id}`, "PATCH", {
                            icon: icon
                        }).then(dataget => {
                            resolve(dataget)
                        })
                    })
                }

                dataget1.setAFKChannel = function(obj) {
                    return new Promise((resolve, reject) => {
                        return acs.req(`https://discord.com/api/v9/guilds/${dataget1.id}`, "PATCH", {
                            afk_channel_id: obj.id
                        }).then(dataget => {
                            resolve(dataget)
                        })
                    })
                }
                dataget1.setAFKTimeout = function(obj) {
                    return new Promise((resolve, reject) => {
                        return acs.req(`https://discord.com/api/v9/guilds/${dataget1.id}`, "PATCH", {
                            afk_timeout: obj.timeout
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
