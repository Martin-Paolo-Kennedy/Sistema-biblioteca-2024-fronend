import { DataCatalogo } from "./dataCatalogo.model";
import { Usuario } from "./usuario.model";

export class Libro {
    idLibro?: number;
    titulo?:string;
    anio?:string;
    serie?:string;
    categoriaLibro?:DataCatalogo;
    tipoLibro?:DataCatalogo;
    usuarioRegistro?:Usuario;
    usuarioActualiza?:Usuario;
}
