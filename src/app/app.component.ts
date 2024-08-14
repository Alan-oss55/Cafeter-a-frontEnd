import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ProductsService } from './products/products.service';
import { ProductCategory } from './product-category/product-category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'Front-end-cafeteria';
  items: MenuItem[] | undefined;
  isMenuActive : boolean = false;
  categorias: ProductCategory[] = [];

  responsiveOptions: any[] | undefined;

  constructor( private router: Router,
    private productService: ProductsService 
  ){
    this.items = [
      {icon: 'pi pi-home', routerLink: 'home'},
      {label: 'Sobre nosotros', routerLink: 'es'},
      // {label: 'Categorias', routerLink: 'categorias'},
      {label: 'Menú', routerLink: 'menu'},
      {label: 'Contactos', command: () => this.scrollToContact()}
    ]
  
  }

  ngOnInit(): void {
    this.router.events.subscribe(event =>{
      if(event instanceof NavigationEnd){
        this.isMenuActive = this.router.url.includes("/menu");
      }
    })

  }
  
  navigateToContact() {
    this.router.navigate(['/es']).then(() => {
      this.scrollToContact();
    });
  }
  
  scrollToContact() {
    setTimeout(() => {
      const contactSection = document.getElementById('contacto');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 500);
  }

}
