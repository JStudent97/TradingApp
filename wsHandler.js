var socket = require('socket.io');

class WsHanlder {

    io;

    constructor(serverPort, wsPort) {
        this.io = require("socket.io")(wsPort, {
            cors: {
                origin: `http://localhost:${serverPort}`,
                credentials: true
              }
        });
    }

    handleWsConnection() {
        this.io.on("connection", socket => {
            console.log('Incoming connection...');
        
            socket.emit('tabel-data', {foo: 'bar'});
        });
    }
}

module.exports = WsHanlder;