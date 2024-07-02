import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categorias } from './categorias';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  url = 'http://localhost:8080/categoria/';


  constructor(
    private http: HttpClient
  ) { }

  //Listar todos
  getAll(){
    return this.http.get<Categorias[]>(this.url + 'listar')
  }

  //Obtener por id
  getById(id: number){
    return this.http.get<Categorias>(this.url + id);
  }

  //crear
  createCategoria(categoria : Categorias){
    return this.http.post<Categorias> (this.url + 'crear', categoria);
  }

  //eliminar
  deleteCategoria(id: number){
    return this.http.delete(this.url + id)
  }
}
