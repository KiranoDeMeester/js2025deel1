//import van onze custom css
import '../scss/styles.scss'
//import all of bootstrap zijn js
import * as bootstrap from 'bootstrap'

const oefeningen =[];

class Oefening {
    constructor(naam, tijd){
        this.naam = naam;
        this.tijd = tijd;
    }
}

function voegOefeningToe(){
    const inputNaam = document.getElementById('ex1_ex');
    const inputTijd = document.getElementById('ex1_min');
    const list = document.getElementById('ex1_list');
    const out = document.getElementById('ex1_feedback');
    const totaleTijd = document.getElementById('ex1_total');

    const oefeningNaam = inputNaam.value.trim();
    const tijd = Number(inputTijd.value);
    let totaalMinuten = 0;

    if(!oefeningNaam || tijd <= 0){
        out.textContent = 'Vul een geldige oefeningnaam en tijd in.';
        out.className = "alert alert-warning";
        return;
    }

    const oefening = new Oefening(oefeningNaam, tijd);
    oefeningen.push(oefening);

    list.innerHTML = oefeningen.map(oefening => `<li class="list-group-item">${oefening.naam} - ${oefening.tijd} minuten</li>`).join('');
    if(totaleTijd >= 30){
        oefening.classList.add('list-group-item-danger');
    }

    out.textContent = 'Hop met de geit, beginnen met je oefening!';
    out.className = "alert alert-success";
    totaleTijd.textContent = `${totaalMinuten}`;
    inputNaam.value = '';
    inputTijd.value = '';
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('ex1_btn').addEventListener('click', voegOefeningToe);
});