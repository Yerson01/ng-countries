import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCityComponent } from './pages/by-city/by-city.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { ByCountryComponent } from './pages/by-country/by-country.component';
import { CountryDetailComponent } from './pages/country-detail/country-detail.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CountriesTableComponent } from './components/countries-table/countries-table.component';
import { CountryInputComponent } from './components/country-input/country-input.component';



@NgModule({
  declarations: [
    ByCityComponent,
    ByRegionComponent,
    ByCountryComponent,
    CountryDetailComponent,
    CountriesTableComponent,
    CountryInputComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ], 
  exports: [
    ByCityComponent,
    ByRegionComponent,
    ByCountryComponent,
    CountryDetailComponent,
  ]
})
export class CountryModule { }
