import { Component, OnInit } from '@angular/core';
import {CarserviceService} from './../../services/carservice.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { DataService} from 'src/app/services/data.service';




@Component({
  selector: 'app-carresults',
  templateUrl: './carresults.component.html',
  styleUrls: ['./carresults.component.css']
})
export class CarresultsComponent implements OnInit {
  cars;
  request;
  constructor(
    private carService: CarserviceService,
    private dataService: DataService,
    private router: Router,
    private _route: ActivatedRoute
  ) {}
  
  ngOnInit() {
    this.request = this.dataService.request;
    console.log(this.request);
    this.cars = this.carService.searchCars(this.request);
  }

}
