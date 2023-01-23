import { Component, Input } from '@angular/core';
import { DialogContentBase, DialogRef } from '@progress/kendo-angular-dialog';

@Component({
  selector: 'user-info',
  template: `
    <kendo-dialog-titlebar>
    <div style="font-size: 18px; line-height: 1.3em;">My header</div>
  </kendo-dialog-titlebar>
  <div>
  <p>Hello this is UserInfoComponent </p></div>
  <kendo-dialog-actions>
  <button kendoButton (click)="onCancelAction()">Cancel</button>
  <button kendoButton (click)="onPrimaryAction()" themeColor="primary">Submit</button>
</kendo-dialog-actions>
    `,
})
export class UserInfoComponent extends DialogContentBase {
  constructor(public override dialog: DialogRef) {
    super(dialog);
  }

  onCancelAction(): void {
    this.dialog.close({ text: 'Cancel' });
  }
  onPrimaryAction(): void {
    this.dialog.close({ text: 'Submit' });
  }
}
