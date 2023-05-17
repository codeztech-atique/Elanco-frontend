import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class CommonService {
  public _subjectCommon = new Subject<any>();
  
  constructor() { }

  getObservable(): Observable<any> {
    return this._subjectCommon.asObservable();
  }
}