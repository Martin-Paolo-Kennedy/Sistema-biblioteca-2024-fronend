import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaLibroComponent } from './consulta-libro.component';

describe('ConsultaLibroComponent', () => {
  let component: ConsultaLibroComponent;
  let fixture: ComponentFixture<ConsultaLibroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultaLibroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaLibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
