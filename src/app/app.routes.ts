import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login.component';
import { IndexComponent } from './index/index.component';

import { ConsultaAlumnoComponent } from './components/consulta-alumno/consulta-alumno.component';
import { ConsultaLibroComponent } from './components/consulta-libro/consulta-libro.component';
import { ConsultaAutorComponent } from './components/consulta-autor/consulta-autor.component';
import { ConsultaSalaComponent } from './components/consulta-sala/consulta-sala.component';
import { ConsultaProveedorComponent } from './components/consulta-proveedor/consulta-proveedor.component';
import { AgregarAlumnoComponent } from './components/agregar-alumno/agregar-alumno.component';
import { AgregarEjemploComponent } from './components/agregar-ejemplo/agregar-ejemplo.component';
import { AgregarLibroComponent } from './components/agregar-libro/agregar-libro.component';
import { AgregarTesisComponent } from './components/agregar-tesis/agregar-tesis.component';
import { AgregarAutorComponent } from './components/agregar-autor/agregar-autor.component';
import { AgregarSalaComponent } from './components/agregar-sala/agregar-sala.component';
import { AgregarProveedorComponent } from './components/agregar-proveedor/agregar-proveedor.component';
import { AgregarEditorialComponent } from './components/agregar-editorial/agregar-editorial.component';
import { AgregarRevistaComponent } from './components/agregar-revista/agregar-revista.component';


const routes: Routes = [
  {path:"verRegistroAlumno", component:AgregarAlumnoComponent },
  {path:"verRegistroTesis", component:AgregarTesisComponent },
  {path:"verRegistroEjemplo", component:AgregarEjemploComponent },
  {path:"verRegistroLibro", component:AgregarLibroComponent },
  {path:"verRegistroAutor", component:AgregarAutorComponent },
  {path:"verRegistroSala", component:AgregarSalaComponent },
  {path:"verRegistroProveedor", component:AgregarProveedorComponent },
  {path:"verRegistroEditorial", component:AgregarEditorialComponent},
  {path:"verRegistroRevista", component:AgregarRevistaComponent},

  {path:"verConsultaAlumno", component:ConsultaAlumnoComponent },
  {path:"verConsultaLibro", component:ConsultaLibroComponent },
  {path:"verConsultaAutor", component:ConsultaAutorComponent },
  {path:"verConsultaSala", component:ConsultaSalaComponent },
  {path:"verConsultaProveedor", component:ConsultaProveedorComponent },

  { path: '', component: IndexComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
