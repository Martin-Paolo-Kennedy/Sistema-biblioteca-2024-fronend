import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarRevistaComponent } from './agregar-revista.component';

describe('AgregarRevistaComponent', () => {
  let component: AgregarRevistaComponent;
  let fixture: ComponentFixture<AgregarRevistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarRevistaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarRevistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
