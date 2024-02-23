function daysInMonth(year, month) {
    return new Date(year, month, 0).getDate();

}

//nunca pegue posiçoes de um array
// contruir um if limintando o mes
// ver que dia da semana o  mes começa
let time = new Date();
let day = time.getDate();
let dayOfWeek = time.getDay();
let daysOfMonth = [];
let month = time.getMonth();
let year = time.getFullYear();

/**
 * ultimo dia do mês
 * @type {number}
 *
 */
let lastDay = daysInMonth(year, month + 1);

let tbody = document.querySelector("tbody");

/**
 * laço que cria os dias do mês
 */
for (let i = 0; i < lastDay; i++) {
    daysOfMonth [i] = i + 1;

}


let x = -1;
/**
 * Criação
 * Semanas
 * Dias
 */
for (let i = 1; i <= 5; i++) {
    let week = document.createElement('tr');
    week.className = "week";

    for (let j = 0; j < 7; j++) {
        x++
        if (x < lastDay) {
            let days = document.createElement('td');
            days.textContent = daysOfMonth[x];

            let date = daysOfMonth[x];

            if (day === date) {
                days.style.fontWeight='bold';
                days.style.background ='lightBlue';

            }
            
            //if (diadasemana === diadehj){
            // CONTINUE
            //setar a posição do hj com o dia da semana
            //}
            week.appendChild(days);




        }
    }
    tbody.appendChild(week);

}


let months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
let currentMonth = document.getElementById('month');
currentMonth.innerText = months[month];

let currentYear = document.getElementById('year');
currentYear.innerText = year;


let dayNames = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
let currentDay = document.querySelectorAll('tr.daysOfweek th');
for (let i = 0; i < currentDay.length; i++) {
    currentDay[i].innerText = dayNames[i];
}

