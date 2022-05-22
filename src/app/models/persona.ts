export class Persona {
    idPersona: number;
    nombre: string;
    apellido: string;
    profesion: string;
    resumen: string;
    foto: string;

    constructor(id: number, nombre: string, apellido: string, profesion: string, resumen: string, foto: string){
        this.idPersona = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.profesion = profesion;
        this.resumen = resumen;
        this.foto = foto;
    }
}
