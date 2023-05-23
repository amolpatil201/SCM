import { Component } from '@angular/core';
import { Patient } from '../patient';
import { EnrollmentService } from '../enrollment.service';
@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent {

   genders = ['male','female'];

   patientModel= new Patient('','ankita@gmail.com',1234567891,'');
   constructor(private _enrollservice:EnrollmentService){}

   Onsubmit(){
    console.log(this.patientModel);
    this._enrollservice.enroll(this.patientModel)
      .subscribe(
        data=>console.log('Success',data),
        error=>console.error('Error!',error)
      )
   }
  }
