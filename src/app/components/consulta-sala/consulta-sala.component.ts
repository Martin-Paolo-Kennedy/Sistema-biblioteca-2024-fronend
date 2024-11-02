import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DataCatalogo } from '../../model/dataCatalogo.model';
import { Sala } from '../../model/sala.model';
import { SalaService } from '../../service/sala.service';
import { UtilService } from '../../service/util.service';

@Component({
  selector: 'app-consulta-sala',
  templateUrl: './consulta-sala.component.html',
  styleUrls: ['./consulta-sala.component.css']
})
export class ConsultaSalaComponent {

  //Grila
  dataSource:any;

  //Clase para la paginacion
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  displayedColumns = ["idSala","Numero","Piso","Num Alumnos","Recursos","Estado","Sede","Tipo"];

  lstSede: DataCatalogo[] = [];
  lstTipoSala: DataCatalogo[] = [];

  sala: Sala = {
    numero: "",
    piso:0,
    numAlumnos:0,
    recursos: "",
    sede: {
      idDataCatalogo: -1,
    },
    tipoSala: {
      idDataCatalogo: -1,
    }

  }

  numero:string ="";
  recursos:string ="";
  estado:boolean =true;
  selSede:number =-1;


  constructor(private salaService:SalaService,
    private  utilService: UtilService) { 
      this.utilService.listaSede().subscribe(
        x => this.lstSede = x
      );
      this.selSede = -1;
    }

    consulta(){

      console.log(">>> numero >> " + this.numero);
      console.log(">>> recursos >> " + this.recursos);
      console.log(">>> estado >> " + this.estado);
      console.log(">>> idSede >> " + this.selSede);

      this.salaService.consultaDinamica(this.numero,this.recursos,this.estado?1:0,this.selSede).subscribe(
          x => {
            this.dataSource = new MatTableDataSource<Sala>(x);
            this.dataSource.paginator = this.paginator; 
          }
      );
  }

}
