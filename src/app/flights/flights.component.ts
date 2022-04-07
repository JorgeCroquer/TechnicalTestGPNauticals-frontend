import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';

import { MatTableDataSource } from '@angular/material/table';
import { FlightsDTO, flight_type } from './flight.dto';
import { FlightsService } from './flights.service'

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {
  flights: FlightsDTO[] = []
  flights_data_source: FlightsDTO[] = []
  flight_types = ['roundtrip', 'oneway', 'cualquiera']
  displayedColumns: string[] = ['id','fecha/hora', 'origin', 'destination', 'price', 'duration'];
  dataSource!: MatTableDataSource<any>;
  bindedOrigin!: string;
  bindedDestination!: string;
  bindedDepartureDate!:Date;
  bindedType!: flight_type;

  //Used to sort the table
  @ViewChild(MatSort) matSort!: MatSort;

  constructor(
    private readonly flightsService: FlightsService
  ) { }
 

  //Executes when the component is initiating
  async ngOnInit(): Promise<void> {
    this.flightsService.getFlights().subscribe(
      (flights) => {
        this.flights = flights.map(flight => {
          return new FlightsDTO(
            flight.id,
            flight.origin,
            flight.destination,
            new Date(flight.datetime),
            flight.price,
            flight.duration,
            flight.type
            )
          });
          this.flights_data_source = this.flights;
          this.dataSource = new MatTableDataSource(this.flights_data_source);
          this.dataSource.sort = this.matSort;
      } 
    )
    
    
  }

  //This will filter for every input
  filterData(): void{
    this.flights_data_source = this.flights
      this.flights_data_source = this.flights_data_source.filter(
        flight => {
          let applies: boolean = true;
          if(!!this.bindedOrigin 
            && !flight.origin.toLowerCase().includes(this.bindedOrigin.trim().toLocaleLowerCase())){
            applies = false;
          }
          if(!!this.bindedDestination && !flight.destination.toLowerCase().includes(this.bindedDestination.trim().toLowerCase())){
            applies = false;
          }
          if(!!this.bindedDepartureDate && !this.isSameDay(flight.datetime, this.bindedDepartureDate)){
            applies = false;
          }
          if (!!this.bindedType){
            if (this.bindedType == 'oneway'){
              applies = !this.hasReturnFlights(flight, this.flights_data_source);
            }   
            else if (this.bindedType == 'roundtrip')
              applies = this.hasReturnFlights(flight, this.flights_data_source);
          }
            
          return applies
        }
      );

    this.dataSource = new MatTableDataSource(this.flights_data_source);
  }
    
    

  

  private isSameDay(date1: Date, date2: Date): boolean {
    const today = new Date()
    return date1.getDate() == date2.getDate() &&
      date1.getMonth() == date2.getMonth() &&
      date1.getFullYear() == date2.getFullYear()
  }

  private hasReturnFlights(flight: FlightsDTO, flightsArray: FlightsDTO[]): boolean {
    let hasReturnFlights: boolean = false;
    for(let returnFlight of flightsArray){
      
      if(flight.origin == returnFlight.destination &&
         flight.destination == returnFlight.origin
      ){
         
        hasReturnFlights = true;
        break;
      }
    }
    return hasReturnFlights;
  }
}
