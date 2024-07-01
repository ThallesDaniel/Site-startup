import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";
import {SoftwaresComponent} from "./components/softwares/softwares.component";
import {AppContainerComponent} from "./components/app-container/app-container.component";

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component:  AppContainerComponent},
  { path: 'softwares', component: SoftwaresComponent },
  /*{ path: 'sobre-nos', component: SobreNosComponent },*/
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
