import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products/products.service';
import { ProductCategory } from './product-category';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {

  categorias: ProductCategory[] = [];

  responsiveOptions: any[] | undefined;

  constructor(
    private productService: ProductsService
  ){}

  ngOnInit(): void {
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
