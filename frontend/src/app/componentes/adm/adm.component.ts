import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { Articulos } from 'src/app/models/articulos';

@Component({
  selector: 'app-adm',
  templateUrl: './adm.component.html',
  styleUrls: ['./adm.component.css']
})
export class AdmComponent implements OnInit {
  

  //VARIABLES
  public fechaPublicacion =new Date();  
  loading = false;
  loader = false;
  articulos: Articulos[] = [] 
  articuloBusqueda:any
  busqueda="";
  table=true 
  nuevo=false
  resultadoID=""

  //inputs
  resultadoTitulo=""
  resultadoTitulo2=""
  resultadoTitulo3=""
  resultadoTitulo4=""
  resultadoTitulo5=""
  resultadoTitulo6=""
  resultadoTitulo7=""
  resultadoTitulo8=""
  aux=1



  constructor(public crudService:CrudService) { }

  ngOnInit(): void {

     this.pedirArticulos()

      
  }


  pedirUnArticulo(){
     this.crudService.getOneArticulo(this.busqueda)
    .subscribe(res=>{
      
      this.articuloBusqueda = res as Articulos[];        
      if(this.articuloBusqueda.length > 2){
      this.crudService.snack('No se encontro');
      
      return
      } 
  
            if(this.aux === 1 ){
          this.resultadoTitulo = this.articuloBusqueda?.titulo
          this.resultadoID = this.articuloBusqueda?._id
          this.busqueda = ""  
          this.aux = 2
        return
         }
         
      
           
         if(this.aux === 2){
          this.resultadoTitulo2 = this.articuloBusqueda?.titulo
          // this.resultadoID2 = this.articuloBusqueda?._id
          this.busqueda = "" 
          this.aux=3
          return
          }
           
                  
        // if(this.aux === 3){
        //   this.resultadoTitulo3 = this.articuloBusqueda?.titulo
        //   this.resultadoID3 = this.articuloBusqueda?._id
        //    this.busqueda = ""  
        //            this.aux=4
        //           return }
          
                       
        // if(this.aux === 4){
        //   this.resultadoTitulo4 = this.articuloBusqueda?.titulo
        //   this.resultadoID4 = this.articuloBusqueda?._id
        //    this.busqueda = ""   
        //    this.aux=5
        //    return
        //   }
              
        //    if(this.aux === 5){
        //     this.resultadoID5 = this.articuloBusqueda?._id
        //     this.resultadoTitulo5 = this.articuloBusqueda?.titulo
        //      this.busqueda = "" 
        //      this.aux = 6
        //     return  }
          
        //      if(this.aux === 6){
        //       this.resultadoID6 = this.articuloBusqueda?._id
        //       this.resultadoTitulo6 = this.articuloBusqueda?.titulo
        //        this.busqueda = ""  
        //       return }   
      
     })   
    
  }

  pedirArticulos(){    // llamo al servicio del crud y susbscribo la respuesta luego guardo la data en el front en el servicio y en este componente.
    this.crudService.getArticulos().subscribe(res =>{
    this.articulos = res as Articulos[]; // guardo resultados de la peticion en variable productos.
    console.log(this.articulos)
    // this.cantArt = this.articulos.length
    this.articulos = this.articulos.reverse()
    // this.loader2 = false
    
      });//fin de subscribe
    } //fin de pedirProductos


    eliminarArticulo(id:any){
      // this.activo = true;
      this.crudService.deleteArticulo(id).subscribe(res =>{this.crudService.snack(res);   this.pedirArticulos(); })
      
      }
      
      
      editarArticulo(articulos:Articulos){
      
      //  this.crudService.unArticulo = articulos
      //  this.categoria = this.crudService.unArticulo.categoria
      //  this.titulo = this.crudService.unArticulo.titulo
      //  this.tituloAlt = this.crudService.unArticulo.tituloAlt
      //  this.subtitulo = this.crudService.unArticulo.subtitulo
      //  this.autor = this.crudService.unArticulo.autor 
      //  this.fotografia = this.crudService.unArticulo.fotografia 
      //  this.edicionFotografia = this.crudService.unArticulo.edicionFotografia
      // this.nota = this.crudService.unArticulo.nota
      // this.posicion = this.crudService.unArticulo.posicion
      
      }

}
