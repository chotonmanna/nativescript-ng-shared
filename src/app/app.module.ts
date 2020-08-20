import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';
import { HomeComponent } from '@src/app/home/home.component';
import { DetailsComponent } from '@src/app/details/details.component';
import { FileUploadComponent } from '@src/app/file-upload/web/file-upload.component';
import { DashboardComponent } from '@src/app/dashboard/dashboard.component';
import { SalaryHistoryComponent } from '@src/app/salary-history/salary-history.component';
import { PensionInfoComponent } from '@src/app/pension-info/pension-info.component';
import { ModalDataComponent } from '@src/app/pension-info/modal-data/modal-data.component';
//import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    FileUploadComponent,
    DashboardComponent,
    SalaryHistoryComponent,
    PensionInfoComponent,
    ModalDataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //NativeScriptUISideDrawerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
