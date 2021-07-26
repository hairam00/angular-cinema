export class Whatsapp {
    id: number | undefined;
    number: string | undefined;
    city: string | undefined;
    movies: boolean | undefined;
    events: boolean | undefined;
    blogs: boolean | undefined;


    constructor(id:number, number: string, city:string, movie: boolean, events: boolean, blogs: boolean){
        this.id = id;
        this.number = number;
        this.city = city;
        this.movies = movie;
        this.events = events;
        this.blogs = blogs;
    }
}
