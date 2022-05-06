import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByCountryComponent } from './country/pages/by-country/by-country.component';
import { ByCityComponent } from './country/pages/by-city/by-city.component';
import { ByRegionComponent } from './country/pages/by-region/by-region.component';
import { CountryDetailComponent } from './country/pages/country-detail/country-detail.component';

const routes: Routes = [
  { path: '', component: ByCountryComponent, pathMatch: 'full' },
  { path: 'region', component: ByRegionComponent },
  { path: 'city', component: ByCityComponent },
  { path: 'country/:id', component: CountryDetailComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
