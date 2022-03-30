import { Component, OnInit } from '@angular/core';
import {Subject} from 'rxjs';
// import { BuscadorObservableService } from 'src/app/service/buscador-observable.service';
// import { LoadingObservableService } from 'src/app/service/loading-observable.service';


@Component({
  selector: 'app-a-nav-bar',
  templateUrl: './a-nav-bar.component.html',
  styleUrls: ['./a-nav-bar.component.css']
})
export class ANavBarComponent implements OnInit {
  
  searchTerm$ = new Subject<string>();
  buscar:any
  buscarMensaje:string = ""
  claseAnima = false;
public color = "rgb(33,33,33)"

  constructor() { }

  ngOnInit(): void {
  }

}
