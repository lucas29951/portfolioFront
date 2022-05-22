import { Persona } from "./persona";

export class Estudio {
    idEstudio: number;
    nombre_institucion: string;
    logo: string;
    titulo: string;
    fecha_entrada: string;
    fecha_salida: string;
    persona: Persona;

    constructor(id: number, nombre: string, logo: string, titulo: string, entrada: string, salida: string, perso: Persona){
        this.idEstudio = id;
        this.nombre_institucion = nombre;
        this.logo = logo;
        this.titulo = titulo;
        this.fecha_entrada = entrada;
        this.fecha_salida = salida;
        this.persona = perso;
    }
}
