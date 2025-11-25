import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarTarea } from './agregar-tarea';

describe('AgregarTarea', () => {
  let component: AgregarTarea;
  let fixture: ComponentFixture<AgregarTarea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarTarea]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarTarea);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
