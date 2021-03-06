// gasPrices
require('dotenv').config();
const axios = require('axios');
const { inspect }  = require('util');

const deepLogs = (obj) => {
  return inspect(obj, {depth: 5});
}

const { ETHERSCAN_APIKEY, BLOCKNATIVE_APIKEY } = process.env;

const gasPrices = async (api, debug) => {
  
  const api_url = `${api}`;

  const config = {
    timeout: 30000,
    url: api_url,
    method: 'get',
    responseType: 'json'
  };
  const res = await axios(config);
  const data = res.data;
  if(debug) console.log('data -- ',api, deepLogs(data) );
  return data;
}

const gasPricesWithAuth = async (api, token, debug) => {
  
  const api_url = `${api}`;

  let config = {
    timeout: 30000,
    url: api_url,
    method: 'get',
    responseType: 'json',
    headers : {
      Authorization : `${token}`
    }
  };
  const res = await axios(config);
  const data = res.data;
  if(debug) console.log('data -- ',api, deepLogs(data) );
  return data;
}

// console.log('start --');
// gasPrices("https://ethgasstation.info/json/ethgasAPI.json", true);
// gasPrices("https://www.gasnow.org/api/v3/gas/price", true);
// gasPrices("https://safe-relay.gnosis.io/api/v1/gas-station/", true);
// gasPrices("https://api.txprice.com/", true);
// gasPrices("https://api.metaswap.codefi.network/gasPrices", true);
// gasPrices("https://www.etherchain.org/api/gasnow", true);
// gasPrices(`https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=${ETHERSCAN_APIKEY}`, true);
// gasPrices(`https://api.gasprice.io/v1/estimates`, true);
// gasPrices(`https://api.archerdao.io/v1/gas`, true);
gasPrices(`https://ethereum-api.xyz/gas-prices`, true);

//blocknative 
// gasPricesWithAuth(`https://api.blocknative.com/gasprices/blockprices`, BLOCKNATIVE_APIKEY, true);

//GasNow
//MyCrypto

module.exports = {
  gasPrices
}
return;
