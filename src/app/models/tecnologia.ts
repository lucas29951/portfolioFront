import { Persona } from "./persona";

export class Tecnologia {
    idTec: number;
    nombre_tecno: string;
    persona: Persona;

    constructor(id: number, nombre: string, perso: Persona){
        this.idTec = id;
        this.nombre_tecno = nombre;
        this.persona = perso;
    }
}
