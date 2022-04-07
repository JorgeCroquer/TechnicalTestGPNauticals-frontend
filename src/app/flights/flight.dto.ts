export type flight_type = 'roundtrip' | 'oneway';

export class FlightsDTO{
    id: number;
    origin: string;
    destination: string;
    datetime: Date;
    price: number;
    duration: number;
    type: flight_type;

    constructor(
        id: number, 
        origin: string, 
        destination: string, 
        datetime: Date, 
        price: number, 
        duration: number, 
        type: flight_type
    ){
        this.id = id;
        this.origin = origin;
        this.destination = destination;
        this.datetime = datetime;
        this.price = price;
        this.duration = duration;
        this.type = type;
    }
}