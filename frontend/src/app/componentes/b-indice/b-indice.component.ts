import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-b-indice',
  templateUrl: './b-indice.component.html',
  styleUrls: ['./b-indice.component.css']
})
export class BIndiceComponent implements OnInit {

  @Input('data') data : any ;

  
  link=''
  titulo =''
  descripcion= ''
  ruta=''
  constructor() {
   
   }

  ngOnInit(): void {

    this.descripcion = this.data[0].subtitulo
    this.link = this.data[0].imagen1
    this.titulo = this.data[0].titulo
    this.ruta =this.data[0]._id
  }

  cambioImagen1(){
    this.link = this.data[11].imagen1
    this.descripcion= this.data[11].subtitulo
    this.titulo= this.data[11].titulo
    this.ruta =this.data[11]._id
  }

  cambioImagen2(){
    this.link = this.data[10].imagen1
    this.descripcion= this.data[10].subtitulo
    this.titulo= this.data[10].titulo
    this.ruta =this.data[10]._id
  }
  cambioImagen3(){
    this.link = this.data[5].imagen1
     this.descripcion= this.data[5].subtitulo
     this.titulo= this.data[5].titulo
     this.ruta =this.data[5]._id
  }
    cambioImagen4(){
    this.link = this.data[4].imagen1
    this.descripcion= this.data[4].subtitulo
    this.titulo= this.data[4].titulo
    this.ruta =this.data[4]._id
  }
  cambioImagen5(){
    this.link = this.data[12].imagen1
    this.descripcion= this.data[12].subtitulo
    this.titulo= this.data[12].titulo
    this.ruta =this.data[12]._id
  }
  cambioImagen6(){
    this.link = this.data[5].imagen1
    this.descripcion= this.data[5].subtitulo
    this.titulo= this.data[5].titulo
    this.ruta =this.data[5]._id
  }
  cambioImagen7(){
    this.link = this.data[6].imagen1
    this.descripcion= this.data[6].subtitulo
    this.titulo= this.data[6].titulo
    this.ruta =this.data[6]._id
  }
  cambioImagen8(){
    this.link = this.data[7].imagen1
    this.descripcion= this.data[7].subtitulo
    this.titulo= this.data[7].titulo
    this.ruta =this.data[7]._id
  }




  

}
