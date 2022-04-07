import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { FlightsComponent } from './flights/flights.component';
import { FlightsService } from './flights/flights.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {MatTableModule} from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FlightsComponent, 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatToolbarModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    FlightsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
