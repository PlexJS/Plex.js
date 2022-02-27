const fetch = require("node-fetch")
let token = null

module.exports = {
    setToken: function(tk) {
        token = tk
    },
    req: async function(URLget, method, bodyget) {
        return new Promise((resolve, reject) => {
            if (bodyget) {
                let URL = URLget
                let requestOptions = {
                    method: method,
                    headers: {
                        "Authorization": `Bot ${token}`,
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(bodyget)
                };
                fetch(URL, requestOptions)
                    .then(async(response) => {
                        if(method === "DELETE") {
                            resolve("OK")
                        } else if(method === "PUT"){
                            resolve("OK")
                        } else {
                            await response.json().then(data => {
                                resolve(data)
                            })
                        }
                    })
                    .catch(console.error);
            } else {
                let URL = URLget
                let requestOptions = {
                    method: method,
                    headers: {
                        "Authorization": `Bot ${token}`,
                        "Content-Type": "application/json"
                    }
                };
                fetch(URL, requestOptions)
                    .then(async (response) => {
                        if(method === "DELETE") {
                            resolve("OK")
                        } else if(method === "PUT"){
                            resolve("OK")
                        } else {
                            await response.json().then(data => {
                                resolve(data)
                            })
                        }
                    })
                    .catch(console.error);
            }
        })
    }
}