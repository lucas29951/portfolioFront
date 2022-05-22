import { Persona } from "./persona";

export class Proyecto {
    idProyecto: number;
    nombre_proyecto: string;
    fecha_realizacion: string;
    descripcion: string;
    enlace_proyecto: string;
    imagen_demo: string;
    persona: Persona;

    constructor(id: number, nombre: string, fecha: string, desc: string, enlace: string, imagen: string, perso: Persona){
        this.idProyecto = id;
        this.nombre_proyecto = nombre;
        this.fecha_realizacion = fecha;
        this.descripcion = desc;
        this.enlace_proyecto = enlace;
        this.imagen_demo = imagen;
        this.persona = perso;
    }
}
