import { Component, OnInit } from '@angular/core';
import { ModalDialogParams } from '@nativescript/angular/modal-dialog';

@Component({
  selector: 'app-modal-data',
  templateUrl: './modal-data.component.html',
  styleUrls: ['./modal-data.component.css']
})
export class ModalDataComponent implements OnInit {
  modalText_1 = 'Register your desire account number for payment of your pension. If you dont have norwegian account number please contact us.';
  modalText_2 = 'Current Account Number';
  modalText_3 = '1234 56 78901';
  constructor(
    private _params: ModalDialogParams
  ) { }

  ngOnInit(): void {
    console.log('In Modal', this._params.context);
  }

}
