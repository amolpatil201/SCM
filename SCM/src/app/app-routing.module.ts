import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { AppComponent } from './app.component';
import { FindPatientComponent } from './find-patient/find-patient.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TestcomponentComponent } from './testcomponent/testcomponent.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'FindPatient', component: FindPatientComponent },
  { path: 'AddPatient', component: AddPatientComponent },
  { path: 'Employee', component: TestcomponentComponent },
  { path: 'Home', component: SidebarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[AppComponent,FindPatientComponent,AddPatientComponent]