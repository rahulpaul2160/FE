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
    carImg: "https://unsplash.com/photos/PtJDCD4fTI4"
    }

  ]
}
