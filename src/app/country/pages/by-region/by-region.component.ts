import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [
    `
      button {
        margin-right: 5px;
      }
    `,
  ],
})
export class ByRegionComponent implements OnInit {
  regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  activeRegion: string = 'africa';
  countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.searchByRegion(this.activeRegion);
  }

  getClasses(region: string): string {
    return region === this.activeRegion
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }

  activateRegion(region: string): void {
    if (region === this.activeRegion) return;
    
    this.activeRegion = region;
    this.countries = [];

    this.searchByRegion(region);
  }

  searchByRegion(region: string): void {
    this.countryService.searchByRegion(region)
    .subscribe(countries => {
      this.countries = countries;
    })
  }
}
