import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CollapsibleWellComponent } from './components';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    CollapsibleWellComponent
  ],
  exports: [
    CollapsibleWellComponent
  ]
})
export class SharedModule { }
