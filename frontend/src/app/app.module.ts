import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ANavBarComponent } from './componentes/a-nav-bar/a-nav-bar.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

//ANGULAR MATERIAL
import {MatIconModule} from '@angular/material/icon';
import { APortadaComponent } from './componentes/a-portada/a-portada.component';
import { BIndiceComponent } from './componentes/b-indice/b-indice.component';



@NgModule({
  declarations: [
    AppComponent,
    ANavBarComponent,
    APortadaComponent,
    BIndiceComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
