import { Component } from '@angular/core';
import { Editorial } from '../../model/editorial.model';
import { Pais } from '../../model/pais.model';
import { Usuario } from '../../model/usuario.model';
import { TokenService } from '../../security/token.service';
import { EditorialService } from '../../service/editorial.service';
import { UtilService } from '../../service/util.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar-editorial',
  templateUrl: './agregar-editorial.component.html',
  styleUrls: ['./agregar-editorial.component.css']
})
export class AgregarEditorialComponent {
  lstPais: Pais[] = [];
  editorial: Editorial ={
    razonSocial: "",
    direccion: "",
    ruc: "",
    fechaCreacion: "",
    pais:{
      idPais:-1
    }
  }

  objUsuario: Usuario = {} ;

  constructor(private editorialService:EditorialService , private utilService: UtilService, private tokenService: TokenService) {
    utilService.listaPais().subscribe(
      x   =>   this.lstPais=x
    )
    this.objUsuario.idUsuario = tokenService.getUserId();
  }

  registro(){
    this.editorial.usuarioActualiza = this.objUsuario;
    this.editorial.usuarioRegistro = this.objUsuario;
    this.editorialService.registrar(this.editorial).subscribe(
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
