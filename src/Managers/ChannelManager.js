let acs = require("../Request/Request")


module.exports = {
    fetch: function(id) {
        return acs.req(`https://discord.com/api/v9/channels/${id}`, "GET").then(async(dataget1) => {
            return new Promise((resolve, reject) => {


                //SEND MESSAGE TO CHANNEL
                dataget1.send = function(content) {
                    return new Promise((resolve, reject) => {
                    return acs.req(`https://discord.com/api/v9/channels/${id}/messages`, "POST", {
                        content: content
                    }).then(dataget => {
                        resolve(dataget)
                    })
                })
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