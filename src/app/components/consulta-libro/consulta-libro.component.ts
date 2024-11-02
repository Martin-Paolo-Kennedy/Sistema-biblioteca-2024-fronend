import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataCatalogo } from '../../model/dataCatalogo.model';
import { Usuario } from '../../model/usuario.model';
import { TokenService } from '../../security/token.service';
import { LibroService } from '../../service/libro.service';
import { UtilService } from '../../service/util.service';
import { MatPaginator } from '@angular/material/paginator';
import { Libro } from '../../model/libro.model';

@Component({
  selector: 'app-consulta-libro',
  templateUrl: './consulta-libro.component.html',
  styleUrls: ['./consulta-libro.component.css']
})
export class ConsultaLibroComponent implements OnInit {

  lstTipo: DataCatalogo[] = [];
  lstCategoria: DataCatalogo[] = [];

  displayedColumns: string[] = ["idLibro", "titulo", "serie", /* Agrega más columnas según sea necesario */];
  
  libro: Libro = {
    titulo: "",
    serie: "",
    categoriaLibro: {
      idDataCatalogo: -1
    },
    tipoLibro: {
      idDataCatalogo: -1
    }
  };
  
  objUsuario: Usuario = {};
  dataSource: any;
  paginator!: MatPaginator;
  titulo: string = "";
  serie: string = "";
  categoria: boolean = true;

  constructor(
    private libroService: LibroService,
    private utilService: UtilService,
    private tokenService: TokenService
  ) {
    this.objUsuario.idUsuario = tokenService.getUserId();
  }

  ngOnInit() {
    this.utilService.listaCategoriaDeLibro().subscribe(
      x => this.lstCategoria = x
    );
    this.utilService.listaTipoLibroRevista().subscribe(
      x => this.lstTipo = x
    );
  }

  consulta() {
    console.log(">>> titulo >> " + this.titulo);
    console.log(">>> serie >> " + this.serie);

    this.libroService.consultaDinamica(this.titulo, this.serie).subscribe(
      x => {
        this.dataSource = new MatTableDataSource<Libro>(x);
        this.dataSource.paginator = this.paginator;
      }
    );
  }
}
