import { Injectable } from "@angular/core";
import { AppSettings } from "../app.settings";
import { Editorial } from "../model/editorial.model";
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrlPrueba = AppSettings.API_ENDPOINT+ '/editorialcrud';

@Injectable({
  providedIn: 'root'
})

export class EditorialService{
    constructor(private http:HttpClient) { }

    registrar(data:Editorial):Observable<any>{
        return this.http.post(baseUrlPrueba, data);
    }


    inserta(obj:Editorial):Observable<any>{
      return this.http.post(baseUrlPrueba +"/registraEditorial", obj);
    }

    consultaPorNombre(filtro:string):Observable<Editorial[]>{
      return  this.http.get<Editorial[]>(baseUrlPrueba +"/listaEditorialPorRazLike/"+filtro); 
    }  

    actualiza(obj:Editorial):Observable<any>{
      return this.http.put(baseUrlPrueba + "/actualizaEditorial", obj);
    }

    elimina(idEditorial:number):Observable<any>{
      return this.http.delete(baseUrlPrueba + "/eliminaEditorial/"+ idEditorial);
    }


    consultaDinamica(razonSocial:string,direccion:string,estado:number,idPais:number):Observable<Editorial[]>{
      const params = new HttpParams()
      .set("razonSocial", razonSocial )
      .set("direccion", direccion)
      .set("estado", estado)
      .set("idPais", idPais);
  
      return  this.http.get<Editorial[]>(baseUrlPrueba +"/consultaEditorial", {params}); 
    }  


}