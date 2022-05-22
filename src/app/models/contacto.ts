import { Persona } from "./persona";

export class Contacto {
    idContacto: number;
    nombre_info: string;
    info: string;
    persona: Persona;

    constructor(id: number, nombre: string, info: string, perso: Persona){
        this.idContacto = id;
        this.nombre_info = nombre;
        this.info = info;
        this.persona = perso;
    }
}
