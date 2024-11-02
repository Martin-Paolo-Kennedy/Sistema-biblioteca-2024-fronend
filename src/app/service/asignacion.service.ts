import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsignacionService {
  private apiUrl = 'http://localhost:8090/url/asignaciones'; 

  constructor(private http: HttpClient) {}

  obtenerRoles(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/roles`);
  }

  obtenerOpciones(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/opciones`);
  }

  obtenerAsignaciones(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/asignaciones`);
  }

  agregarAsignacion(idRol: number, idOpcion: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/agregarAsignaciones?idRol=${idRol}&idOpcion=${idOpcion}`, null);
  }

  eliminarAsignacion(idRol: number, idOpcion: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/asignaciones/${idRol}/${idOpcion}`);
  }
}
