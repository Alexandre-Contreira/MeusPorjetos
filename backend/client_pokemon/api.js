//import Request from 'request'; usado em modulo aplicação mais complexa
// require usado modo commom
const request = require('request');
//const http = require('http');
const hostname ="https://pokeapi.co/api/v2";
const path= "/pokemon/1/";
const url = `${hostname}${path}`;

const x = (err, res, body) => {
    console.log(err);
    console.log(res.statusCode, res.headers);
}

request(url,x );

