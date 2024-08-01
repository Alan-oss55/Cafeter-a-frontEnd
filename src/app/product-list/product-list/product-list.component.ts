import { Component, OnInit } from '@angular/core';
import { ProductCategory } from 'src/app/product-category/product-category';
import { ProductsService } from 'src/app/products/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{


  constructor(
    private productService: ProductsService
  ){}

  ngOnInit(): void {
   
  }
 
  
}
