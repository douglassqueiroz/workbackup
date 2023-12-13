import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarCameraComponent } from './mostrar-camera.component';

describe('MostrarCameraComponent', () => {
  let component: MostrarCameraComponent;
  let fixture: ComponentFixture<MostrarCameraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostrarCameraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MostrarCameraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
