import { Component } from '@angular/core';
import { UserInfoComponent } from './user-info.component';
import { DialogRef, DialogService } from '@progress/kendo-angular-dialog';
import { DialogContentBase } from '@progress/kendo-angular-dialog';

@Component({
  selector: 'my-app',
  template: `
        <div class="example-wrapper">
            <button kendoButton themeColor="primary" icon="trash" (click)="openDialog()">
                Open dialog
            </button>
            <button kendoButton themeColor="primary" icon="trash" (click)="openDialogWithGenerics()">
            Open dialog
        </button>
        </div>

        <div kendoDialogContainer></div>
    `,
})
export class AppComponent {
  constructor(private dialogService: DialogService) {}

  public result;

  public openDialog(): void {
    const dialogRef: DialogRef = this.dialogService.open({
      // Show component
      content: UserInfoComponent,
    });

    const userInfo = dialogRef.content.instance as UserInfoComponent;
  }

  public openDialogWithGenerics() {
    //  const dialogRef: DialogRef = this.genericOpenDialog(UserInfoComponent) I can`t do that
  }

  public genericOpenDialog<TCOMPONENT extends DialogContentBase>(
    component: TCOMPONENT
  ): DialogRef {
    const dialogRef: DialogRef = this.dialogService.open({
      // Show component
      // content: component, //I can't do that
    });

    return dialogRef;
  }
}
