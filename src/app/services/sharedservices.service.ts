import { BehaviorSubject, Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class SharedservicesService {
  // private currentUserSubject: BehaviorSubject<Userdetails>;
  // public currentUser: Observable<Userdetails>;
  // public currentUserLoggedIn = this.authenticationService.currentUserValue;

  // public isUserLogin = this.currentUserLoggedIn !== null ? true : false;
  public headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');

  public uri = environment.url;

  constructor(private http: HttpClient) {
    // this.currentUserSubject = new BehaviorSubject<Userdetails>(JSON.parse(localStorage.getItem('currentUser')));
    // this.currentUser = this.currentUserSubject.asObservable();
  }

  // public get currentUserValue(): Userdetails {
  //   return this.currentUserSubject.value;
  // }

  // List of all Application
  public getAllApplication() {
    return this.http.get(`${this.uri}/applications`);
  }

  // List of all Resources
  public getAllResources() {
    return this.http.get(`${this.uri}/resources`);
  }

  // Get Application Details
  public getApplicationDetails(applicationName) {
    return this.http.get(`${this.uri}/applications/`+applicationName);
  }

  // Get Resources Details
  public getResoucesDetails(resourcesName) {
    return this.http.get(`${this.uri}/resources/`+resourcesName);
  }
}
