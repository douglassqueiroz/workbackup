import { Component, OnInit } from '@angular/core';


  
declare  function initializeCamera(): void;
@Component({
  selector: 'app-mostrar-camera',
  standalone: true,
  imports: [],
  templateUrl: './mostrar-camera.component.html',
  styleUrl: './mostrar-camera.component.css'
})
export class MostrarCameraComponent implements OnInit {
  ngOnInit() {
    // Chame a função initializeCamera quando o componente for inicializado
    document.addEventListener('DOMContentLoaded',()=>{
      initializeCamera();
    });
    
  }
}
