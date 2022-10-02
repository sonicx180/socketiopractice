const express = require("express");
const app = express()
const http = require('http');
const server = http.createServer(app)
const {Server} = require('socket.io');
const io = new Server(server);
app.get('/client/:file',(req,res) => {
    res.sendFile(__dirname + `/client/${req.params.file}`)
})
app.get('/',(req,res) => {
    res.sendFile(__dirname + "/client/index.html")
})

server.listen(3001, (err) => {
    console.log("Listening on port 3000")
})