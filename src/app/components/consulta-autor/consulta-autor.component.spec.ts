import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaAutorComponent } from './consulta-autor.component';

describe('ConsultaAutorComponent', () => {
  let component: ConsultaAutorComponent;
  let fixture: ComponentFixture<ConsultaAutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultaAutorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaAutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
