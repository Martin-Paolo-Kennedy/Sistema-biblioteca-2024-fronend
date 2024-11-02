import { Usuario } from "./usuario.model";
import { Alumno } from "./alumno.model";

export class Tesis {
 
    idTesis?:number;
    titulo?:string;
    tema?:string;
    fechaCreacion?:string;
    estado?:number;
    alumno?:Alumno;
    usuarioRegistro?:Usuario;
    usuarioActualiza?:Usuario;
}