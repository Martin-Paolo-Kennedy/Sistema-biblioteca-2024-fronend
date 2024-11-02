import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Sala } from '../model/sala.model';
import { AppSettings } from '../app.settings';
import { Observable } from 'rxjs';
import { ReservaSala } from '../model/reserva-sala.model';


const baseUrlSala = AppSettings.API_ENDPOINT + '/sala';

const baseUrlConsulta =  AppSettings.API_ENDPOINT + "/consultaSala";


@Injectable({
  providedIn: 'root'
})
export class SalaService {

  constructor(private http: HttpClient) { }

  registrar(data: Sala): Observable<any> {
    return this.http.post(baseUrlSala, data);
  }
  consultaPorNombre(filtro: string): Observable<Sala[]> {
    return this.http.get<Sala[]>(baseUrlSala + "/listaSalaPorNombreLike/" + filtro);
  }

  inserta(obj: Sala): Observable<any> {
    return this.http.post(baseUrlSala + "/registraSala", obj);
  }

  actualiza(obj: Sala): Observable<any> {
    return this.http.put(baseUrlSala + "/actualizaSala", obj);
  }

  elimina(idSala: number): Observable<any> {
    return this.http.delete(baseUrlSala + "/eliminaSala/" + idSala);
  }


  //Reserva Sala -- no borrar por favor***************************************************
  consultaFiltro(filtro: string, page: number, size: number): Observable<Sala[]> {
    if (filtro == "") {
      return this.http.get<Sala[]>(baseUrlSala + '/listaSala?page=' + page + '&size=' + size);
    } else {
      return this.http.get<Sala[]>(baseUrlSala + '/listaSala/' + filtro + '?page=' + page + '&size=' + size);
    }
  }

  registraReservaSala(data: ReservaSala): Observable<any> {
    return this.http.post(baseUrlSala + "/registraReservaSala", data);
  }
  //****************************************************************************************

  consultaDinamica(numero:string,recursos:string,estado:number,idSede:number):Observable<Sala[]>{
    const params = new HttpParams()
    .set("numero", numero )
    .set("recursos", recursos)
    .set("estado", estado)
    .set("idSede", idSede);

    return  this.http.get<Sala[]>(baseUrlConsulta +"/consultaSalaPorParametros", {params}); 
  } 

}
