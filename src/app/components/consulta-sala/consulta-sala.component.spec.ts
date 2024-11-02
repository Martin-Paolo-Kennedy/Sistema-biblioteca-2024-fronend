import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaSalaComponent } from './consulta-sala.component';

describe('ConsultaSalaComponent', () => {
  let component: ConsultaSalaComponent;
  let fixture: ComponentFixture<ConsultaSalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultaSalaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaSalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
