import { NgModule } from '@angular/core';
import { RouterModule, Routes,PreloadAllModules  } from '@angular/router';
import { ArticuloComponent } from './componentes/articulo/articulo.component';
import { MainComponent } from './componentes/main/main.component';
import { AdmComponent } from './componentes/adm/adm.component';
import { SuscripcionComponent } from './componentes/suscripcion/suscripcion.component';
import { ResolveNotaService } from './services/resolve-nota.service';

const routes: Routes = [ 
  {path:'', component: MainComponent},
  {path:'articulo/:_id', component: ArticuloComponent, resolve: {data: ResolveNotaService}},
  {path:'suscripcion', component: SuscripcionComponent},
  {path:'adm', component: AdmComponent}

];



@NgModule({
  imports: [RouterModule.forRoot(routes,{ preloadingStrategy: PreloadAllModules, scrollPositionRestoration: "top",   scrollOffset: [0, 0], })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
