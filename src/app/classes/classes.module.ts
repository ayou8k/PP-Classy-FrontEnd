import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassesRoutingModule } from './classes-routing.module';
import { ClassComponent } from './class/class.component';
import {MaterialModule} from '../material/material.module';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [ClassComponent],
  imports: [
    CommonModule,
    ClassesRoutingModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    ClassComponent
  ]
})
export class ClassesModule { }
