import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarSalaComponent } from './agregar-sala.component';

describe('AgregarSalaComponent', () => {
  let component: AgregarSalaComponent;
  let fixture: ComponentFixture<AgregarSalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarSalaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarSalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
