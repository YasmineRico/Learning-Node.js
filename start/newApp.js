// *---------Creating Modules with Event Emitter-------*

//Requiring events module
const events = require("events");

//set emitter equal to new event emitter
let emitter = new events.EventEmitter();

//custom event with a callbak function to log whoever the message and the user is
emitter.on("customEvent", (message, user)=>{
    console.log(`${user}: ${message}`);
});

//emit the event
emitter.emit("customEvent", "Hello World", "Computer" );
emitter.emit("customEvent", "Thats pretty cool", "Eve");

 // This is the custom event for user terminal. if terminal user write "exit" the programme will pass the custom emitter
process.stdin.on("data", (data)=>{
    const input = data.toString().trim();
    if(input === "exit"){
        emitter.emit("customEvent", "Thank you for visiting!", "process");
        process.exit();
    }
    emitter.emit(
        "customEvent", 
        data.toString().trim(), 
        "terminal" 
        );
});