import { ToastComponent } from './toast/toast.component';
import { Injectable } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal'
import {Overlay} from '@angular/cdk/overlay'


@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private overlay: Overlay) { }

  show() {
    const overlayRef = this.overlay.create()
    const toastPortal = new ComponentPortal(ToastComponent)
    overlayRef.attach(toastPortal)
  }
}
