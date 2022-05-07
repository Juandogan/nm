import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css'],
  // encapsulation: ViewEncapsulation.None,
})
export class ArticuloComponent implements OnInit {

  constructor(private ruta:ActivatedRoute, public crudService:CrudService,private location: Location) { }

  nota:any
  auxContador:number=0

  ngOnInit(): void {
      window.scroll(0,0)
      this.ruta.data.subscribe((data)=>{
      this.nota = Object.entries(data).map(i => i[1]);
      this.auxContador =  this.nota[0].vistas
      })};

      saltos2(data:string){
        var aux2 = data.split('<h2>').join(`<h2 style=" font-weight: 700; 
  line-height: 32px;
  letter-spacing: -1px;
  font-size:25px!important;
  color:orange;
  margin-bottom:15px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;};">
   `)
         
   aux2 = aux2.split('<h3').join(`<h3 style="font-weight: 400; 
   line-height: 30px;
   letter-spacing: 0px;
   font-size:22px;
   color:orange;
   margin-bottom:10px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;"`)
      
  aux2 = aux2.split('<p').join(`<p style="
                                    font-weight: 400;
                                    margin-top:-10px;
                                    font-size: 18px; 
                                    line-height: 28px;
                                    color:rgb(68, 68, 68);
                                    text-align:justify;  
                           text-justify:inter-character;
                                    "`)
                                                                            
                                          // aux2 = aux2.split('<strong').join('<strong style="font-size:14px;  font-weight: 800;"')
                                          // aux2 = aux2.split('</p></strong>').join('</p></b>')

                                          // <img style="width:100%; margin-top:10px" src="http://168.197.50.191/upload/_BTJMOy-ce0StAhwmUC8V_AN.jpg">
                                          

                                          

                                          aux2 = aux2.split('<img').join('<img style="width:100%; margin-top:10px; margin-bottom:10px"')
                                          
                                          aux2 = aux2.split('<strong>').join('<strong style="font-size:16px;line-height: 0px!important; ">')
                                          aux2 = aux2.split('https://www.youtube.com/watch?v=').join('https://www.youtube.com/embed/')
                                          aux2 = aux2.split(' ,').join(', ')
                                          aux2 = aux2.split(' .').join('. ')
                                          aux2 = aux2.split('<figure class="media"><oembed url="').join('<iframe width="100%" height="515" src="')
                                          aux2 = aux2.split('<h4>').join('<h4 style="text-align:center; font-size:15px; margin-top:-20px; margin-bottom:30px;">')
                                          aux2 = aux2.split('"></oembed></figure>').join('" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
      
                                          aux2 = aux2.split('<img style="width:100%; margin-top:10px" src="').join('<a href="')
                                          aux2 = aux2.split('ng">').join('ng"></a>')
                                          aux2 = aux2.split('pg">').join('pg"></a>')
      
                                          
      // console.log('sa' + aux2)
      console.log(this.nota)
        return (aux2)
      
      
         };
   cut(value:any){
    var corte = value.slice(2)

   return corte
 }; 

 sumarContador(){
 
  //incrementa el contador
  this.crudService.unArticulo.vistas = this.auxContador + 1
 
  this.crudService.unArticulo._id = this.nota[0]._id
  this.crudService.unArticulo.imagen1 = this.nota[0].imagen1
  this.crudService.unArticulo.imagen2 = this.nota[0].imagen2
  this.crudService.unArticulo.imagen3 = this.nota[0].imagen3
  this.crudService.unArticulo.categoria = this.nota[0].categoria;
  this.crudService.unArticulo.titulo = this.nota[0].titulo;
  this.crudService.unArticulo.fecha  =  String(this.nota[0].fechaPublicacion);
  this.crudService.unArticulo.subtitulo = this.nota[0].subtitulo;
  this.crudService.unArticulo.autor = this.nota[0].autor
  this.crudService.unArticulo.fotografia = this.nota[0].fotografia
  this.crudService.unArticulo.edicionFotografia = this.nota[0].edicionFotografia
  this.crudService.unArticulo.nota = this.nota[0].nota


      // this.crudService.unProducto.fecha = String(this.fachaPublicacion)

    this.crudService.modificarArticulo(this.crudService.unArticulo)
    .subscribe(res => { console.log(res) })
        }
  

 

  

   ngOnDestroy(){
  this.sumarContador()
 
  }

};