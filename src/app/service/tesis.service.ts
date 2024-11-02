import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from '../app.settings';
import { Tesis } from '../model/tesis.model';

const baseUrlTesis = AppSettings.API_ENDPOINT+ '/tesis';
const urlCrud = AppSettings.API_ENDPOINT + '/crudTesis'

@Injectable({
  providedIn: 'root'
})

export class TesisService {


  constructor(private http:HttpClient) { }

  registrar(dataTesis:Tesis):Observable<any>{
    return this.http.post(baseUrlTesis, dataTesis);
  }

    insertar(obj:Tesis):Observable<any>{
      return this.http.post(urlCrud + "/registraTesis", obj);
    }

    actualizar(obj:Tesis):Observable<any>{
      return this.http.put(urlCrud + "/actualizaTesis", obj);
    }

    consultaPorTitulo(filtro:string):Observable<Tesis[]>{
      return this.http.get<Tesis[]>(urlCrud+"/listaTesisporTitulo/"+filtro);
    }

    elimina(idTesis:number):Observable<any>{
      return this.http.delete(urlCrud + "/eliminaTesis/" + idTesis);
    }


}