import { Component, ViewChild, OnInit, AfterViewInit }          from '@angular/core';
import { Router }                            from "@angular/router";
import { Subject }                           from 'rxjs';
import { SharedservicesService }             from '../../services/sharedservices.service';
import { DataTableDirective } from 'angular-datatables';

import Swal from 'sweetalert2';
import * as uuid from 'uuid';

@Component({
  selector: 'applications',
  templateUrl: './applications.html',
  styleUrls: ['./applications.scss']
})

export class Applications implements OnInit, AfterViewInit {
    @ViewChild(DataTableDirective, {static: false})
    dtElement: DataTableDirective;

    dtoptions: DataTables.Settings = {};
    dtTrigger: Subject<any> = new Subject<any>();

    applicationName: any;
    listUserApplications: any;
    listApplications: any;
    keepPreviousApplicationRecord: any;

    applicationInDetails: any;

    showApplication: boolean;
    flag: boolean;

    constructor(private shared: SharedservicesService) {
      this.keepPreviousApplicationRecord = "";
      this.showApplication = false;
      this.flag = false;
 
      // Call the application API
      this.shared.getAllApplication().subscribe({
        next: async(response) => {
          const responseData = JSON.parse(JSON.stringify(response));
          this.listUserApplications = responseData;
          this.listApplications = responseData;
        },
        error: (error) => {
          console.log(error);
        }
      });
    }

    ngAfterViewInit() {
      this.dtTrigger.next(null);
    }

    ngOnInit(): void {
      // DataTables Settings - 
      this.dtoptions = {
        lengthMenu: [10, 20, 40, 60, 80, 100],
        responsive: true.valueOf,
        pagingType: 'simple_numbers', // simple // simple_numbers // full // full_numbers
        order:[[1, 'desc']], 
        // destroy: true,
        // retrieve: true,
        // searching: false,
        // paging: false,
        // lengthChange: false, // Remove select options
        
        language: {
          searchPlaceholder: 'Search your order' // To Search in the search placeholder
        },
      }
    }

    // When the user select the application and wanted to see list of application under it
    selectApplication(applicationName) {
      this.applicationName = applicationName;
      this.listUserApplications = this.listApplications;
      this.showApplication = true;
      this.flag = false; 
      
      // Rendered in the datatable list of applications
      this.applicationDetails();
    }

    // When user search application
    searchApplicationName(applicationName) {
      if(this.keepPreviousApplicationRecord.length < applicationName.length) {
        this.keepPreviousApplicationRecord = applicationName;
      } else {
        this.listUserApplications = this.listApplications;
      }
      this.listUserApplications = this.listUserApplications.filter((data) => { 
        data = data.toLowerCase();
        applicationName = applicationName.toLowerCase();
        return data.includes(applicationName)
      });
      if(applicationName == "") {
        this.listUserApplications = this.listApplications;
      }
    }

    // Show list of application
    showDropDownApplication() {
      if(!this.flag) {
        if(this.showApplication) {
          this.showApplication = false;
        } else {
          this.showApplication = true;
        }
      }
    }

    keepOpenDropDownApplication() {
      this.showApplication = true;
      this.flag = true;
    }

    // Call the application in details API
    applicationDetails() {
      this.shared.getApplicationDetails(this.applicationName).subscribe({
        next: async(response) => {
          const responseData = JSON.parse(JSON.stringify(response));
          this.applicationInDetails = responseData;
          this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
            // Destroy the table first
            dtInstance.destroy();

            // Call the dtTrigger to rerender again
            this.dtTrigger.next(null);
          });
        },
        error: (error) => {
          console.log(error);
          this.applicationInDetails = [];
          this.dtTrigger.next(null);
        }
      });
    }
  
    
}