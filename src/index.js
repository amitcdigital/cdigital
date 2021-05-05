const Express=require('express');
const socketio=require('socket.io');
const path=require('path');
const http=require('http');
const app=Express();
const PORT=process.env.PORT ||4000;
const server= http.createServer(app);
const io=socketio(server);
const pbDir=path.join(__dirname,"../public");
app.use(Express.static(pbDir));
const count=5;
io.on('connection',(socket)=>{
console.log("Socket connected");
socket.emit('countUpdated',count);
socket.on('inc',()=>{
io.emit('countUpdated',count);
});});

server.listen(PORT,()=>{
    console.log(`connected PORT  ${PORT}`);
    });