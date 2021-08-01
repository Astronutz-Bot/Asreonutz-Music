const express = require('express');

const server = express();

server.all('/', (req, res)=>{
    res.send('Join my server https://discord.gg/gU7XAxTpX5')
})

function keepAlive(){
    server.listen(3000, ()=>{console.log("Join my discord server")});
}

module.exports = keepAlive;
