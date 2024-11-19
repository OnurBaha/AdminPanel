import { Component, ElementRef, signal, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal-popup',
  standalone: true,
  imports: [],
  templateUrl: './modal-popup.component.html',
  styleUrl: './modal-popup.component.css'
})
export class ModalPopupComponent {

  @ViewChild('model2') modalPoup2 :ElementRef |undefined;
  isModel4Open = signal(false);
  isModelOpen: boolean = false;

  openByClassName() {
    this.isModelOpen = !this.isModelOpen;
  }

  openBySignal() {
    this.isModel4Open.set(true)
  }
  closeBySignal() {
    this.isModel4Open.set(false)
  }

  openByViewChild() {
    if(this.modalPoup2) {
      this.modalPoup2.nativeElement.style.display = "block"
    } 
  }
  closeByViewChaild() {
    if(this.modalPoup2) {
      this.modalPoup2.nativeElement.style.display = "none"
    }
  }

  openByDocument() {
    const modal = document.getElementById("myModal");
    if(modal != null) {
      modal.style.display = "block"
    }
  }
  closeModelByDocuement() {
    const modal = document.getElementById("myModal");
    if(modal != null) {
      modal.style.display = "none"
    }
  }
}