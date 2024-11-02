import { Component } from '@angular/core';
import { Autor } from '../../model/autor.model';
import { FormBuilder, Validators } from '@angular/forms';
import { DataCatalogo } from '../../model/dataCatalogo.model';
import { Pais } from '../../model/pais.model';
import { Usuario } from '../../model/usuario.model';
import { TokenService } from '../../security/token.service';
import { AutorService } from '../../service/autor.service';
import { UtilService } from '../../service/util.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-agregar-autor',
  templateUrl: './agregar-autor.component.html',
  styleUrls: ['./agregar-autor.component.css']
})
export class AgregarAutorComponent {

  lstPais: Pais[] = [];
  lstGrado: DataCatalogo[] = [];
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

  objUsuario: Usuario = {} ;

  

  constructor(private autorService:AutorService , private utilService: UtilService, private tokenService: TokenService,
    private formBuilder: FormBuilder) {
        utilService.listaPais().subscribe(
          x   =>   this.lstPais=x
        )
        utilService.listaGradoAutor().subscribe(
          x   =>   this.lstGrado=x
        )
        this.objUsuario.idUsuario = tokenService.getUserId();
  }

  registra(){
    this.autor.usuarioActualiza = this.objUsuario;
    this.autor.usuarioRegistro = this.objUsuario;
    this.autorService.registrar(this.autor).subscribe(
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
