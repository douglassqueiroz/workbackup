import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotoesCameraComponent } from './botoes-camera.component';

describe('BotoesCameraComponent', () => {
  let component: BotoesCameraComponent;
  let fixture: ComponentFixture<BotoesCameraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotoesCameraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BotoesCameraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
