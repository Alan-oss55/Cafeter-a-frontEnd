import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MenubarModule } from 'primeng/menubar';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    MenubarModule
  ],
  exports: [ // Asegúrate de exportar HomeComponent si se usa en otros módulos
    HomeComponent
  ]
})
export class HomeModule { }
