import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CmspageRoutingModule } from './cmspage-routing.module';
import { ContacFormComponent } from './contac-form/contac-form.component';
import { PageComponent } from './page/page.component';
import { WoweffectDirective } from './directive/woweffect.directive';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

@NgModule({
  declarations: [
    ContacFormComponent,
    PageComponent,
    WoweffectDirective,
    ReactiveFormComponent
    ],
  imports: [
    CommonModule,
    CmspageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
  ,
  bootstrap: [ContacFormComponent]
})
export class CmspageModule { 

  
}
