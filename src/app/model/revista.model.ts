import { DataCatalogo } from "./dataCatalogo.model";
import { Pais } from "./pais.model";
//import { TipoRevista } from "./tipo-revista.model";
import { Usuario } from "./usuario.model";

export class Revista {
    idRevista?: number;
    nombre!: string;
    frecuencia?: string;
    fechaCreacion?: string;
    estado?: number;
    pais?: Pais;
    tipoRevista?: DataCatalogo;
    usuarioRegistro?: Usuario;
    usuarioActualiza?: Usuario;
}
