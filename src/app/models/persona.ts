import { Contacto } from "./contacto";
import { Estudio } from "./estudio";
import { Experiencia } from "./experiencia";
import { Proyecto } from "./proyecto";
import { Tecnologia } from "./tecnologia";

export class Persona {
    idPersona: number;
    nombre: string;
    apellido: string;
    profesion: string;
    resumen: string;
    foto: string;
    contactos: Contacto[];
    estudios: Estudio[];
    experiencias: Experiencia[];
    proyectos: Proyecto[];
    tecnologias: Tecnologia[];

    constructor(id: number, nombre: string, apellido: string, profesion: string, resumen: string, foto: string,
        cont: Contacto[], est: Estudio[], exp: Experiencia[], pro: Proyecto[], tec: Tecnologia[]){
        this.idPersona = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.profesion = profesion;
        this.resumen = resumen;
        this.foto = foto;
        this.contactos = cont;
        this.estudios = est;
        this.experiencias = exp;
        this.proyectos = pro;
        this.tecnologias = tec;
    }
}
