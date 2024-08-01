import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MenubarModule } from 'primeng/menubar';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './home/home/home.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ProductsModule } from './products/products.module';
import { HomeComponent } from './home/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BreadcrumbModule,
    MenubarModule,
    HttpClientModule,
    HomeModule,
    HttpClientModule,
    RouterModule,
    CommonModule,
    TableModule,
    ProductsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
