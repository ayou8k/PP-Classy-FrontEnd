import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EtudiantemListComponent} from './etudiantem-components/etudiantem-list/etudiantem-list.component';
import {ForumcoursComponent} from './etudiantem-components/forumcours/forumcours.component';



const routes: Routes = [
  {path:'',component: EtudiantemListComponent},
  {path:'cours/:id',component: ForumcoursComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtudiantemRoutingModule { }
