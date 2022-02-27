"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});




exports.PJSerror = void 0;
class PJSerror {
    constructor(errorString) {
    //console.error("noluo he")
    throw new TypeError(`[PlexJS] ${errorString}`)
    }

}
exports.PJSerror = PJSerror

//Compiled From TypeScript | Thanks For The Help Okeanos#0017 ❤
