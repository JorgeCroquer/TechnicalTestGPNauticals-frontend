import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FlightsDTO } from './flight.dto';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  constructor(
    private readonly http: HttpClient
  ) { }

  //make a function that queries the fligths from an api call
  getFlights(): Observable<FlightsDTO[]> {
    const host_url = 'http://localhost:3000';
    const endpoint_url = '/flights';
    const query_params = 'page=1';
    const url = `${host_url}${endpoint_url}?${query_params}`;
    return this.http.get<FlightsDTO[]>(url);
  }



}
