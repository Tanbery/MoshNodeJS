const EventEmitter = require("events");

class Logger extends EventEmitter {
    log(message) {

        console.log("Logger:" + message);
        //Raise an event
        this.emit("RaisedEvent", { id: 1, url: 'http://' });
    }

}
module.exports = Logger;




