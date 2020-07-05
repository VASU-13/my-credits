import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsertableComponent } from './components/usertable/usertable.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { HomepageComponent } from './components/homepage/homepage.component';
import { environment } from '../environments/environment';

import { MatButtonModule } from '@angular/material/button';


import { TransferModalComponent } from './components/transfer-modal/transfer-modal.component';


import { FormsModule } from '@angular/forms';

import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

import { HttpClientModule } from '@angular/common/http';


import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTabsModule } from '@angular/material/tabs';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';

import { MatDialogModule } from '@angular/material/dialog';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';

import { ReactiveFormsModule } from '@angular/forms';
import { TransferRecordsComponent } from './components/transfer-records/transfer-records.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { MatToolbarModule } from '@angular/material/toolbar';
;


@NgModule({
  declarations: [
    AppComponent,
    UsertableComponent,
    HomepageComponent,
    TransferModalComponent,
    TransferRecordsComponent,
    LandingpageComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    FormsModule,
    MatSelectModule,
    MatInputModule,
    HttpClientModule,
    MatPaginatorModule,
    MatTabsModule,
    ToastrModule.forRoot() ,
    NgxSpinnerModule,
    MatDialogModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSortModule,
    ReactiveFormsModule,
  
  ],
  providers: [],
  entryComponents: [TransferModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
