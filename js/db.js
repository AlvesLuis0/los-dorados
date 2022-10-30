// importando bibliotecas importantes
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import {
    getFirestore,
    collection,
    addDoc
} from 'https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js';


// configurando banco de dados para o uso
const firebaseConfig = {
    apiKey: "AIzaSyAPKN5qxHFWQJDeTKJtelZPnb7zmx4jNaE",
    authDomain: "academico-ae4cd.firebaseapp.com",
    projectId: "academico-ae4cd",
    storageBucket: "academico-ae4cd.appspot.com",
    messagingSenderId: "307486138184",
    appId: "1:307486138184:web:6ebbf4dac1aa577bac9d7d"
};


// iniciando DB
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


// criando classe gerenciadora
class DB
{
    async addCourse(course)
    {
        try
        {
            addDoc(collection(db, "course"), {...course});
            console.log("Curso adicionado com sucesso!");
        }
        catch
        {
            console.error("Error!");
        }
    }

    async deleteCourse()
    {
        //
    }

    async getCourses()
    {
        //
    }

    async getCourse()
    {
        //
    }
}


// exportando a classe
export default new DB()