// importando bibliotecas importantes
import Course from "./Course.js";
import db from "./db.js";


// adicionando eventos e requisitando elementos do HTML
document.querySelector("#submit").addEventListener("click", onClick);
const inputs = document.querySelectorAll(".form");
let lists = document.querySelectorAll(".add");

lists[0].addEventListener("click", () => button("add", "overview"));
lists[1].addEventListener("click", () => button("add", "include"));

for(let i of document.querySelectorAll(".remove")) {
    i.addEventListener("click", () => button("remove", i));
}


// funções de clique
function button(what, where) {
    if(what == "remove") return where.parentElement.remove();

    else document.querySelector("#" + where).innerHTML += `
        <div>
            <br>
            <input type="text" class="${where}-item">
            <button class="remove">-</button>
        </div>
    `

    const aux = document.querySelectorAll(`#${where} > div > .remove`);
    aux.forEach(item => item.addEventListener("click", () => button("remove", item)));
}


function onClick() {
    const form = [];

    for(let i of inputs.values())
    {
        if(i.value == undefined) form.push([]);

        else if(i.value != "") form.push(i.value);
    }

    for(let i of document.querySelectorAll(".overview-item")) form[6].push(i.value);
    for(let i of document.querySelectorAll(".include-item")) form[9].push(i.value);
    
    if(form.length < 12) return;

    const course = {};

    let atributes = [
        "title",
        "subtitle",
        "stars",
        "ratings",
        "students",
        "creator",
        "overview",
        "image",
        "price",
        "include",
        "url",
        "topic"
    ]
    
    for(let i of atributes) {
        course[i] = form[atributes.indexOf(i)];
    }

    db.addCourse(new Course(course)).then(alert("Formulário Enviado!"));
}