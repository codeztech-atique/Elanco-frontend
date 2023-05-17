import { Component, Input, OnInit }          from '@angular/core';
import { Router }                            from "@angular/router";

import { SharedservicesService }             from '../../services/sharedservices.service';

import Swal from 'sweetalert2';
import * as uuid from 'uuid';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.html',
  styleUrls: ['./product-details.scss']
})

export class Product_Details {
    constructor() {

    }
}