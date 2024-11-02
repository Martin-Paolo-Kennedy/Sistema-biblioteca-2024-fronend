import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEjemploComponent } from './agregar-ejemplo.component';

describe('AgregarEjemploComponent', () => {
  let component: AgregarEjemploComponent;
  let fixture: ComponentFixture<AgregarEjemploComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarEjemploComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarEjemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
