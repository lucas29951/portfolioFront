import { Persona } from "./persona";

export class Tecnologia {
    idTec: number;
    nombre_tecno: string;
    nivel: number;
    persona: Persona;

    constructor(id: number, nombre: string, nivel: number, perso: Persona){
        this.idTec = id;
        this.nombre_tecno = nombre;
        this.nivel = nivel;
        this.persona = perso;
    }
}
