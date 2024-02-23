/**
 * função que recebe ano e mes para retornar o ultimo dia;
 */

function daysInMonth(year, month) {
    return new Date(year, month, 0).getDate();


}
// setar mes corrente
// setar dias do mês


function createMonthAndYear (currentMonth, currentYear) {

    let mes = document.getElementById('mes');
    mes.innerText = months[currentMonth-1];

    let ano = document.getElementById('ano');
    ano.innerText = currentYear;

    //let dias = document.getElementById('dia');

    let dia = document.createElement('td');
    let dias = document.createTextNode(lastDaysdays);

    let linha = document.createElement('tr');
    linha.className = 'linhas';
    let corpo = document.createElement('tfoot');
    corpo.className = 'diasMes';


    linha.appendChild(dia);
    console.log(dias);

}



//obtem dados da data

let time = new Date();

//dia, mês , ano

let currentDay = time.getDate();
let currentMonth = time.getMonth() + 1;
console.log(currentMonth);
let currentYear = time.getFullYear();

// arryas dias e meses
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let daysofMonth = [];
let lastDays = daysInMonth(currentYear,currentMonth);

criaMes(currentMonth, currentYear);

for (let i = 0; i < lastDays; i++) {
    daysofMonth[i] = i + 1;

}




//console.log(months);
//console.log(daysofMonth);


/*
função para pegar o ultimo dia do mês
 */
