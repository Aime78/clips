import { Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-modal',

  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() modalID = ''
  constructor(public modal: ModalService, public el: ElementRef){
 
  }

  ngOnInit() {
    document.body.appendChild(this.el.nativeElement)
  }

  ngOnDestroy(){
    document.body.removeChild(this.el.nativeElement)
  }

  closeModal(){
    this.modal.toggleModal(this.modalID)
  }
}
