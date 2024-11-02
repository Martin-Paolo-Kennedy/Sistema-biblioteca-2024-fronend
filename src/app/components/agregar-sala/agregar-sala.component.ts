import { Component, OnInit } from '@angular/core';
import { DataCatalogo } from '../../model/dataCatalogo.model';
import { Sala } from '../../model/sala.model';
import { Usuario } from '../../model/usuario.model';
import { TokenService } from '../../security/token.service';
import { SalaService } from '../../service/sala.service';
import { UtilService } from '../../service/util.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar-sala',
  templateUrl: './agregar-sala.component.html',
  styleUrls: ['./agregar-sala.component.css']
})
export class AgregarSalaComponent {

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
  objUsuario: Usuario = {};

  constructor(private utilService: UtilService, private tokenService: TokenService, private salaService: SalaService) { 

    utilService.listaSede().subscribe(
      x => this.lstSede = x
    )

    utilService.listaTipoSala().subscribe(
      x => this.lstTipoSala = x
    )

    this.objUsuario.idUsuario = tokenService.getUserId();
  }

  registraSala() {
    this.sala.usuarioActualiza = this.objUsuario;
    this.sala.usuarioRegistro = this.objUsuario;
    console.log(this.sala);
    this.salaService.registrar(this.sala).subscribe(
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
