import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  // carDetails

  carDetails = [
    {
      id: 1,
      carName: "Mercedes Benz G Wagon",
      carDetails: "3999CC, Petrol Biturbo Engine.",
      carPrice: 31500000,
      carImg: "https://www.shutterstock.com/shutterstock/photos/1714171753/display_1500/stock-photo-novosibirsk-russia-april-mercedes-amg-g-off-road-car-side-view-new-black-1714171753.jpg"
    },
    {
      id: 2,
      carName: "Mini Cooper S",
      carDetails: "1999CC, Petrol Engine.",
      carPrice: 3500000,
      carImg: "https://cdn.pixabay.com/photo/2015/08/05/19/16/minicooper-876924_960_720.jpg"
    },

    {
      id: 3,
      carName: "BMW",
      carDetails: "1999CC, Petrol Engine.",
      carPrice: 5000000,
      carImg: "https://cdn.pixabay.com/photo/2016/11/18/12/52/automobile-1834278_960_720.jpg"
    },

    {
      id: 4,
      carName: "AUDI",
      carDetails: "1999CC, Petrol Engine.",
      carPrice: 5200000,
      carImg: "https://cdn.pixabay.com/photo/2016/12/03/11/47/car-1879630_960_720.jpg"
    },

    {
      id: 5,
      carName: "Jagaur F Series",
      carDetails: "1999CC, Petrol Engine.",
      carPrice: 5800000,
      carImg: "https://cdn.pixabay.com/photo/2016/03/14/23/09/jaguar-1256559_960_720.jpg"
    },

    {
      id: 6,
      carName: "MERCEDES BENZ",
      carDetails: "1999CC, Petrol Engine.",
      carPrice: 5800000,
      carImg: "https://cdn.pixabay.com/photo/2016/04/19/06/03/mercedes-1338063_960_720.jpg"
    }
  ]
}