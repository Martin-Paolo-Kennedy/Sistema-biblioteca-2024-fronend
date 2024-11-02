import { Injectable } from '@angular/core';
import { AppSettings } from '../app.settings';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proveedor } from '../model/proveedor.model';

const baseUrlProveedor = AppSettings.API_ENDPOINT+ '/proveedor';
const baseUrlCrudProveedor = AppSettings.API_ENDPOINT+ '/crudproveedor';
const baseUrlConsulta = AppSettings.API_ENDPOINT + "/consultaProveedor";
@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  constructor(private http: HttpClient) { }

  registrar(data: Proveedor): Observable<any> {
    return this.http.post(baseUrlProveedor, data);
  }
  consultaPorNombre(filtro: string): Observable<Proveedor[]> {
    return this.http.get<Proveedor[]>(baseUrlCrudProveedor + '/listaProveedorPorNombre/' + filtro);
  }

  inserta(obj: Proveedor): Observable<any> {
    return this.http.post(baseUrlCrudProveedor + '/registraProveedor', obj);
  }

  actualiza(obj: Proveedor): Observable<any> {
    return this.http.put(baseUrlCrudProveedor + '/actualizaProveedor', obj);
  }

  elimina(idProveedor: number): Observable<any> {
    return this.http.delete(baseUrlCrudProveedor + '/eliminaProveedor/' + idProveedor);
  }
  consultaDinamica(razonsocial:string,celular:string,estado:number,idTipoProveedor:number):Observable<Proveedor[]>{
    const params = new HttpParams()
    .set("razonsocial", razonsocial )
    .set("celular", celular)
    .set("estado", estado)
    .set("idTipoProveedor", idTipoProveedor);

    return  this.http.get<Proveedor[]>(baseUrlConsulta +"/consultaProveedorPorParametros", {params}); 
  } 
}
