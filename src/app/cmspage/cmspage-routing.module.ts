import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContacFormComponent } from './contac-form/contac-form.component';
import { PageComponent } from './page/page.component';
const routes: Routes = [
  {path: 'page/:slug', component: PageComponent},
  {path: 'contact' , component: ContacFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmspageRoutingModule { }
