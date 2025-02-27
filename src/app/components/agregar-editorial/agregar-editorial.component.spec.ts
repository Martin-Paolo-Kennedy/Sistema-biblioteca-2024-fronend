import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEditorialComponent } from './agregar-editorial.component';

describe('AgregarEditorialComponent', () => {
  let component: AgregarEditorialComponent;
  let fixture: ComponentFixture<AgregarEditorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarEditorialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarEditorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
