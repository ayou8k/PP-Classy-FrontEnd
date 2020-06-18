import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ElementmoduleListComponent} from './elementmodule-components/elementmodule-list/elementmodule-list.component';


const routes: Routes = [
  {path:'/:id',component: ElementmoduleListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElementmoduleRoutingModule { }
