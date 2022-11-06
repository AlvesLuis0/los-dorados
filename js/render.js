// Importando o comunicador com o DB
import db from "./db.js"
import Course from "./Course.js"


// Conseguindo o parâmetro "id" da URL
const query = window.location.search;
const params = new URLSearchParams(query);
const id = params.get("id");


const content = document.querySelector("#content");

db.getCourse(id, data => {
	const course = new Course(data);
	content.innerHTML += course.getPage();

}, () => {
	// se o curso não for encontrado...
	content.innerHTML += `
		<div style="text-align: center">
			<h1>404... Página não encontrada!</h1>
			<img src="assets/404.png">
		</div>
	`
})