import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarsComponent } from './components/cars/cars.component';
import { CarresultsComponent } from './components/carresults/carresults.component';


const routes: Routes = [
  {path: '', component: CarsComponent},
  {path: 'carresults', component: CarresultsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
