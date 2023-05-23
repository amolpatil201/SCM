import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule,routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestcomponentComponent } from './testcomponent/testcomponent.component';
import { TestService} from './test.service';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FindPatientComponent } from './find-patient/find-patient.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
const routes: Routes = [
];

@NgModule({
  declarations: [
    AppComponent,
    TestcomponentComponent,
    NavBarComponent,
    SidebarComponent,
    routingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
