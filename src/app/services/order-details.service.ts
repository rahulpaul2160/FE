import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  // carDetails

  carDetails =[
    {
    id:1,
    carName: "Mercedes Benz G Wagon",
    carDetails: "3999CC, Petrol Biturbo Engine.",
    carPrice: 31500000,
    carImg: "https://www.shutterstock.com/shutterstock/photos/1714171753/display_1500/stock-photo-novosibirsk-russia-april-mercedes-amg-g-off-road-car-side-view-new-black-1714171753.jpg"
  }

  ]
}
