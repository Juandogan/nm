import { Component, OnInit,Input } from '@angular/core';
import { Articulos } from 'src/app/models/articulos';
import { CrudService } from 'src/app/services/crud.service';
import moment from 'moment';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {
  comentario =""
  nombre =""
  articulos: Articulos[] = [] 
  formulario = false
  btnComentar = true
  mensaje = false

  @Input('data') nota : any ;

  comentarios:any
  constructor(public crudService:CrudService) { }

  ngOnInit(): void {
    console.log(this.nota)
    var aux = this.nota.comentarios
    if( aux  ){
      this.comentarios = aux.split("<hr>")
    }



  }


  enviar(){   const hoy = Date.now(); 
 
 var post =   moment(hoy).format("YYYY-MM-DD hh:mm") + ' ' + this.nombre  + ': ' + this.comentario
console.log(post)

  }


 
  agregarPublicacion(){ 
    if(this.nombre ==="" || this.comentario === ""){
       
   return
    }
else{


const hoy = Date.now(); 
if(this.nota.comentarios === undefined || this.nota.comentarios ===null){
var post =   moment(hoy).format("DD/MM/YY hh:mm") + ' ' +'<b>'+ this.nombre  +'</b>'+ ': ' + '<br>' + this.comentario + '<hr>'
} else {
var post =  this.nota.comentarios + '<div class="badge badge-secondary">' + moment(hoy).format("DD/MM/YY hh:mm") + '</div>' + ' ' + '<b>'+ this.nombre  +'</b>'+ ': ' + '<br>'
 + this.comentario + '<hr>'
}
  
    
      this.nota.comentarios = post    
      this.nota.contadorComentarios = 'Nuevo'
      
        if( this.crudService.unArticulo?._id)
      {  

            this.crudService.modificarArticulo(this.nota)
                  .subscribe(res => { this.comentario = "" ;this.nombre ="";               

                });
                    
        
               // this.reload()
     
    }
      else  {
        
console.log(this.crudService.unArticulo)
        this.crudService.addArticulo(this.nota)

        .subscribe(res => { this.comentario = "" ;this.nombre =""; 
  this.formulario=false;
        
        // this.reload()
          })
    }
    
    };
  }

}

