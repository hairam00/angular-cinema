export class Message {
    id: number | undefined;
    firstname: string | undefined;
    lastname: string | undefined;
    email: string | undefined;
    code: string | undefined;
    number: string | undefined;
    subject: string | undefined;
    message: string | undefined;

    constructor(id: number, firstname: string, email: string, lastname:string, code: string, number: string, subject: string, message: string){
        this.id = id;
        this.email = email;
        this.firstname = firstname;
        this.lastname = lastname;
        this.code = code;
        this.number = number;
        this.subject = subject;
        this.message = message;
    }
}
