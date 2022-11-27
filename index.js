import Binance from 'node-binance-api';

const binance = new Binance().options({
  APIKEY: 'f9ycVKSEWRuDIuGPbwfgYNxeZIQDh03WQw1JvSLmNgymaZLSdnx1LfT2knXNWTdO',
  APISECRET: 'mrzCiLQEcXEGixmIaa3dP5yV8ww9vC19rfIpzj5cuE928xoF0qoLc5uAVy6qXncN'
});

//Get balance of future wallet
const futurearray = await binance.futuresBalance();
let futurebalance = 0;
let ticker = await binance.prices();

futurearray.map((futurebal) => {
  let curren = String(futurebal.asset);
  if (curren === "DOT") {
    futurebalance = futurebalance + (Number(ticker.DOTUSDT) * Number(futurebal.balance));
  }
  else if (curren === "BTC") {
    futurebalance = futurebalance + (Number(ticker.BTCUSDT) * Number(futurebal.balance));
  }
  else if (curren === "SOL") {
    futurebalance = futurebalance + (Number(ticker.SOLUSDT) * Number(futurebal.balance));
  }
  else if (curren === "BNB") {
    futurebalance = futurebalance + (Number(ticker.BNBUSDT) * Number(futurebal.balance));
  }
  else if (curren === "ETH") {
    futurebalance = futurebalance + (Number(ticker.ETHUSDT) * Number(futurebal.balance));
  }
  else if (curren === "ADA") {
    futurebalance = futurebalance + (Number(ticker.ADAUSDT) * Number(futurebal.balance));
  }
  else if (curren === "XRP") {
    futurebalance = futurebalance + (Number(ticker.XRPUSDT) * Number(futurebal.balance));
  }
  else {
    futurebalance = futurebalance + Number(futurebal.balance);
  }
})

console.log(futurebalance);

//Get balance of spot wallet
const spotBalance = await binance.balance()

let result = Object.keys(spotBalance).map((key) => [
  String(key),
  spotBalance[key],
])

let prices = await binance.prices()
let prices_array = Object.keys(prices).map((key) => [
  String(key),
  prices[key],
])


let coinAmount = 0;

for (let k = 0; k < result.length; k++) {
  if (result[k][0] === 'USDT') {
    console.log(result[k][0])
    const price = Number(result[k][1].available) + Number(result[k][1].onOrder)
    coinAmount = coinAmount + price;
  }
  for (let j = 0; j < prices_array.length; j++) {

    if (prices_array[j][0] === result[k][0] + 'USDT') {
      const price = (Number(result[k][1].available) * Number(prices_array[j][1])) + (Number(result[k][1].onOrder) * Number(prices_array[j][1]));
      coinAmount = coinAmount + price;
    }
  }
}

console.log(coinAmount + futurebalance);
