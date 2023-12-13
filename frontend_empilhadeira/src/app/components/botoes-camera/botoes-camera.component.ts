import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-botoes-camera',
  standalone: true,
  imports: [],
  templateUrl: './botoes-camera.component.html',
  styleUrl: './botoes-camera.component.css'
})
export class BotoesCameraComponent implements OnInit {
  ngOnInit() {
    // Importa o script camera.js dinamicamente
    const script = document.createElement('script');
    script.src = "../helpers/camera.js";  // Altere o caminho conforme necessário
    document.head.appendChild(script);
  }
}
