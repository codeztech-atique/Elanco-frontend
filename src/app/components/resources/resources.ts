import { Component, Input, OnInit }          from '@angular/core';
import { Router }                            from "@angular/router";

import { SharedservicesService }             from '../../services/sharedservices.service';

import Swal from 'sweetalert2';
import * as uuid from 'uuid';

@Component({
  selector: 'resources',
  templateUrl: './resources.html',
  styleUrls: ['./resources.scss']
})

export class Resources {
    constructor() {

    }
}