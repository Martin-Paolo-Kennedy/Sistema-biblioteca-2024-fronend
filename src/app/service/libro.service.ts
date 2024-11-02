import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from '../app.settings';
import { DataCatalogo } from '../model/dataCatalogo.model';
import { Usuario } from '../model/usuario.model';
import { Libro } from '../model/libro.model';

const baseUrlCrudLibro = AppSettings.API_ENDPOINT + '/crudLibro';
const baseUrlLibro = AppSettings.API_ENDPOINT + '/libro';
const baseUrlConsulta = AppSettings.API_ENDPOINT + '/consultaLibro';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  constructor(private http: HttpClient) { }

  registrar(data: Libro): Observable<any> {
    return this.http.post(baseUrlLibro, data);
  }

  consultaPorTitulo(filtro: string): Observable<Libro[]> {
    return this.http.get<Libro[]>(baseUrlCrudLibro + '/listaLibroPorTituloLike/' + filtro);
  }

  inserta(obj: Libro): Observable<any> {
    return this.http.post(baseUrlCrudLibro + '/registraLibro/', obj);
  }

  actualiza(obj: Libro): Observable<any> {
    return this.http.put(baseUrlCrudLibro + '/actualizaLibro/', obj);
  }

  elimina(idLibro: number): Observable<any> {
    return this.http.delete(baseUrlCrudLibro + '/eliminaLibro/' + idLibro);
  }

  listaLibro(): Observable<Libro[]> {
    return this.http.get<Libro[]>(baseUrlLibro + '/listaLibro');
  }

  consultaFiltro(filtro: string, page: number, size: number): Observable<Libro[]> {
    const params = new HttpParams()
      .set('filtro', filtro)
      .set('page', page.toString())
      .set('size', size.toString());

    return this.http.get<Libro[]>(baseUrlLibro + '/listaLibroPorFiltro', { params });
  }

  consultaDinamica(titulo: string, serie: string): Observable<Libro[]> {
    const params = new HttpParams()
      .set('titulo', titulo)
      .set('serie', serie);

    return this.http.get<Libro[]>(baseUrlConsulta + '/consultaLibroPorParametros', { params });
  }
}
