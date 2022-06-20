import { Component, OnInit,Input } from '@angular/core';
import { Articulos } from 'src/app/models/articulos';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {
  articulos: Articulos[] = [] 
  articuloBusqueda:any
  busqueda="";
  nuevo=false;
  vistas : number = 0;
  fecha	  = ""
  fechaMod = new Date();    	        
  password = false; 
  password1 = "";
  public uploadedFiles: Array<File> = [];
  activo=true; //estilo 
  cambioPantalla = true;
  loader2 = true;
  cantArt:number = 0;
  filterPost=""
  posicion= 0
  loading2:boolean = false;
  loading3:boolean = false;
  loading4:boolean = false;
  loading5:boolean = false;
  archivoShow:boolean = false;
  nota1:any
  cambioPantalla1=false;
  tituloShow=false;
  subtituloShow=false;
  descripcionShow=false;
  imagenShow=false;
  tituloImagenShow = false;
  ocultar=true;
  ocultar2=true;
  inputDisable = true
  
  //inputs estos estan en NGMODEL en el html de cada input
  resultadoTitulo=""
  resultadoTitulo2=""
  resultadoTitulo3=""
  resultadoTitulo4=""
  resultadoTitulo5=""
  resultadoTitulo6=""
  resultadoTitulo7=""
  resultadoTitulo8=""

  
//JSON
id:string = ""
_id:string= "";
titulo:string = "";
tituloAlt:string = "";
subtitulo:string = "";
imagen1:string;
 
autor:string = "";
hash:string = "";
categoria:string = "";
fotografia:string = "";
edicionFotografia:string = "";
imagen2=""
imagen3=""
likes = 0



fechaPublicacion =new Date();  
art1:string =""
art2:string =""
art3:string =""
art4:string =""
art5:string =""
art6:string =""
art7:string =""
art8:string =""

resultadoID=""
resultadoID2=""
resultadoID3=""
resultadoID4=""
resultadoID5=""
resultadoID6=""
resultadoID7=""
resultadoID8=""

resultadoCategoria:string =""
resultadoCategoria2:string =""
resultadoCategoria3:string =""
resultadoCategoria4:string =""
resultadoCategoria5:string =""
resultadoCategoria6:string =""
resultadoCategoria7:string =""
resultadoCategoria8:string =""
resultadoImagen:string =""
resultadoImagen2:string =""
resultadoImagen3:string =""
resultadoImagen4:string =""
resultadoImagen5:string =""
resultadoImagen6:string =""
resultadoImagen7:string =""
resultadoImagen8:string =""

 





  @Input('data') nota : any ;
  constructor(public crudService:CrudService) { }

  ngOnInit(): void {
  }


  agregarPublicacion(){
    // this.loadingGuardar = true
    this.crudService.unArticulo.fecha = String(this.fechaPublicacion)
    this.crudService.unArticulo.titulo = this.titulo;
     this.crudService.unArticulo.subtitulo = this.subtitulo
     this.crudService.unArticulo.autor = this.autor
     this.crudService.unArticulo.imagen1 = this.imagen1
     this.crudService.unArticulo.imagen2 = this.imagen2
     this.crudService.unArticulo.imagen3 = this.imagen3

     this.crudService.unArticulo.art1 = this.resultadoTitulo
     this.crudService.unArticulo.art2 = this.resultadoTitulo2
     this.crudService.unArticulo.art3 = this.resultadoTitulo3
     this.crudService.unArticulo.art4 = this.resultadoTitulo4
     this.crudService.unArticulo.art5 = this.resultadoTitulo5
     this.crudService.unArticulo.art6 = this.resultadoTitulo6
     this.crudService.unArticulo.art7 = this.resultadoTitulo7
     this.crudService.unArticulo.art8 = this.resultadoTitulo8
     this.crudService.unArticulo.fechaMod = String(this.fechaMod)
    

      this.crudService.unArticulo.resultadoID = this.resultadoID
      this.crudService.unArticulo.resultadoID2 = this.resultadoID2
      this.crudService.unArticulo.resultadoID3 = this.resultadoID3
      this.crudService.unArticulo.resultadoID4 = this.resultadoID4
      this.crudService.unArticulo.resultadoID5 = this.resultadoID5
      this.crudService.unArticulo.resultadoID6 = this.resultadoID6
      this.crudService.unArticulo.resultadoID7 = this.resultadoID7
      this.crudService.unArticulo.resultadoID8 = this.resultadoID8

      this.crudService.unArticulo.resultadoImagen = this.resultadoImagen
      this.crudService.unArticulo.resultadoImagen2 = this.resultadoImagen2
      this.crudService.unArticulo.resultadoImagen3 = this.resultadoImagen3
      this.crudService.unArticulo.resultadoImagen4 = this.resultadoImagen4
      this.crudService.unArticulo.resultadoImagen5 = this.resultadoImagen5
      this.crudService.unArticulo.resultadoImagen6 = this.resultadoImagen6
      this.crudService.unArticulo.resultadoImagen7 = this.resultadoImagen7
      this.crudService.unArticulo.resultadoImagen8 = this.resultadoImagen8

    this.crudService.unArticulo.categoria = "revista"
    this.crudService.unArticulo._id  = this._id




         
      if( this.crudService.unArticulo?._id)
      {  

            this.crudService.modificarArticulo(this.crudService.unArticulo)
      .subscribe(res => {
        // this.loadingGuardar= false
        this.crudService.snack('Modificado!')});
        // this.reload()
     
    }
      else  {
        this.crudService.unArticulo.fecha =  String(this.fechaPublicacion);    
        this.crudService.unArticulo.categoria = "revista" // guado Revista paa filtrar
        this.crudService.unArticulo.titulo = this.titulo;
        this.crudService.unArticulo.subtitulo = this.subtitulo
        
    this.crudService.unArticulo.fechaMod = String(this.fechaPublicacion)
    this.crudService.unArticulo.autor = this.articuloBusqueda?.autor
    this.crudService.unArticulo.imagen1 = this.articuloBusqueda?.imagen1
    this.crudService.unArticulo.imagen2 = this.articuloBusqueda?.imagen2
    this.crudService.unArticulo.imagen3 = this.articuloBusqueda?.imagen3
    console.log('por aca',this.crudService.unArticulo.imagen3)
    // this.crudService.unArticulo.fecha = String(this.fechaPublicacion)
    // this.crudService.unArticulo.titulo = this.titulo;
    // this.crudService.unArticulo.subtitulo = this.subtitulo
    // this.crudService.unArticulo.art1 = this.resultadoTitulo
    // this.crudService.unArticulo.art2 = this.resultadoTitulo2
    // this.crudService.unArticulo.art3 = this.resultadoTitulo3
    // this.crudService.unArticulo.art4 = this.resultadoTitulo4
    // this.crudService.unArticulo.art5 = this.resultadoTitulo5
    // this.crudService.unArticulo.art6 = this.resultadoTitulo6
    // this.crudService.unArticulo.art7 = this.resultadoTitulo7
    // this.crudService.unArticulo.art8 = this.resultadoTitulo8
    // this.crudService.unArticulo.fechaMod = String(this.fechaMod)
    
    //  this.crudService.unArticulo.resultadoCategoria = this.resultadoCategoria
    //  this.crudService.unArticulo.resultadoCategoria2 = this.resultadoCategoria2
    //  this.crudService.unArticulo.resultadoCategoria3 = this.resultadoCategoria3
    //  this.crudService.unArticulo.resultadoCategoria4 = this.resultadoCategoria4
    //  this.crudService.unArticulo.resultadoCategoria5 = this.resultadoCategoria5
    //  this.crudService.unArticulo.resultadoCategoria6 = this.resultadoCategoria6
    //  this.crudService.unArticulo.resultadoCategoria7 = this.resultadoCategoria7
    //  this.crudService.unArticulo.resultadoCategoria8 = this.resultadoCategoria8

    //  this.crudService.unArticulo.resultadoID = this.resultadoID
    //  this.crudService.unArticulo.resultadoID2 = this.resultadoID2
    //  this.crudService.unArticulo.resultadoID3 = this.resultadoID3
    //  this.crudService.unArticulo.resultadoID4 = this.resultadoID4
    //  this.crudService.unArticulo.resultadoID5 = this.resultadoID5
    //  this.crudService.unArticulo.resultadoID6 = this.resultadoID6
    //  this.crudService.unArticulo.resultadoID7 = this.resultadoID7
    //  this.crudService.unArticulo.resultadoID8 = this.resultadoID8

    //  this.crudService.unArticulo.resultadoImagen = this.resultadoImagen
    //  this.crudService.unArticulo.resultadoImagen2 = this.resultadoImagen2
    //  this.crudService.unArticulo.resultadoImagen3 = this.resultadoImagen3
    //  this.crudService.unArticulo.resultadoImagen4 = this.resultadoImagen4
    //  this.crudService.unArticulo.resultadoImagen5 = this.resultadoImagen5
    //  this.crudService.unArticulo.resultadoImagen6 = this.resultadoImagen6
//        this.crudService.unArticulo.resultadoImagen7 = this.resultadoImagen7
//     this.crudService.unArticulo.resultadoImagen8 = this.resultadoImagen8

                  this.crudService.unArticulo.categoria = "revista"
                  this.crudService.unArticulo._id  = this._id
                  this.crudService.unArticulo.autor = this.articuloBusqueda?.autor     
                  this.crudService.unArticulo.imagen1 = this.articuloBusqueda?.imagen1
                  this.crudService.unArticulo.imagen2 = this.imagen2
                  this.crudService.unArticulo.imagen3 = this.imagen3
                  // console.log('antes de agregar', this.crudService.unArticulo.imagen2 )

                  console.log('7 ty 8 ', this.crudService.unArticulo.resultadoID7)
                  console.log('7 ty 8 ', this.crudService.unArticulo.resultadoID8)
                  
                  console.log('7 ty 8 ', this.crudService.unArticulo.resultadoCategoria7)
                  console.log('7 ty 8 ', this.crudService.unArticulo.resultadoCategoria8)

console.log(this.crudService.unArticulo)
        this.crudService.addArticulo(this.crudService.unArticulo)
        .subscribe(res => { this.crudService.snack('creado'); 
        // this.loadingGuardar= false
        // this.reload()
          })
    }
    
    };
    
}
