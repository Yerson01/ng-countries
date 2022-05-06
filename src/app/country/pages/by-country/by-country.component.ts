import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
    `
      ul {
        position: absolute;
        background-color: 'white';
        z-index: 1;
      }

      li {
        cursor: pointer;
      }
    `,
  ],
})
export class ByCountryComponent {
  term: string = '';
  hasError: boolean = false;
  showSuggestions: boolean = false;
  countries: Country[] = [];
  suggestions: Country[] = [];

  constructor(private countryService: CountryService) {}

  searchCountries(term: string): void {
    this.hasError = false;
    this.term = term;
    this.showSuggestions = false;

    this.countryService.searchCountry(term).subscribe({
      next: (resp) => {
        this.countries = resp;
      },
      error: (err) => {
        this.hasError = true;
        this.countries = [];
      },
    });
  }

  getSuggestions(term: string): void {
    this.hasError = false;
    this.term = term;
    this.showSuggestions = true;

    this.countryService.searchCountry(term).subscribe({
      next: (res) => {
        const countries = res.splice(0, 5);
        this.suggestions = countries;
      },
      error: () => {
        this.suggestions = [];
      },
    });
  }
}
