import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { UserInfoComponent } from './user-info.component';

import { DialogModule } from '@progress/kendo-angular-dialog';
import { ButtonsModule } from '@progress/kendo-angular-buttons';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [UserInfoComponent, AppComponent],
    // Register the component that will be created dynamically
    entryComponents: [UserInfoComponent],
    imports: [DialogModule, BrowserModule, BrowserAnimationsModule, ButtonsModule]
})
export class AppModule {}
