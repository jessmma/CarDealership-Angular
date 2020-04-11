import { Injectable } from '@angular/core';
import {CarSearchRequest} from 'src/app/models/CarSearchRequest.model'
@Injectable({
  providedIn: 'root'
})
export class DataService {

  public request: CarSearchRequest;
  constructor() { }
}
