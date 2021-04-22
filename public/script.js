const socket = io.connect("http://localhost:4001");

socket.on('tabel-data', (data) => {
    console.log(data);
})

