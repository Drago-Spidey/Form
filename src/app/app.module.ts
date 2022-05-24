import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Form1Component } from './form1/form1.component';
import { MaterialModule } from "./material/material.module";
import { Form2Component } from './form1/form2/form2.component';
import { AgGridModule } from "ag-grid-angular";
import { Form3Component } from './form1/form3/form3.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CountryDialogComponent } from './form1/country-dialog/country-dialog.component';
import { WellperiodComponent } from './form1/form3/wellperiod/wellperiod.component';
@NgModule({
  declarations: [
    AppComponent,
    Form1Component,
    Form2Component,
    Form3Component,
    CountryDialogComponent,
    WellperiodComponent,
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,MatToolbarModule,
    AgGridModule,AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDzNtxGzhx1lQ2K0O6_81QMCSLDrlmGAZ0'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
