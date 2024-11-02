import { DataCatalogo } from "./dataCatalogo.model";
import { Pais } from "./pais.model";
import { Usuario } from "./usuario.model";

export class Autor {
    idAutor?: number;
    nombres?:string;
    apellidos?:string;
    fechaNacimiento?:string;
    telefono?:string;
    pais?:Pais;
    grado?:DataCatalogo;
    usuarioRegistro?:Usuario;
    usuarioActualiza?:Usuario;
}
