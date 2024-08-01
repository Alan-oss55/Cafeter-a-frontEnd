import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCategoryComponent } from '../product-category/product-category.component';
import { ProductListComponent } from '../product-list/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { SobreNosotrosComponent } from '../sobre-nosotros/sobre-nosotros.component';
import { DividerModule } from 'primeng/divider';

@NgModule({
  declarations: [
    ProductCategoryComponent,
    ProductListComponent,
    SobreNosotrosComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    CarouselModule,
    ButtonModule,
    TableModule,
    DividerModule
  ]
})
export class ProductsModule { }
