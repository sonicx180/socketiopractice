const express = require("express");
const app = express()
const http = require('http');
const server = http.createServer(app)
const {Server} = require('socket.io');
const io = new Server(server);

io.on("connection", socket => {
    console.log("A user is connected")

    socket.on("chat",(data) => {
        socket.emit("chat",data)
    })
});
app.get('/client/:file',(req,res) => {
    res.sendFile(__dirname + `/client/${req.params.file}`)
})
app.get('/',(req,res) => {
    res.sendFile(__dirname + "/client/index.html")
})

server.listen(3000, (err) => {
    console.log("Listening on port 3000")
})
