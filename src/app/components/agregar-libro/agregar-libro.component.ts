import { Component, OnInit } from '@angular/core';
import { Libro } from '../../model/libro.model';
import { DataCatalogo } from '../../model/dataCatalogo.model';
import { Usuario } from '../../model/usuario.model';
import { TokenService } from '../../security/token.service';
import { LibroService } from '../../service/libro.service';
import { UtilService } from '../../service/util.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar-libro',
  templateUrl: './agregar-libro.component.html',
  styleUrls: ['./agregar-libro.component.css']
})
export class AgregarLibroComponent{
  
  lstTipo: DataCatalogo[] = [];
  lstCategoria: DataCatalogo[] = [];

  
  libro: Libro ={
    titulo: "",
    serie: "",
    categoriaLibro:{
      idDataCatalogo:-1
    },
    tipoLibro:{
      idDataCatalogo:-1
    }
  }
  objUsuario: Usuario={};

  constructor(private libroService:LibroService , private utilService: UtilService, private tokenService: TokenService) {
    utilService.listaCategoriaDeLibro().subscribe(
      x   =>   this.lstCategoria=x
    )
    utilService.listaTipoLibroRevista().subscribe(
      x   =>   this.lstTipo=x
    )
    this.objUsuario.idUsuario = tokenService.getUserId();
}

registra(){
this.libro.usuarioActualiza = this.objUsuario;
this.libro.usuarioRegistro = this.objUsuario;
this.libroService.registrar(this.libro).subscribe(
  x=>{
    Swal.fire({
      icon: 'info',
      title: 'Resultado del Registro',
      text: x.mensaje,
    })
  },
);
}

}
 
