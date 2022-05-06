import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-city',
  templateUrl: './by-city.component.html',
  styles: [],
})
export class ByCityComponent {
  city: string = '';
  hasError: boolean = false;
  countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  searchByCity(city: string): void {
    this.hasError = false;
    this.city = city;

    this.countryService.searchByCity(city).subscribe({
      next: (resp) => {
        this.countries = resp;
      },
      error: (err) => {
        this.hasError = true;
        this.countries = [];
      },
    });
  }

}
