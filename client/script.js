import { io } from "https://cdn.socket.io/4.4.1/socket.io.esm.min.js"

const socket = io();

const form = document.getElementById("submit")
const message = document.getElementById("message").value;

socket.emit('chat',message)
socket.on('chat', () => {
    
})



