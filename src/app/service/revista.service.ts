import { Injectable } from '@angular/core';
import { AppSettings } from '../app.settings';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Revista } from '../model/revista.model';
import { Observable } from 'rxjs';

const baseUrlPrueba = AppSettings.API_ENDPOINT + '/revista';
@Injectable({
  providedIn: 'root'
})
export class RevistaService {

  constructor(private http: HttpClient) { }

  registrar(data: Revista): Observable<any> {
    return this.http.post(baseUrlPrueba, data);
  }

  consultaPorNombre(filtro: string): Observable<Revista[]> {
    return this.http.get<Revista[]>(baseUrlPrueba + "/listaRevistaPorNombreLike/" + filtro);
  }

  inserta(obj: Revista): Observable<any> {
    return this.http.post(baseUrlPrueba + "/registraRevista", obj);
  }

  actualiza(obj: Revista): Observable<any> {
    return this.http.put(baseUrlPrueba + "/actualizaRevista", obj);
  }

  elimina(idRevista: number): Observable<any> {
    return this.http.delete(baseUrlPrueba + "/eliminaRevista/" + idRevista);
  }

  consultaDinamica(nombre: string, frecuencia: string, estado: number, idPais: number): Observable<Revista[]> {
    const params = new HttpParams()
      .set("nombre", nombre)
      .set("frecuencia", frecuencia)
      .set("estado", estado)
      .set("idPais", idPais);

    return this.http.get<Revista[]>(baseUrlPrueba + "/consultarevistaporparametros", { params });
  }
}
