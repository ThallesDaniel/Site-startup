import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";
import {SoftwaresComponent} from "./components/softwares/softwares.component";
import {AppContainerComponent} from "./components/app-container/app-container.component";
import {PoliticaPrivComponent} from "./pages/politica-priv/politica-priv.component";

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component:  AppContainerComponent},
  { path: 'softwares', component: SoftwaresComponent },
  { path: 'politica-priv', component: PoliticaPrivComponent },
  /*{ path: 'sobre-nos', component: SobreNosComponent },*/
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
