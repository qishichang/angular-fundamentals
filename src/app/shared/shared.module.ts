import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CollapsibleWellComponent } from './components';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    CollapsibleWellComponent
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    CollapsibleWellComponent,
  ]
})
export class SharedModule { }
