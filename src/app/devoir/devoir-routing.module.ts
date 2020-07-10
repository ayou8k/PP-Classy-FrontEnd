import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DevoirAddComponent} from "../devoir/devoir-components/devoir-add/devoir-add.component";
import {DevoirListComponent} from "../devoir/devoir-components/devoir-list/devoir-list.component";


const routes: Routes = [
  {path:'',component: DevoirListComponent},
  {path:'addDevoir/:id',component: DevoirAddComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevoirRoutingModule { }
