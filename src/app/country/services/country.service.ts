import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map, first } from 'rxjs/operators';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  get httpParams(): HttpParams {
    return new HttpParams().set(
      'fields',
      ['cca2', 'name', 'population', 'capital', 'flags'].join(',')
    );
  }

  constructor(private http: HttpClient) {}

  searchCountry(name: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/name/${name}`, {
      params: this.httpParams,
    });
  }

  searchByCity(city: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/capital/${city}`, {
      params: this.httpParams,
    });
  }

  searchByCCA2(cca2: string): Observable<any> {
    return this.http
      .get<Country[]>(`${this.apiUrl}/alpha/${cca2}`)
      .pipe(map((val) => val[0]));
  }

  searchByRegion(region: string): Observable<any> {
    return this.http.get<Country[]>(`${this.apiUrl}/region/${region}`, {
      params: this.httpParams,
    });
  }
}
