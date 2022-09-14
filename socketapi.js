const io = require("socket.io")()
const socketapi = {
    io:io
}
io.on("connection",(socket)=>{
    console.log("new user connected")
})

module.exports = socketapi