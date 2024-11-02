import { Alumno } from "./alumno.model";
import { Sala } from "./sala.model";
import { Usuario } from "./usuario.model";

export class ReservaSala {
    idReservaSala?: number;
    horaInicio?: String;
    horaFin?: String;
    fechaReserva?: String;
    fechaRegistro?: Date;
    estado?: number;
    alumno?:Alumno;
    sala?:Sala;
    usuarioRegistro?:Usuario;
}
