// importando bibliotecas importantes
import Course from "./Course.js";
import db from "./db.js"


// renderixando seções
const content = document.querySelector("#content");

for(let i of [
    "Negócios",
    "Desenvolvimento",
    "Software e TI",
    "Desenvolvimento Pessoal",
    "Produtividade no Esritório",
    "Marketing",
    "Saúde",
    "Música",
    "Design"
]) {

    let i_id = i.replace(/ /gi, "-")
    content.innerHTML += `
        <section id="${i_id}">
            <h2>${i}</h2>
            <!-- Componente que agrupa os cursos do mesmo tópico -->
            <div class="component">
                <!-- Cards contendo pequenos resumos sobre o curso -->
            </div>
        </section>
    `
}


// renderizando cards
db.getCourses((id, data) => {
    const course = new Course(data);
    course.id = id;

    const element = document.querySelector(`#${data.topic.replace(/ /gi, "-")}`);
    element.lastElementChild.innerHTML += course.getCard();
})