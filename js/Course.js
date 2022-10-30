class Course
{
    constructor(title, subtitle, stars, ratings, students, creator, overview, image, price, include, url, topic)
    {
        this.title = title;
        this.subtitle = subtitle;
        this.stars = stars;
        this.ratings = ratings;
        this.students = students;
        this.creator = creator;
        this.overview = overview;
        this.image = image;
        this.price = price;
        this.include = include;
        this.url = url;
        this.topic = topic;
    }

    getCard()
    {
        return `
        <div class="card">
            <a href="/course.html?${this.id}">
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

    getPage()
    {
        return `
        
        `
    }
}

export default Course;