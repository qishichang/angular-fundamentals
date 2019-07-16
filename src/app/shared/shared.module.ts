import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CollapsibleWellComponent, SimpleModalComponent } from './components';
import { ModalTriggerDirective } from './directives';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    CollapsibleWellComponent,
    SimpleModalComponent,
    ModalTriggerDirective
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    CollapsibleWellComponent,
    SimpleModalComponent,
    ModalTriggerDirective,
  ]
})
export class SharedModule { }
