import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DatospComponent } from './datosp/datosp.component';
import { TablaComponent } from './tabla/tabla.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'datosp', component: DatospComponent},
  {path:'tabla', component: TablaComponent},
  {path:'', redirectTo: 'datasp', pathMatch: 'full'},
  {path:'', redirectTo: 'datasp', pathMatch: 'full'},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
