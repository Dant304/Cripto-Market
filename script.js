//const fetch = require("node-fetch"); // run npm i node-fetch --save before import the module 'node-fetch' for use fetch in the project

const apiKey = {
    key: 'bde11e0a-3df6-4bc1-8f0a-d68fba02dcf9'
}

fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' + apiKey.key)
    .then((response) => {
        if(!response.ok) throw new Error('Erro de requisição, status ' + response.status)
        return response.json()
    })
    .then((api) => {
        
        let text = ""

        for(let i = 0; i < 10; i++){

            text = text + `

                <div class="media d-flex flex-column bd-highlight mb-3">
                    <img src="./assets/img/bitcoin.png"  alt="coin" width="100" height="60">
                    <div class="media-body">
                        <h5 class="mt-2">${api.data[i].name}</h5>
                        <p>${api.data[i].symbol}</p>
                        <p>Primeira data historica: ${api.data[i].first_historical_data}</p>
                    </div
                </div>
            `;

            document.getElementById("coins").innerHTML = text;
        }
    })
    .catch((err) => console.log(err))