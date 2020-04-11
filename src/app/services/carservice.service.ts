import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CarSearchRequest } from '../models/CarSearchRequest.model';

@Injectable({
  providedIn: 'root'
})
export class CarserviceService {

  constructor(
    private http: HttpClient
  ) { }

  searchCars(request: CarSearchRequest):Observable<any>{
    return this.http.post<any>('https://localhost:5001/car/search/',request);
  }
}
