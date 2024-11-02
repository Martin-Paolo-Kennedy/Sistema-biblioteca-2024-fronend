import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from '../app.settings';
import { Autor } from '../model/autor.model';

const baseUrlAutor = AppSettings.API_ENDPOINT+ '/autor';
const baseUrlCrudAutor = AppSettings.API_ENDPOINT+ '/crudAutor';
const baseUrlConsulta =  AppSettings.API_ENDPOINT + "/consultaAutor";

@Injectable({
  providedIn: 'root'
})
export class AutorService {

  constructor(private http:HttpClient) { }

  registrar(data:Autor):Observable<any>{
    return this.http.post(baseUrlAutor, data);
  }

  consultaPorNombre(filtro: string): Observable<Autor[]> {
    return this.http.get<Autor[]>(baseUrlCrudAutor + '/listaAutorPorNombreLike/' + filtro);
  }

  inserta(obj: Autor): Observable<any> {
    return this.http.post(baseUrlCrudAutor + '/registraAutor', obj);
  }

  actualiza(obj: Autor): Observable<any> {
    return this.http.put(baseUrlCrudAutor + '/actualizaAutor', obj);
  }

  elimina(idAutor: number): Observable<any> {
    return this.http.delete(baseUrlCrudAutor + '/eliminaAutor/' + idAutor);
  }
  consultaDinamica(nombres:string,telefono:string,estado:number,idPais:number):Observable<Autor[]>{
    const params = new HttpParams()
    .set("nombres", nombres )
    .set("telefono", telefono)
    .set("estado", estado)
    .set("idPais", idPais);

    return  this.http.get<Autor[]>(baseUrlConsulta +"/consultaAutorPorParametros", {params}); 
  }  
}

