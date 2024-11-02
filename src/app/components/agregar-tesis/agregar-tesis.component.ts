import { Component, OnInit } from '@angular/core';
import { Tesis } from '../../model/tesis.model';
import { Alumno } from '../../model/alumno.model';
import { Usuario } from '../../model/usuario.model';
import { TokenService } from '../../security/token.service';
import { TesisService } from '../../service/tesis.service';
import { UtilService } from '../../service/util.service';
import Swal from 'sweetalert2';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-agregar-tesis',
  templateUrl: './agregar-tesis.component.html',
  styleUrls: ['./agregar-tesis.component.css']
})
export class AgregarTesisComponent implements OnInit {
  lstAlumno: Alumno[] = [];
  tesis: Tesis = {
    titulo: "",
    tema: "",
    fechaCreacion: "",
    alumno: {
      idAlumno: -1
    }
  };
  objUsuario: Usuario = {};

  constructor(
    private tesisService: TesisService,
    private utilService: UtilService,
    private tokenService: TokenService,
    private formBuilder: FormBuilder
  ) {
    

    // Obtener lista de alumnos
    utilService.listaAlumno().subscribe(
      x => this.lstAlumno = x
    );

    // Obtener ID del usuario
    this.objUsuario.idUsuario = tokenService.getUserId();
  }

  ngOnInit(): void {
    // Puedes colocar cualquier lógica de inicialización aquí
  }

  registra() {
    this.tesis.usuarioActualiza = this.objUsuario;
    this.tesis.usuarioRegistro = this.objUsuario;
    this.tesisService.registrar(this.tesis).subscribe(
      x => {
        Swal.fire({
          icon: 'info',
          title: 'Resultado del Registro',
          text: x.mensaje,
        });
      }
    );
  }
}
