
import { DataCatalogo } from "./dataCatalogo.model";
import { Pais } from "./pais.model";
import { Usuario } from "./usuario.model";

export class Alumno {

    idAlumno?: number;
    nombres?:string;
    apellidos?:string;
    telefono?:string;
    dni?:string;
    correo?:string;
    fechaNacimiento?:string;
    pais?:Pais;
    modalidad?:DataCatalogo;
    usuarioRegistro?:Usuario;
    usuarioActualiza?:Usuario;

   
}
