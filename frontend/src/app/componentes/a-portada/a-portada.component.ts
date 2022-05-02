import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-a-portada',
  templateUrl: './a-portada.component.html',
  styleUrls: ['./a-portada.component.css']
})
export class APortadaComponent implements OnInit {
  
  @Input('data') data : any ;


  constructor() { }

  ngOnInit(): void {
  }

  cut(value:any){
    var corte = value.slice(2)

   return corte
 }; 

}
