import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicSelectComponent } from './fragments/dynamic-select/dynamic-select.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    DynamicSelectComponent
  ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ]
})
export class CoreModule { }
