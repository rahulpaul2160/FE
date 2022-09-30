import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';
OrderDetailsService
@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.css']
})
export class ProductpageComponent implements OnInit {

  constructor(private param:ActivatedRoute,private service:OrderDetailsService) { }
getProductsId:any;
productsData:any;
  ngOnInit(): void {
    this.getProductsId = this.param.snapshot.paramMap.get('id');
    console.log(this.getProductsId,'getproducts');
    if(this.getProductsId)
    {
      this.productsData = this.service.carDetails.filter((value)=>{
        return value.id == this.getProductsId;
      });
      console.log(this.productsData,'productsdata>>');
      
    }
  }

}
