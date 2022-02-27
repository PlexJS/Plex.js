let acs = require("../Request/Request")


module.exports = {
    fetch: function(id) {
        return acs.req(`https://discord.com/api/v9/channels/${id}`, "GET").then(async(dataget1) => {
            return new Promise((resolve, reject) => {


                //SEND MESSAGE TO CHANNEL
                dataget1.send = function(content) {

                    if(typeof content === "object") {
                        String.prototype.replaceAlltest = function (search, replacement) {
                            var target = this;
                            return target.split(search).join(replacement);
                        };
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
                                ]
                          
                            }).then(dataget => {
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
                                dataget.delete = function() {
                                    return new Promise((resolve, reject) => {
                                        return acs.req(`https://discord.com/api/v9/channels/${id}/messages/${messageID}`, "DELETE").then(dataget2 => {
                                            resolve(dataget2)
                                        })
                                    })
                                }
                                resolve1(dataget)
                            })
                        })
                    }
                }
                resolve(dataget1)
            })
        })
    }
}