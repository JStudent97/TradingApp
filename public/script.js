const socket = io.connect("http://localhost:4001");

const rankingBody= document.querySelector("#table-body");

socket.on('tabel-data', (data) => {
    rankingBody.innerHTML = '';
    for(const tickerData of data) {
        const tr = document.createElement('tr');
        for(const property in tickerData) {
            const td = document.createElement('td');
            td.textContent = tickerData[property];
            tr.appendChild(td);
        }
        rankingBody.appendChild(tr);
    }
})

