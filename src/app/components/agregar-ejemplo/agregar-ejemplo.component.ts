import { Component } from '@angular/core';
import { Ejemplo } from '../../model/ejemplo.model';
import { Pais } from '../../model/pais.model';
import { Usuario } from '../../model/usuario.model';
import { TokenService } from '../../security/token.service';
import { EjemploService } from '../../service/ejemplo.service';
import { UtilService } from '../../service/util.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-agregar-ejemplo',
  templateUrl: './agregar-ejemplo.component.html',
  styleUrls: ['./agregar-ejemplo.component.css']
})
export class AgregarEjemploComponent {

  lstPais: Pais[] = [];
  ejemplo: Ejemplo = {
    descripcion: "",
    pais: {
      idPais: -1
    }
  }
  objUsuario: Usuario = {};

  constructor(private ejemploService: EjemploService, private utilService: UtilService, private tokenService: TokenService) {
    utilService.listaPais().subscribe(
      x => this.lstPais = x
    )
    this.objUsuario.idUsuario = tokenService.getUserId();
  }

  registra() {
    this.ejemplo.usuarioActualiza = this.objUsuario;
    this.ejemplo.usuarioRegistro = this.objUsuario;
    console.log(this.ejemplo);
    this.ejemploService.registrar(this.ejemplo).subscribe(
      x => {
        Swal.fire({
          icon: 'info',
          title: 'Resultado del Registro',
          text: x.mensaje,
        })
      },
    );
  }

}
