import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { ModalDialogOptions, ModalDialogService } from "@nativescript/angular/modal-dialog";
import { ModalDataComponent } from './modal-data/modal-data.component';
import { SelectedIndexChangedEventData, ValueList } from "nativescript-drop-down";

@Component({
  selector: 'app-pension-info',
  templateUrl: './pension-info.component.html',
  styleUrls: ['./pension-info.component.css']
})
export class PensionInfoComponent implements OnInit {
  title = 'My Pension Payments';
  items = new ValueList([
    {value: 'equinor_pension_fund', display: 'Equinor Pension Fund'},
    {value: 'equinor_asa', display: 'Equinor ASA Operating Pension'}
  ]);
  public selectedIndex = 1;
  constructor(
    private _modalService: ModalDialogService,
    private _vcRef: ViewContainerRef
  ) { }

  ngOnInit(): void {
  }

  onTap(): void {
    const options: ModalDialogOptions = {
      viewContainerRef: this._vcRef,
      context: { data: 'Hello Modal' },
      fullscreen: false
    };

    this._modalService.showModal(ModalDataComponent, options)
      .then((result: string) => {
        console.log('closed');
        console.log(result);
      });
  }

  onSelectedIndexChange(args: SelectedIndexChangedEventData) {
    console.log(this.items.getValue(args.newIndex));
    console.log(`Drop Down selected index changed from ${args.oldIndex} to ${args.newIndex}`);
  }

  onopen() {
    console.log("Drop Down opened.");
  }

  onclose() {
    console.log("Drop Down closed.");
  }

}
