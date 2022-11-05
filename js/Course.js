class Course {
    constructor(data) {
        this.title = data.title;
        this.subtitle = data.subtitle;
        this.stars = data.stars;
        this.ratings = data.ratings;
        this.students = data.students;
        this.creator = data.creator;
        this.overview = data.overview;
        this.image = data.image;
        this.price = data.price;
        this.include = data.include;
        this.url = data.url;
        this.topic = data.topic;
        this.id = null;
    }

    getCard() {
        return `
            <div class="card">
                <a href="/course.html?id=${this.id}">
                    <img src="${this.image}">
                    <h3>${this.title}</h3>
                    <p>${this.creator}</p>
                    <p>
                        <span class="stars">${this.stars} Estrelas</span> (${this.ratings})
                    </p>
                    <p class="price">R$${this.price}</p>
                </a>
            </div>
        `
    }

    getPage() {
        return `
            <div id="course">
                <div id="top">
                    <h1>${this.title}</h1>
                    <h2>${this.subtitle}</h2>
                    <p class="data">
                        <span class="stars">${this.stars} Estrelas</span>
                        <span class="ratings">${this.ratings} Classificações</span>
                        <span class="students">${this.students} Alunos</span>
                    </p>
                    <h2>Criado por ${this.creator}</h2>
                </div>

                <div>
                    <h2>O que você irá aprender</h2>
                </div>
            </div>
        `
    }
}

export default Course;