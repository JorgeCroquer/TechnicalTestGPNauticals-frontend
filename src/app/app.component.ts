import { Component } from '@angular/core';
import { FlightsDTO } from './flights/flight.dto';
import { FlightsService } from './flights/flights.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'technical-test-gpnauticals-backend';

  constructor(
    private readonly flightsService: FlightsService
  ){}



  async ngOnInit(): Promise<void> {

  }
}
