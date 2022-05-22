let baseUrl = "https://api.coinranking.com/v2/coins";
let proxyUrl = "http://cors-anywhere.herokuapp.com/";        //how to use cors anywhere to reverse proxy
let apiKey = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";

var apiUrl = `${proxyUrl}${baseUrl}`;
console.log(`${apiUrl}`);

const coinDate = async ( proxyUrl,baseUrl,apiKey) => {

    try {
        const resCoin = await fetch(`${proxyUrl}${baseUrl}`,{
            method: "GET",
            headers:{
                'Content-Type': 'application/json',
                'x-access-token': `${apiKey}`,
                'Acces-Control-Allow-Origin': '*',
            }
        });
        const dataJson = await resCoin.json();
        let dataCoin = dataJson.data.coins;
        console.log(dataCoin.name);
        if(dataCoin.length > 0 ){
            var cryptoCoins = " ";
        }

        dataCoin.forEach( coin => {
            cryptoCoins += "<tr>";
            cryptoCoins += `<td> ${coin.uuid} </td>`;
            cryptoCoins += `<td> ${coin.btcPrice} </td>`;
            cryptoCoins += `<td> ${coin.rank} </td>`;
            cryptoCoins += `<td> ${coin.tier} </td>`;
            cryptoCoins += `<td> ${coin.name} </td>`;
            cryptoCoins += `<td> ${coin.price} </td>`;
            cryptoCoins += `<td> ${coin.symbol} </td>`; "<tr>";
        });

        document.getElementById("data").innerHTML = cryptoCoins;

    } catch(error){
        console.log(error);
        console.log(`if error = 403 then :
        - access to Cors ${apiUrl} and Request temporary access to the demo server!
        `);
    }
    
}
coinDate(proxyUrl,baseUrl,apiKey); 
