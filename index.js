import Binance from 'binance-api-node';


const client = Binance.default({
  apiKey: 'f9ycVKSEWRuDIuGPbwfgYNxeZIQDh03WQw1JvSLmNgymaZLSdnx1LfT2knXNWTdO',
  apiSecret: 'mrzCiLQEcXEGixmIaa3dP5yV8ww9vC19rfIpzj5cuE928xoF0qoLc5uAVy6qXncN',
});


console.log(await client.futuresPing())

console.log(await client.futuresTime())

console.log(await client.futuresAccountBalance());

// const binance = new Binance({
//   APIKEY: 'f9ycVKSEWRuDIuGPbwfgYNxeZIQDh03WQw1JvSLmNgymaZLSdnx1LfT2knXNWTdO',
//   APISECRET: 'mrzCiLQEcXEGixmIaa3dP5yV8ww9vC19rfIpzj5cuE928xoF0qoLc5uAVy6qXncN',
// }).default;


// client.post('/binancepay/openapi/v2/balance',{
//   wallet: "SPOT_WALLET",
//   currency: "BUSD"
// }).then((response)=>{
//   console.log(response.data);
// })

