import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Front-end-cafeteria';
  items: MenuItem[] | undefined;
 

  constructor(){
    this.items = [
      {icon: 'pi pi-home', routerLink: 'home'},
      {label: 'Categorias', routerLink: 'categorias'},
      {label: 'Productos', routerLink: 'productos'},
      {label: 'Menú', routerLink:'menu'},
      {label: 'contactos' }
    ]
  
  }
}
