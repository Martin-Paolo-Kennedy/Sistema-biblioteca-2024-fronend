import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DataCatalogo } from '../../model/dataCatalogo.model';
import { Pais } from '../../model/pais.model';
import { UtilService } from '../../service/util.service';
import { Alumno } from '../../model/alumno.model';
import { AlumnoService } from '../../service/alumno.service';

@Component({
  selector: 'app-consulta-alumno',
  templateUrl: './consulta-alumno.component.html',
  styleUrls: ['./consulta-alumno.component.css']
})
export class ConsultaAlumnoComponent implements OnInit {

  lstPais: Pais[] = [];
  lstModel: DataCatalogo[] = [];
  //grilla
  dataSource:any;

  //parametros de consulta
  nombres:string  = "";
  apellidos:string  = "";
  dni:string  = "";
  selPais:number = -1;

  @ViewChild(MatPaginator, { static: true}) paginator!: MatPaginator;
  displaycolumns = ["idAlumno","nombres","apellidos","telefono", "dni", "correo","fechaNacimiento","idPais","idModalidad"];



  constructor(private alumnoService:AlumnoService, private utilService: UtilService) { 

    utilService.listaPais().subscribe(
      x   =>   this.lstPais=x
    )
    utilService.listaModalidadAlumno().subscribe(
      x => this.lstModel=x
    )
  }



  ngOnInit(): void {
  }

  consulta(){

    console.log(">>> nombres >> " + this.nombres);
    console.log(">>> apellidos >> " + this.apellidos);
    console.log(">>> dni >> " + this.dni);
    console.log(">>> idPais >> " + this.selPais);

    this.alumnoService.consultaAlumnoDinamica(this.nombres, this.apellidos, this.dni, this.selPais).subscribe(
      x => {
        this.dataSource=new MatTableDataSource<Alumno>(x);
        this.dataSource.paginator = this.paginator;
      }

    );
  }


}
