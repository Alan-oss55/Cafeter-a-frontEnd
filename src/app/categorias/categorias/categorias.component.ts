import { Component, OnInit } from '@angular/core';
import { Categorias } from './categorias';
import { CategoriasService } from './categorias.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  categorias: Categorias[] = [];
  categoria!: Categorias;

  constructor(
    private service: CategoriasService
  ){

  }

  ngOnInit(): void {
      this.getCategorias();
  }

  getCategorias(){
    this.service.getAll()
    .subscribe(
      (res) =>{
        this.categorias = res;
        console.log(this.categorias);
      },
      (error) =>{
        console.error(error);
      }
    )
  }

}
