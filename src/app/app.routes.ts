import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";
import {SoftwaresComponent} from "./components/softwares/softwares.component";
import {AppContainerComponent} from "./components/app-container/app-container.component";
import {SobreNosComponent} from "./components/sobre-nos/sobre-nos.component";
import {InfosComponent} from "./components/infos/infos.component";
//import {SoftwaresComponent} from "./components/softwares/softwares.component";
export const routes: Routes = [
  { path: 'home', component:  AppContainerComponent},
  { path: 'softwares', component: SoftwaresComponent },
  /*{ path: 'sobre-nos', component: SobreNosComponent },*/
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
