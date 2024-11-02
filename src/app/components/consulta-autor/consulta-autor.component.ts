import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Autor } from '../../model/autor.model';
import { Pais } from '../../model/pais.model';
import { AutorService } from '../../service/autor.service';
import { UtilService } from '../../service/util.service';

@Component({
  selector: 'app-consulta-autor',
  templateUrl: './consulta-autor.component.html',
  styleUrls: ['./consulta-autor.component.css']
})
export class ConsultaAutorComponent {

  //Grila
  dataSource:any;

  //Clase para la paginacion
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  displayedColumns = ["idAutor","Nombre","Apellido","Fecha Nacimiento","Telefono","Estado","Pais"];

  lstPais: Pais[] = [];
  autor: Autor ={
      nombres: "",
      apellidos: "",
      fechaNacimiento: "",
      telefono: "",
      pais:{
        idPais:-1
      },
      grado:{
        idDataCatalogo:-1
      }
  }

  nombres:string ="";
  telefono:string ="";
  estado:boolean =true;
  selPais:number =-1;


  constructor(private autorService:AutorService,
    private  utilService: UtilService) { 
      this.utilService.listaPais().subscribe(
        x => this.lstPais = x
      );
      this.selPais = -1;
    }

    consulta(){

      console.log(">>> nombres >> " + this.nombres);
      console.log(">>> telefono >> " + this.telefono);
      console.log(">>> estado >> " + this.estado);
      console.log(">>> idPais >> " + this.selPais);

      this.autorService.consultaDinamica(this.nombres,this.telefono,this.estado?1:0,this.selPais).subscribe(
          x => {
            this.dataSource = new MatTableDataSource<Autor>(x);
            this.dataSource.paginator = this.paginator; 
          }
      );
  }

}
