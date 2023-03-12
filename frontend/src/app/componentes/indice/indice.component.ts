import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-indice',
  templateUrl: './indice.component.html',
  styleUrls: ['./indice.component.css']
})
export class IndiceComponent implements OnInit {

  @Input('data') data : any ;

  
  link= ""
  titulo =''
  autor = ""
  descripcion= ''
  ruta=''

  link2= ""
  titulo2 =''
  autor2 = ""
  descripcion2= ''
  ruta2=''

  link3= ""
  titulo3 =''
  autor3 = ""
  descripcion3= ''
  ruta3=''

  link4= ""
  titulo4 =''
  autor4 = ""
  descripcion4= ''
  ruta4=''

  link5= ""
  titulo5 =''
  autor5 = ""
  descripcion5=''
  ruta5=''

  link6= ""
  titulo6 =''
  autor6 = ""
  descripcion6= ''
  ruta6=''

  link7= ""
  titulo7 =''
  autor7 = ""
  descripcion7= ''
  ruta7=''

  link8= ""
  titulo8 =''
  autor8 = ""
  descripcion8= ''
  ruta8=''



  constructor() {
   
   }

  ngOnInit(): void {
  
    this.descripcion= this.data?.resultadoCategoria1
    this.link = this.data?.resultadoImagen
    this.titulo= this.data?.art1
    this.ruta =this.data?.resultadoID

    this.descripcion2= this.data?.resultadoCategoria2
    this.link2 = this.data?.resultadoImagen2
    this.titulo2= this.data?.art2
    this.ruta2 =this.data?.resultadoID2

    
    this.descripcion3= this.data?.resultadoCategoria3
    this.link3 = this.data?.resultadoImagen3
    this.titulo3= this.data?.art3
    this.ruta3 =this.data?.resultadoID3

    this.descripcion4= this.data?.resultadoCategoria4
    this.link4 = this.data?.resultadoImagen4
    this.titulo4= this.data?.art4
    this.ruta4 =this.data?.resultadoID4

    this.descripcion5= this.data?.resultadoCategoria5
    this.link5 = this.data?.resultadoImagen5
    this.titulo5= this.data?.art5
    this.ruta5 =this.data?.resultadoID5

    this.descripcion6= this.data?.resultadoCategoria6
    this.link6 = this.data?.resultadoImagen6
    this.titulo6= this.data?.art6
    this.ruta6 =this.data?.resultadoID6

    
    this.descripcion7= this.data?.resultadoCategoria7
    this.link7 = this.data?.resultadoImagen7
    this.titulo7= this.data?.art7
    this.ruta7 =this.data?.resultadoID7

    this.descripcion8= this.data?.resultadoCategoria8
    this.link8 = this.data?.resultadoImagen8
    this.titulo8= this.data?.art8
    this.ruta8 =this.data?.resultadoID8
  }



  goToLink(url: string){ window.open(url, "_blank"); }

  
  

}
