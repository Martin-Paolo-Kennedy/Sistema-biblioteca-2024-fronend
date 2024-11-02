import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaEditorialComponent } from './consulta-editorial.component';

describe('ConsultaEditorialComponent', () => {
  let component: ConsultaEditorialComponent;
  let fixture: ComponentFixture<ConsultaEditorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultaEditorialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaEditorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
