import { Component, OnInit } from '@angular/core';
import { DataCatalogo } from '../../model/dataCatalogo.model';
import { Pais } from '../../model/pais.model';
import { Proveedor } from '../../model/proveedor.model';
import { Usuario } from '../../model/usuario.model';
import { TokenService } from '../../security/token.service';
import { ProveedorService } from '../../service/proveedor.service';
import { FormBuilder, Validators } from '@angular/forms';
import { UtilService } from '../../service/util.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-agregar-proveedor',
  templateUrl: './agregar-proveedor.component.html',
  styleUrls: ['./agregar-proveedor.component.css']
})
export class AgregarProveedorComponent {

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

  objUsuario: Usuario = {};

  constructor(private proveedorService: ProveedorService, private utilService: UtilService, private tokenService: TokenService,
    private formBuilder: FormBuilder) {
    utilService.listaPais().subscribe(
      x => this.lstPais = x
    )

    utilService.listaTipoProveedor().subscribe(
      x => this.lstTipo = x
    )

    this.objUsuario.idUsuario = tokenService.getUserId();
  }

  registraPro() {
    this.proveedor.usuarioActualiza = this.objUsuario;
    this.proveedor.usuarioRegistro = this.objUsuario;
    console.log(this.proveedor);

    this.proveedorService.registrar(this.proveedor).subscribe(
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
