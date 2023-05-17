import { Component, Input, OnInit }          from '@angular/core';
import { ActivatedRoute, Data }              from '@angular/router';
import { Router }                            from "@angular/router";
@Component({
  selector: 'product-details',
  templateUrl: './product-details.html',
  styleUrls: ['./product-details.scss']
})

export class Product_Details {
    productDetails: any;
    constructor(private activatedRoute: ActivatedRoute) {  
       this.productDetails = JSON.parse(this.activatedRoute.snapshot.paramMap.get('data'));

       if(this.productDetails.Tags) {
        this.productDetails.Tags['appName'] = this.productDetails.Tags['app-name'];
        this.productDetails.Tags['businessUnit'] = this.productDetails.Tags['business-unit'];

        delete this.productDetails.Tags['app-name'];
        delete this.productDetails.Tags['business-unit'];
       }
    }
}