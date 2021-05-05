const socket=io();

socket.on('countUpdated',(count)=>{
    console.log("Updated data");
    console.log(count);
    socket.emit('inc');
});