import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Proveedor } from '../../model/proveedor.model';
import { DataCatalogo } from '../../model/dataCatalogo.model';
import { UtilService } from '../../service/util.service';
import { ProveedorService } from '../../service/proveedor.service';
import { Pais } from '../../model/pais.model';
@Component({
  selector: 'app-consulta-proveedor',
  templateUrl: './consulta-proveedor.component.html',
  styleUrls: ['./consulta-proveedor.component.css']
})
export class ConsultaProveedorComponent{

  //Grila
  dataSource:any;

  //Clase para la paginacion
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  displayedColumns = ["idProveedor","Razon Social","RUC","Direccion","Celular","Estado","Tipo"];
  lstPais: Pais[] = [];
  lstTipo: DataCatalogo[] = [];
  proveedor: Proveedor = {
    razonsocial: "",
    ruc: "",
    direccion: "",
    celular: "",
    contacto: "",
    pais: {
      idPais: -1
    },
    tipoProveedor: {
      idDataCatalogo: -1,
    }

  }

  razonsocial:string ="";
  celular:string ="";
  estado:boolean =true;
  selTipo:number =-1;


  constructor(private proveedorService:ProveedorService,
    private  utilService: UtilService) { 
      this.utilService.listaTipoProveedor().subscribe(
        x => this.lstTipo = x
      );
      this.selTipo = -1;
    }

    consulta(){

      console.log(">>> razonsocial >> " + this.razonsocial);
      console.log(">>> celular >> " + this.celular);
      console.log(">>> estado >> " + this.estado);
      console.log(">>> idTipoProveedor >> " + this.selTipo);

      this.proveedorService.consultaDinamica(this.razonsocial,this.celular,this.estado?1:0,this.selTipo).subscribe(
          x => {
            this.dataSource = new MatTableDataSource<Proveedor>(x);
            this.dataSource.paginator = this.paginator; 
          }
      );
  }


}
