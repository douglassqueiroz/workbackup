import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MostrarCameraComponent } from './components/mostrar-camera/mostrar-camera.component';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { BotoesCameraComponent } from './components/botoes-camera/botoes-camera.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MostrarCameraComponent, CabecalhoComponent, BotoesCameraComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Empilhadeira';

}
