import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataCatalogo } from '../../model/dataCatalogo.model';
import { Pais } from '../../model/pais.model';
import { Revista } from '../../model/revista.model';
import { Usuario } from '../../model/usuario.model';
import { TokenService } from '../../security/token.service';
import { RevistaService } from '../../service/revista.service';
import { UtilService } from '../../service/util.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar-revista',
  templateUrl: './agregar-revista.component.html',
  styleUrls: ['./agregar-revista.component.css']
})
export class AgregarRevistaComponent {
  lstPais: Pais[] = [];

  lstTipo: DataCatalogo[] = [];

  revista: Revista = {
    nombre: "",
    frecuencia: "",
    fechaCreacion: "",
    pais: {
      idPais: -1
    },
    tipoRevista: {
      idDataCatalogo: -1,
    }

  }
  objUsuario: Usuario = {};


  constructor(private utilService: UtilService, private tokenService: TokenService,
    private revistaService: RevistaService, private formBuilder: FormBuilder) {

    utilService.listaPais().subscribe(
      x => this.lstPais = x
    )

    utilService.listaTipoLibroRevista().subscribe(
      x => this.lstTipo = x
    )

    this.objUsuario.idUsuario = tokenService.getUserId();
  }


  registra() {
    this.revista.usuarioActualiza = this.objUsuario;
    this.revista.usuarioRegistro = this.objUsuario;
    console.log(this.revista);
    this.revistaService.registrar(this.revista).subscribe(
      x => {
        Swal.fire({
          icon: 'info',
          title: 'Resultado del Registro',
          text: x.mensaje,
        })
        this.revista.nombre = "";
        this.revista.frecuencia = "";
        this.revista.fechaCreacion = "";
        this.revista.pais!.idPais = -1;
        this.revista.tipoRevista!.idDataCatalogo = -1;
      },
    );
  }
}
