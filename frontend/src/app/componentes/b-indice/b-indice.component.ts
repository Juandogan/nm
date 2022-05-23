import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-b-indice',
  templateUrl: './b-indice.component.html',
  styleUrls: ['./b-indice.component.css']
})
export class BIndiceComponent implements OnInit {

  @Input('data') data : any ;

  
  link= ""
  titulo =''
  descripcion= ''
  ruta=''
  constructor() {
   
   }

  ngOnInit(): void {

    this.descripcion = this.data[0]?.resultadoCategoria
    this.link = this.data[0]?.resultadoImagen
    this.titulo = this.data[0]?.art1
    this.ruta =this.data[0]?.resultadoID
  }

  cambioImagen1(){

    this.descripcion = this.data[0].resultadoCategoria
    this.link= this.data[0].resultadoImagen
    this.titulo= this.data[0].art1
    this.ruta =this.data[0].resultadoID
  }

  cambioImagen2(){
    this.descripcion= this.data[0].resultadoCategoria2
    this.link = this.data[0].resultadoImagen2
    this.titulo= this.data[0].art2
    this.ruta =this.data[0].resultadoID2
  
  }
  cambioImagen3(){
    this.descripcion= this.data[0].resultadoCategoria3
    this.link = this.data[0].resultadoImagen3
    this.titulo= this.data[0].art3
    this.ruta =this.data[0].resultadoID3
  }
    cambioImagen4(){
      this.descripcion= this.data[0].resultadoCategoria4
      this.link = this.data[0].resultadoImagen4
      this.titulo= this.data[0].art4
      this.ruta =this.data[0].resultadoID4
  }
  cambioImagen5(){
    this.descripcion= this.data[0].resultadoCategoria5
    this.link = this.data[0].resultadoImagen5
    this.titulo= this.data[0].art5
    this.ruta =this.data[0].resultadoID5
  }
  cambioImagen6(){
    this.descripcion= this.data[0].resultadoCategoria6
    this.link = this.data[0].resultadoImagen6
    this.titulo= this.data[0].art6
    this.ruta =this.data[0].resultadoID6
  }
  cambioImagen7(){
    this.descripcion= this.data[0].resultadoCategoria7
    this.link = this.data[0].resultadoImagen7
    this.titulo= this.data[0].art7
    this.ruta =this.data[0].resultadoID7
  }
  cambioImagen8(){
    this.descripcion= this.data[0].resultadoCategoria8
    this.link = this.data[0].resultadoImagen8
    this.titulo= this.data[0].art8
    this.ruta =this.data[0].resultadoID8
  }



  goToLink(url: string){ window.open(url, "_blank"); }

  
  

}
