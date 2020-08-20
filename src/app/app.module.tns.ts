import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule, NativeScriptCommonModule, ModalDialogService } from '@nativescript/angular';

import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { NativeScriptMaterialCardViewModule } from "nativescript-material-cardview/angular";

import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';
import { HomeComponent } from '@src/app/home/home.component';
import { DetailsComponent } from '@src/app/details/details.component';
import { FileUploadComponent } from '@src/app/file-upload/mobile/file-upload.component';


// Uncomment and add to NgModule imports if you need to use two-way binding and/or HTTP wrapper
// import { NativeScriptFormsModule, NativeScriptHttpClientModule } from '@nativescript/angular';
import { NativeScriptUIDataFormModule } from "nativescript-ui-dataform/angular";
import { DropDownModule } from "nativescript-drop-down/angular";
import { DashboardComponent } from '@src/app/dashboard/dashboard.component';
import { SalaryHistoryComponent } from '@src/app/salary-history/salary-history.component';
import { PensionInfoComponent } from '@src/app/pension-info/pension-info.component';
import { ModalDataComponent } from '@src/app/pension-info/modal-data/modal-data.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    FileUploadComponent,
    DashboardComponent,
    SalaryHistoryComponent,
    PensionInfoComponent,
    ModalDataComponent
  ],
  imports: [
    NativeScriptCommonModule,
    NativeScriptModule,
    AppRoutingModule,
    NativeScriptUISideDrawerModule,
    NativeScriptUIDataFormModule,
    NativeScriptMaterialCardViewModule,
    DropDownModule
  ],
  providers: [
    ModalDialogService
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
  entryComponents: [
    ModalDataComponent
  ]
})
export class AppModule { }
