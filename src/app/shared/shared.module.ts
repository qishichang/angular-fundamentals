import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CollapsibleWellComponent, SimpleModalComponent } from './components';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    CollapsibleWellComponent,
    SimpleModalComponent
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    CollapsibleWellComponent,
    SimpleModalComponent,
  ]
})
export class SharedModule { }
