export class Articulos {

    constructor(_id ='', fecha ='',fechaMod ='', titulo='', tituloAlt='', tituloImagen='', subtitulo='', nota='', imagen1='', imagen2=''
    ,imagen3='',fotografia='', edicionFotografia='',autor='', likes=0,categoria='', vistas=0,hash='' ){

        
this._id = _id;
this.fecha = fecha
this.fechaMod = fechaMod
this.titulo = titulo
this.tituloAlt = tituloAlt
this.subtitulo = subtitulo
this.nota = nota
this.imagen1 = imagen1
this.imagen2 = imagen2
this.imagen3 = imagen3
this.fotografia = fotografia
this.edicionFotografia = edicionFotografia
this.autor = autor
this.categoria = categoria
this.vistas = vistas
this.imagen3 =imagen3
this.likes = likes
this.tituloImagen = tituloImagen
this.hash = hash

    }

    id: number = 0 
    marginLeft?:number;

    _id: string
    fecha:string;
    fechaMod:string;
    
    titulo:string;
    tituloAlt:string;
    subtitulo:string;
    hash:string;
    nota:string;
    imagen1:string;
    imagen2:string;
    imagen3:string;
    fotografia:string;
    edicionFotografia:string;
    autor:string;

    categoria:string;
    likes:number;
    vistas:number;
    tituloImagen:string;
}



