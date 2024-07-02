import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './productos/productos/productos.component';
import { CategoriasComponent } from './categorias/categorias/categorias.component';
import { MenuComponent } from './menu/menu/menu.component';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'menu', component: MenuComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'categorias', component: CategoriasComponent},
  {path: '**', redirectTo: '', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
