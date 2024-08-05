import { Component, OnInit } from '@angular/core';
import { ProductCategory } from 'src/app/product-category/product-category';
import { ProductsService } from 'src/app/products/products.service';
import { ProductList } from './product-list';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
   
  menuItems: ProductCategory[] = [];
  selectedIndex: number = 0;
  products: ProductList[] = [];
  productFiltered: ProductList[] = [];

  constructor(
    private productService: ProductsService){
  }

  ngOnInit(): void {
   this.gerCategorys();
   this.filterProduct();
  }

  onSelect(index : number){
    this.selectedIndex = index;
    this.filterProduct();
  }

 
  gerCategorys(){
    this.productService.getAllCategoria()
      .subscribe(
        (res =>{
          this.menuItems = res;
          this.getProducts();
        }),
        error =>{
          console.error(error);
        }
      )
  }

  getProducts(){
    this.productService.getProducts()
      .subscribe(
        (res =>{
          this.products = res;
          this.filterProduct(); 
        }),
        error =>{
          console.error(error)
        }
      )
  }

  filterProduct(){
    const filterProduct = this.menuItems[this.selectedIndex].id
    this.productFiltered = this.products.filter(product => product.categoriaId.id === filterProduct)
    console.log(this.productFiltered)
  }
}
