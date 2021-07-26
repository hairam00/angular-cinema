export class Users {
    id: number | undefined;
    name: string | undefined;
    email: string | undefined;
    code: string | undefined;
    number: string | undefined;
    password: string | undefined;


    constructor(id:number, name:string, email: string, code: string, number: string, password:string){
        this.id = id;
        this.name = name;
        this.email = email;
        this.code = code;
        this.number = number;
        this.password = password;
    }

}
