import Course from "./Course.js";


const content = document.querySelector("#content");


for(let i of ["Seção 1", "Seção 2", "Seção 3"])
{
    content.innerHTML += `
    <section>
        <h2>${i}</h2>
        <!-- Componente que agrupa os cursos do mesmo tópico -->
        <div class="component">
            <!-- Cards contendo pequenos resumos sobre o curso -->
        </div>
    </section>
    `
}


const components = document.querySelectorAll(".component");


for(let i of components)
{
    const course = new Course(
        "The Complete Cyber Security Course : Hackers Exposed!",0,
        4.5,
        44996,0,
        "Nathan House",0,
        "https://img-c.udemycdn.com/course/240x135/3291970_afb5_2.jpg",
        209.90,0,0
    )

    for(let j = 0; j < 5; j++)
    {
        i.innerHTML += course.getCard()
    } 
}