import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app.material.module';
import { MatIconModule } from '@angular/material/icon';

import { MenuComponent } from './menu/menu.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './auth/login.component';
import { AppRoutingModule } from './app.routes';
import { ProdInterceptorService } from './interceptors/prod-interceptor.service';

/*VISTAS DE LA CONSULTA */
import { ConsultaAlumnoComponent } from './components/consulta-alumno/consulta-alumno.component';
import { ConsultaLibroComponent } from './components/consulta-libro/consulta-libro.component';
import { ConsultaAutorComponent } from './components/consulta-autor/consulta-autor.component';
import { ConsultaSalaComponent } from './components/consulta-sala/consulta-sala.component';
import { ConsultaProveedorComponent } from './components/consulta-proveedor/consulta-proveedor.component';
/*VISTA DE AGREGAR */
import { AgregarAlumnoComponent } from './components/agregar-alumno/agregar-alumno.component';
import { AgregarEjemploComponent } from './components/agregar-ejemplo/agregar-ejemplo.component';
import { AgregarLibroComponent } from './components/agregar-libro/agregar-libro.component';
import { AgregarTesisComponent } from './components/agregar-tesis/agregar-tesis.component';
import { AgregarAutorComponent } from './components/agregar-autor/agregar-autor.component';
import { AgregarSalaComponent } from './components/agregar-sala/agregar-sala.component';
import { AgregarProveedorComponent } from './components/agregar-proveedor/agregar-proveedor.component';
import { AgregarEditorialComponent } from './components/agregar-editorial/agregar-editorial.component';
import { AgregarRevistaComponent } from './components/agregar-revista/agregar-revista.component';



@NgModule({
  declarations: [
    LoginComponent,
    MenuComponent,
    IndexComponent,
    AppComponent,
    ConsultaAlumnoComponent,
    ConsultaLibroComponent,
    ConsultaAutorComponent,
    ConsultaSalaComponent,
    ConsultaProveedorComponent,
    AgregarAlumnoComponent,
    AgregarEjemploComponent,
    AgregarLibroComponent,
    AgregarTesisComponent,
    AgregarAutorComponent,
    AgregarSalaComponent,
    AgregarProveedorComponent,
    AgregarEditorialComponent,
    AgregarRevistaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    CommonModule,
    MatIconModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ProdInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
