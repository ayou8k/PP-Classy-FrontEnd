import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevoirRoutingModule } from './devoir-routing.module';
import { DevoirListComponent } from './devoir-components/devoir-list/devoir-list.component';
import { DevoirAddComponent } from './devoir-components/devoir-add/devoir-add.component';
import { DevoirEditComponent } from './devoir-components/devoir-edit/devoir-edit.component';
import {MaterialModule} from '../material/material.module';
import {FormsModule} from '@angular/forms';
import {DevoirService} from "./data/devoir.service";

@NgModule({
  declarations: [DevoirListComponent, DevoirAddComponent, DevoirEditComponent],
  imports: [
    CommonModule,
    DevoirRoutingModule,
    MaterialModule,
    FormsModule
  ],
  providers :[
    DevoirService,
  ]
})
export class DevoirModule { }
