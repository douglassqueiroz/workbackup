import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { MostrarCameraComponent } from './components/mostrar-camera/mostrar-camera.component';
import { BotoesCameraComponent } from './components/botoes-camera/botoes-camera.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    MostrarCameraComponent,
    BotoesCameraComponent
    ],
  imports: [
    CommonModule
  ]
})
export class AppModule { }
