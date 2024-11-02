import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from '../app.settings';
import { Alumno } from '../model/alumno.model';

const baseUrlAlumno = AppSettings.API_ENDPOINT+ '/alumno';
const baseUrlcrudAlumno = AppSettings.API_ENDPOINT+ '/crudAlumno';
const baseUrlconsultaAlumno = AppSettings.API_ENDPOINT+ '/consultaAlumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  constructor(private http:HttpClient) { }

  registrar(data:Alumno):Observable<any>{
    return this.http.post(baseUrlAlumno,data);
  }
  
  consultaPorNombre(filtro: string): Observable<Alumno[]> {
    return this.http.get<Alumno[]>(baseUrlcrudAlumno + '/listaAlumnoPorNombreLike/' + filtro);
  }

  inserta(obj: Alumno): Observable<any> {
    return this.http.post(baseUrlcrudAlumno + '/registraAlumno', obj);
  }

  actualiza(obj: Alumno): Observable<any> {
    return this.http.post(baseUrlcrudAlumno + '/actualizaAlumno', obj);
  }

  elimina(idAutor: number): Observable<any> {
    return this.http.delete(baseUrlcrudAlumno + '/eliminaAlumno/' + idAutor);
  }


  consultaAlumnoDinamica(nombres:string, apellidos:string, dni:string, idPais:number): Observable<Alumno[]> {
    const params = new HttpParams()
    .set("nombres", nombres)
    .set("apellidos", apellidos)
    .set("dni", dni)
    .set("idPais", idPais);

    return this.http.get<Alumno[]>(baseUrlconsultaAlumno + "/consultaAlumnoPorParametros", {params});
  }




  //Reserva Sala -- no borrar por favor
  consultaFiltro(filtro:string, page: number, size: number):Observable<Alumno[]>{
    if (filtro == ""){
      return  this.http.get<Alumno[]>(baseUrlAlumno +'/listaAlumno?page='+ page+'&size=' + size); 
    }else{
      return  this.http.get<Alumno[]>(baseUrlAlumno +'/listaAlumno/'+filtro+'?page='+ page+'&size=' + size); 
    }
} 

}
