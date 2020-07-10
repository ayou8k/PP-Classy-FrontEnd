import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtudaintEM } from './data/etudaint-e-m.service';
import { EtudiantemRoutingModule } from './etudiantem-routing.module';
import { EtudiantemListComponent } from './etudiantem-components/etudiantem-list/etudiantem-list.component';
import { ForumcoursComponent } from './etudiantem-components/forumcours/forumcours.component';
// import { EtudiantemEditComponent } from './etudiantem-components/etudiantem-edit/etudiantem-edit.component';
import {MaterialModule} from '../material/material.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [EtudiantemListComponent, ForumcoursComponent],
  imports: [
    CommonModule,
    EtudiantemRoutingModule,
    MaterialModule,
    FormsModule
  ],
  providers :[
    EtudaintEM,
  ]
})
export class EtudiantemModule { }
