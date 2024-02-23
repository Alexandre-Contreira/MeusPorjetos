const request = require('request');
const hostname = "https://servicodados.ibge.gov.br/api/v1"
const path = "/localidades/paises"
request(`${hostname}${path}`, (err, res, body) => {
    // console.log(typeof(body));


    //console.log(err);
    //console.log(body);
    if (res.statusCode === 200) {
        let bodyObj = JSON.parse(body);
        let arrayPaises = [];
        for (x = 0; x < bodyObj.length; x++) {
            let nomePais = bodyObj[x].nome;
            //arrayPaises.push(nomePais);
            arrayPaises[x] = nomePais;
        }
        console.log(arrayPaises);
        console.log(res.statusCode);
        console.log(res.statusMessage);
        // if(body == err){
        //     console.log("nao encontrado");
    } else {
        console.log("dados não encontrados")
        console.log(res.statusCode);
        console.log(res.statusMessage);
    }
});