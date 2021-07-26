export class NewsLetter {
    id: number | undefined;
    email: string | undefined;
    city: string | undefined;


    constructor(id:number, email: string, city:string){
        this.id = id;
        this.email = email;
        this.city = city;
    }
}
