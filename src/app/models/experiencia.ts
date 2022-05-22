import { Persona } from "./persona";

export class Experiencia {
    idExp: number;
    nombre_puesto: string;
    lugar: string;
    logo_empresa: string;
    fecha_inicio: string;
    fecha_fin: string;
    descripcion: string;
    persona: Persona;

    constructor(id: number, puesto: string, lugar: string, logo: string, inicio: string, fin: string, desc: string, perso: Persona){
        this.idExp = id;
        this.nombre_puesto = puesto;
        this.lugar = lugar;
        this.logo_empresa = logo;
        this.fecha_inicio = inicio;
        this.fecha_fin = fin;
        this.descripcion = desc;
        this.persona = perso;
    }
}
