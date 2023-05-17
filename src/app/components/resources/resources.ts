import { Component, ViewChild, OnInit, AfterViewInit }          from '@angular/core';
import { Router }                            from "@angular/router";
import { Subject }                           from 'rxjs';
import { SharedservicesService }             from '../../services/sharedservices.service';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'resources',
  templateUrl: './resources.html',
  styleUrls: ['./resources.scss']
})

export class Resources {
  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective;

  dtoptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  resourcesName: any;
  listUserResources: any;
  listResources: any;
  keepPreviousResourceRecord: any;

  resourcesInDetails: any;

  showResources: boolean;
  flag: boolean;

  constructor(private shared: SharedservicesService, private router: Router) {
    this.keepPreviousResourceRecord = "";
    this.showResources = false;
    this.flag = false;

    // Call the resources API
    this.shared.getAllResources().subscribe({
      next: async(response) => {
        const responseData = JSON.parse(JSON.stringify(response));
        this.listUserResources = responseData;
        this.listResources = responseData;
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
      
      language: {
        searchPlaceholder: 'Search your order' // To Search in the search placeholder
      },
    }
  }

  // When the user select the resource and wanted to see list of resource under it
  selectResources(resourcesName) {
    this.resourcesName = resourcesName;
    this.listUserResources = this.listResources;
    this.showResources = true;
    this.flag = false; 
    
    // Rendered in the datatable list of resources
    this.resourcesDetails();
  }

  // When user search resources
  searchResourceName(resourcesName) {
    if(this.keepPreviousResourceRecord.length < resourcesName.length) {
      this.keepPreviousResourceRecord = resourcesName;
    } else {
      this.listUserResources = this.listResources;
    }
    this.listUserResources = this.listUserResources.filter((data) => { 
      data = data.toLowerCase();
      resourcesName = resourcesName.toLowerCase();
      return data.includes(resourcesName)
    });
    if(resourcesName == "") {
      this.listUserResources = this.listResources;
    }
  }

  // Show list of resources
  showDropDownResouces() {
    if(!this.flag) {
      if(this.showResources) {
        this.showResources = false;
      } else {
        this.showResources = true;
      }
    }
  }

  keepOpenDropDownResources() {
    this.showResources = true;
    this.flag = true;
  }

  // Call the resources in details API
  resourcesDetails() {
    this.shared.getResoucesDetails(this.resourcesName).subscribe({
      next: async(response) => {
        const responseData = JSON.parse(JSON.stringify(response));
        this.resourcesInDetails = responseData;
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          // Destroy the table first
          dtInstance.destroy();

          // Call the dtTrigger to rerender again
          this.dtTrigger.next(null);
        });
      },
      error: (error) => {
        console.log(error);
        this.resourcesInDetails = [];
        this.dtTrigger.next(null);
      }
    });
  }

  resourceDetailsView(data) {
     this.router.navigate(['product/details', { data: JSON.stringify(data) }]);
  }
}