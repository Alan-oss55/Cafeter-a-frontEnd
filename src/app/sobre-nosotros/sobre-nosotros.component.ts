import { Component, OnInit } from '@angular/core';
import { ProductCategory } from '../product-category/product-category';
import { NavigationEnd, Router } from '@angular/router';
import { ProductsService } from '../products/products.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sobre-nosotros',
  templateUrl: './sobre-nosotros.component.html',
  styleUrls: ['./sobre-nosotros.component.css']
})
export class SobreNosotrosComponent implements OnInit{
  isMenuActive : boolean = false;
  categorias: ProductCategory[] = [];

  responsiveOptions: any[] | undefined;

  constructor( private router: Router,
    private productService: ProductsService 
  ){ 
  }

  ngOnInit(): void {
    this.router.events.subscribe(event =>{
      if(event instanceof NavigationEnd){
        this.isMenuActive = this.router.url.includes("/menu");
      }
    })

    this.getAllCategory();
  }

  getAllCategory(){
    this.productService.getAllCategoria()
    .subscribe(
      (res =>{
        this.categorias = res;
        console.log(this.categorias)
      }
    ),
      error => {
        console.error(error);
      }
    )
  }
}
