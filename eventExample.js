const EventEmitter = require("events");

const emitter = new EventEmitter();

//Register a listener
// emitter.on("RaisedEvent",function(eventArg){
//     console.log("Listener is called", eventArg);
// });
emitter.on("RaisedEvent",(eventArg) => {
    console.log("Listener is called", eventArg);
});
//Raise an event
emitter.emit("RaisedEvent", {id: 1, url:'http://'});

//--------------------------------------------------
const Logger = require("./loggerEvent");
const logger = new Logger();
logger.on("RaisedEvent", (arg) => {
    console.log("Logger Event:", arg );
})

logger.log("Hello Logger Event with EventEmit");