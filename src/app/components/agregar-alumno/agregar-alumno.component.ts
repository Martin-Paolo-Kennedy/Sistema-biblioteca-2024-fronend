import { Component} from '@angular/core';
import { Alumno } from '../../model/alumno.model';
import { DataCatalogo } from '../../model/dataCatalogo.model';
import { Pais } from '../../model/pais.model';
import { Usuario } from '../../model/usuario.model';
import { TokenService } from '../../security/token.service';
import { AlumnoService } from '../../service/alumno.service';
import { UtilService } from '../../service/util.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar-alumno',
  templateUrl: './agregar-alumno.component.html',
  styleUrls: ['./agregar-alumno.component.css']
})
export class AgregarAlumnoComponent {

  lstPais: Pais[] = [];
  lstModel: DataCatalogo[] = [];

  alumno: Alumno = {
    nombres: "",
    apellidos: "",
    telefono: "",
    dni: "",
    correo: "",
    fechaNacimiento: "",
    pais: {
      idPais: -1
    },
    modalidad: {
      idDataCatalogo: -1
    }
  }
  objUsuario: Usuario = {};

  constructor(private alumnoService: AlumnoService, private utilService: UtilService, private tokenService: TokenService) {
    utilService.listaPais().subscribe(
      x => this.lstPais = x
    )
    utilService.listaModalidadAlumno().subscribe(
      x => this.lstModel = x
    )
    this.objUsuario.idUsuario = tokenService.getUserId();
  }
  registra() {
    this.alumno.usuarioActualiza = this.objUsuario;
    this.alumno.usuarioRegistro = this.objUsuario;
    console.log(this.alumno);
    this.alumnoService.registrar(this.alumno).subscribe(
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
