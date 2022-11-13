import http from 'http'
const server = http.createServer();

import { Server } from 'socket.io';
const io = new Server(server);


io.on('connection', (sock) => {
    sock.send('hello sir')
})
io.on('message', (msg) => {
    console.log(msg)
})

const port = process.env.PORT || 666;
server.listen(port, () => {
    console.log('listening on *:666');
  });