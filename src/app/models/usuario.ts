import { Persona } from "./persona";

export class Usuario {
    idUsuario: number;
    nombre: string;
    apellido: string;
    email: string;
    username: string;
    password: string;

    constructor(id: number, nombre: string, apellido: string, email: string, user: string, pass: string){
        this.idUsuario = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.username = user;
        this.password = pass;
    }
}
