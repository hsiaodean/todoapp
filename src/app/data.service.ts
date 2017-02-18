import { Injectable } from '@angular/core';

import { Http, RequestOptions, Headers, Response} from '@angular/http';

import {Observable, Subscription, Subject} from 'rxjs'

import 'rxjs/add/operator/map'


@Injectable()
export class DataService {
  
  options = new RequestOptions({
                  headers : new Headers({
                    'Content-type' : 'application/json',
                    'Authorization' : 'token ed6d1a87-e770-410e-8552-470abc5b6fb3'
                  })
                })
  
  constructor(private http:Http) {
          
  }
  
  get(url:string):any{
    let subject = new Subject()
    this.http.get(url, this.options)
             .map(response => response.json())
             .subscribe(subject)
    return subject;
  }
  
  post(url:string, data:any):Subscription{
    
    return this.http.post(url, data, this.options).subscribe();
  }
  
}
