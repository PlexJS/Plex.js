let acs = require("../Request/Request")

String.prototype.replaceAlltest = function (search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};

module.exports = {
    fetch: function(id) {
        return acs.req(`https://discord.com/api/v9/channels/${id}`, "GET").then(async(dataget1) => {
            return new Promise((resolve, reject) => {


                //SEND MESSAGE TO CHANNEL
                dataget1.send = function(content, attachments) {

                    if(typeof content === "object") {
                        let rgb;
                        if (content.color !== null || content.color !== undefined)  {
                            const split = content.color.replaceAlltest(" ", "").split(",")
                            rgb = ((split[0] & 0x0ff) << 16) | ((split[1] & 0x0ff) << 8) | (split[2] & 0x0ff);
                        }

                        return new Promise((resolve, reject) => {
                            return acs.req(`https://discord.com/api/v9/channels/${id}/messages`, "POST", {
                                content: content.content,
                                embeds: [
                                    {
                                        author: content.author,
                                        title: content.title,
                                        description: content.description,
                                        color: rgb
                                    }
                                ],
                                attachments: attachments
                          
                            }).then(dataget => {
                                //EDIT MESSAGE
                                dataget.edit = function(content2) {

                                    if(typeof content2 === "object") {
                                        let rgb;
                                        if (content2.color !== null || content2.color !== undefined)  {
                                            if(Object.keys(content2).includes("color")) {
                                                const split = content2.color.replaceAlltest(" ", "").split(",")
                                                rgb = ((split[0] & 0x0ff) << 16) | ((split[1] & 0x0ff) << 8) | (split[2] & 0x0ff);
                                            }

                                        }

                                        return new Promise((resolve, reject) => {
                                            return acs.req(`https://discord.com/api/v9/channels/${id}/messages/${dataget.id}`, "PATCH", {
                                                content: content.content,
                                                embeds: [
                                                    {
                                                        author: content2.author,
                                                        title: content2.title,
                                                        description: content2.description,
                                                        color: rgb
                                                    }
                                                ]
                                            }).then(msg => {
                                                resolve(msg)
                                            })
                                        })

                                    } else {
                                        return new Promise((resolve, reject) => {
                                            return acs.req(`https://discord.com/api/v9/channels/${id}/messages/${dataget.id}`, "PATCH", {
                                                content: content2
                                            }).then(dataget => {
                                                resolve(dataget)
                                            })
                                        })
                                    }



                                }
                                resolve(dataget)
                            })
                        })

                    } else {
                        return new Promise((resolve, reject) => {
                            return acs.req(`https://discord.com/api/v9/channels/${id}/messages`, "POST", {
                                content: content
                            }).then(dataget => {
                                resolve(dataget)
                            })
                        })
                    }
                }



                //DELETE CHANNEL

                dataget1.delete = function() {
                    return new Promise((resolve, reject) => {
                        return acs.req(`https://discord.com/api/v9/channels/${id}`, "DELETE").then(dataget => {
                            resolve(dataget)
                        })
                    })
                }

                //FETCH MESSAGES
                dataget1.messages = {
                    fetch: function(messageID) {

                        return new Promise((resolve1, reject) => {
                            return acs.req(`https://discord.com/api/v9/channels/${id}/messages/${messageID}`, "GET").then(dataget => {

                            //DELETE MESSAGE
                                dataget.delete = function() {
                                    return new Promise((resolve, reject) => {
                                        return acs.req(`https://discord.com/api/v9/channels/${id}/messages/${messageID}`, "DELETE").then(dataget2 => {
                                            resolve(dataget2)
                                        })
                                    })
                                }

                                
                                dataget.edit = function(content) {
                                    return new Promise((resolve, reject) => {
                                        return acs.req(`https://discord.com/api/v9/channels/${id}/messages/${messageID}`, "PATCH", {
                                            content: content
                                        }).then(dataget2 => {
                                            resolve(dataget2)
                                        })
                                    })
                                }
                                //PIN MESSAGE
                                dataget.pin = function() {
                                    return new Promise((resolve, reject) => {
                                        return acs.req(`https://discord.com/api/v9/channels/${id}/pins/${messageID}`, "PUT").then(dataget2 => {
                                            resolve(dataget2)
                                        })
                                    })
                                }

                                //UNPIN MESSAGE
                                dataget.unpin = function() {
                                    return new Promise((resolve, reject) => {
                                        return acs.req(`https://discord.com/api/v9/channels/${id}/pins/${messageID}`, "DELETE").then(dataget2 => {
                                            resolve(dataget2)
                                        })
                                    })
                                }
                                dataget.unreact = function(emoji) {
                                    return new Promise((resolve, reject) => {
                                        return acs.req(`https://discord.com/api/v9/channels/${id}/messages/${messageID}/reactions/${emoji}/@me`, "DELETE").then(dataget2 => {
                                            resolve(dataget2)
                                        })
                                    })
                                }
                                dataget.reactions = {
                                    fetch: function(emoji) {
                                        return new Promise((resolve, reject) => {
                                            return acs.req(`https://discord.com/api/v9/channels/${id}/messages/${messageID}/reactions/${emoji}`, "GET").then(dataget2 => {
                                                resolve(dataget2)
                                            })
                                        })
                                    }
                                }
                                dataget.removeAttachments = function() {
                                    return new Promise((resolve, reject) => {
                                        return acs.req(`https://discord.com/api/v9/channels/${id}/messages/${messageID}/attachments`, "DELETE").then(dataget2 => {
                                            resolve(dataget2)
                                        })
                                    })
                                }

                                resolve1(dataget)
                            })
                        })
                    }
                }

                //EDIT CHANNEL
                dataget1.editChannel = function(obj) {
                    return new Promise((resolve, reject) => {
                        return acs.req(`https://discord.com/api/v9/channels/${obj.id}`, "PATCH", {
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
                resolve(dataget1)
            })
        })
    }
}
