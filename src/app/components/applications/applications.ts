import { Component, Input, OnInit }          from '@angular/core';
import { Router }                            from "@angular/router";

import { SharedservicesService }             from '../../services/sharedservices.service';

import Swal from 'sweetalert2';
import * as uuid from 'uuid';

@Component({
  selector: 'applications',
  templateUrl: './applications.html',
  styleUrls: ['./applications.scss']
})

export class Applications {
    constructor() {

    }
}