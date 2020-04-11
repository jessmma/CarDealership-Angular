import { Component, OnInit } from '@angular/core';
import {CarserviceService} from './../../services/carservice.service';
import {DataService} from 'src/app/services/data.service';
import { CarSearchRequest } from 'src/app/models/CarSearchRequest.model';
import {Color} from 'src/app/models/color.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  carsearchrequest : CarSearchRequest ={
    color: null,
    hasSunRoof: null,
    isFourWheelDrive: null,
    hasLowMiles: null,
    hasPowerWindows: null,
    hasNavigation: null,
    hasHeatedSeats: null
    
  };

  colors: Color[]=[
    {name: 'Red'},
    {name: 'White'},
    {name: 'Gray'},
    {name: 'Silver'},
    {name: 'Black'}
  ];
  

  constructor(
    private carService: CarserviceService,
    private dataService: DataService,
    private router: Router,
  ) { }

  ngOnInit() {
    
  }

  ngOnDestroy(){
    
  }

  search(form):void {
    this.dataService.request = this.removeEmptyStringsInBody(form.value);
    this.router.navigateByUrl('/carresults');
    console.log(form.value);
  }

  private removeEmptyStringsInBody(body:any) {
    let bodyTemp= JSON.stringify(body, function (key, value) {
        return value === "" ? null : value
    });
    return JSON.parse(bodyTemp);
 }
}
