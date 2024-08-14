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
import { FooterComponent } from './footer/footer.component';
import { MessageService } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
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
    FormsModule,
    InputNumberModule,
    ToastModule,
    BrowserAnimationsModule,
    ButtonModule
    
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
