import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  _url='';
  constructor(private _http: HttpClient) { }

  enroll(patient: Patient){
    return this._http.post<any>(this._url,patient);
  }
}
