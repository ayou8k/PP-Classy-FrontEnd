import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementmoduleRoutingModule } from './elementmodule-routing.module';
import { ElementmoduleListComponent } from './elementmodule-components/elementmodule-list/elementmodule-list.component';
import { ElementmoduleAddComponent } from './elementmodule-components/elementmodule-add/elementmodule-add.component';
import { ElementmoduleEditComponent } from './elementmodule-components/elementmodule-edit/elementmodule-edit.component';
import {MaterialModule} from '../material/material.module';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [ElementmoduleListComponent, ElementmoduleAddComponent, ElementmoduleEditComponent],
  imports: [
    CommonModule,
    ElementmoduleRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class ElementmoduleModule { }
