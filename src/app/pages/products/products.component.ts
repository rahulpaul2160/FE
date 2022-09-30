import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';
 
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private service:OrderDetailsService) { }
carData:any;
  ngOnInit(): void {
    this.carData = this.service.carDetails;
  }

}
