// const { default: fetch } = require("node-fetch");

// const fetch = require('node-fetch')
const URI = 'https://corona.coollabs.work/indonesia/provinsi'


document.getElementById('getText').addEventListener('click', getApi)
document.getElementById('getData').addEventListener('click', GetData)

async function getApi() {
    document.getElementById('data').innerHTML = 'Loading....'
    setTimeout(() => {
        fetch(URI).then(res => res.json())
            .then((data) => {
                let output = '<h2>Kasus Positif Covid-19</h2>'
                data.forEach(data => {
                    output += `
                    <div class="card" style="width: 18rem;">
                    <ul class="list-group list-group-flush">
                    <li class="list-group-item">${data.Provinsi} : <b>${data.Kasus_Posi}</b></li>
                    </ul>
                    </div>
                `
                });
                document.getElementById('data').innerHTML = output
            })
    }, 2000);
}

async function GetData() {
    document.getElementById('data').innerHTML = 'Loading....'
    setTimeout(() => {
        fetch(URI).then(res => res.json())
            .then((data) => {
                let output = '<h2>Kasus Sembuh Covid-19</h2>'
                data.forEach(data => {
                    output += `
                    <div class="card" style="width: 18rem;">
                    <ul class="list-group list-group-flush">
                    <li class="list-group-item">${data.Provinsi} : <b>${data.Kasus_Semb}</b></li>
                    </ul>
                    </div>
                `
                });
                document.getElementById('data').innerHTML = output
            })
    }, 2000);
}
