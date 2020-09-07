import { ToastComponent } from './toast.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [ToastComponent],
  entryComponents: [ToastComponent],
  imports: [
    CommonModule
  ]
})
export class ToastModule { }
