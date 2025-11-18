//import van onze custom css
import '../scss/styles.scss'
//import all of bootstrap zijn js
import * as bootstrap from 'bootstrap'

class Person{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getLabel(){
        return `${this.name} (${this.age} jaar)`
    }
}

class Employee extends Person{
    constructor(name, age, department){
        super(name, age);
        this.department = department;
    }

    getLabel(){
        return `${super.getLabel()} Employee in ${this.department}`
    }
}

class Manager extends Employee{
    constructor(name, age, rol, teamsize){
        super(name, age, rol);
        this.teamsize = teamsize;
    }

    getLabel(){
        return `${this.name} (${this.age}), Manager van teamgrote ${this.teamsize} in ${this.department}`
    }
}

function addPerson(){
    const inputRole = document.getElementById('ex2_type');
    const inputName = document.getElementById('ex2_name');
    const inputAge = document.getElementById('ex2_age');
    const inputDepartment = document.getElementById('ex2_dep');
    const inputTeamsize = document.getElementById('ex2_team');
    const list = document.getElementById('ex2_list');
    const out = document.getElementById('ex2_feedback');

    const name = inputName.value.trim();
    const age = Number(inputAge.value);
    const department = inputDepartment.value.trim();
    const teamsize = Number(inputTeamsize.value);
    const role = inputRole.value;

    if(!name || age <= 0){
        out.textContent = 'Vul een geldig naam en leeftijd in.';
        out.className = "alert alert-warning";
        return;
    }


    const person = role === 'manager' ? new Manager(name, age, department, teamsize) : new Employee(name, age, department);

    console.log(person);

    list.innerHTML += `<li class="list-group-item">
    <div class="d-flex justify-content-between"><p>${person.getLabel()}</p>
    <button class="btn btn-sm btn-primary rounded-5 m-0 p-0">person.role</button>
    </div></li>`;
    out.textContent = 'Person toegevoegd!';
    out.className = "alert alert-success";
    inputName.value = '';
    inputAge.value = '';
    inputTeamsize.value = '';
    inputDepartment.value = '';
    inputRole.value = 'employee';
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('ex2_btn').addEventListener('click', addPerson);
});