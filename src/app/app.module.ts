import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { SchoolDashboardComponent } from './components/school-dashboard/school-dashboard.component';
import { SchoolDetailsComponent } from './components/school-details/school-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SchoolDashboardComponent,
    SchoolDetailsComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [CommonModule, ApplicationModule]
})
export class AppModule { 
  SchoolComponent
}
