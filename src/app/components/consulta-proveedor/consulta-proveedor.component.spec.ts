import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaProveedorComponent } from './consulta-proveedor.component';

describe('ConsultaProveedorComponent', () => {
  let component: ConsultaProveedorComponent;
  let fixture: ComponentFixture<ConsultaProveedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultaProveedorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaProveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
