import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [ColorPickerComponent],
  declarations: [ ColorPickerComponent]
})
export class ToggleColorPickerModule { }
