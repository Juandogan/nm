import { Component, OnInit } from '@angular/core';
import {Subject} from 'rxjs';
import { Articulos } from 'src/app/models/articulos';
import { CrudService } from 'src/app/services/crud.service';
 
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  searchTerm$ = new Subject<string>();
  buscar:any
  buscarMensaje:string = ""
  claseAnima = false;
  loading = true;
public color = "rgb(33,33,33)"

articulos: Articulos[] = [];

loader= true;


  constructor(public crudService:CrudService) { }

  ngOnInit(): void {
 
    this.pedirArticulos()
  }


  pedirArticulos(){    // llamo al servicio del crud y susbscribo la respuesta luego guardo la data en el front en el servicio y en este componente.
    this.crudService.getArticulos().subscribe(res =>{
    this.articulos = res as Articulos[]; // guardo resultados de la peticion en variable productos del este componente.
    this.loading = false
    window.scroll(0,0)
  
  
      });//fin de subscribe
    } //fin de pedirProductos


}
