import { Component, Input, Output, EventEmitter, Renderer2, OnDestroy, OnInit } from '@angular/core';
import { SharedservicesService }    from '../../services/sharedservices.service';
import { CommonService }    from '../../services/common.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import appSettings from '../../config/app-settings';


@Component({
	selector: 'header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	// userProfilePictureURL: any;
    // currentUserSubscription: Subscription;
	// public _subscription: Subscription;
    // isVisited: boolean;
	// notificationData: any;
	// timeAgo: any;

	// fromPage: number;
	// pageSize: number;
	
	@Input() appSidebarTwo;
	@Output() appSidebarEndToggled = new EventEmitter<boolean>();
	@Output() appSidebarMobileToggled = new EventEmitter<boolean>();
	@Output() appSidebarEndMobileToggled = new EventEmitter<boolean>();
	appSettings = appSettings;

	toggleAppSidebarMobile() {
		this.appSidebarMobileToggled.emit(true);
	}

	toggleAppSidebarEnd() {
		this.appSidebarEndToggled.emit(true);
	}

	toggleAppSidebarEndMobile() {
		this.appSidebarEndMobileToggled.emit(true);
	}

	toggleAppTopMenuMobile() {
		this.appSettings.appTopMenuMobileToggled = !this.appSettings.appTopMenuMobileToggled;
	}

	toggleAppHeaderMegaMenuMobile() {
		this.appSettings.appHeaderMegaMenuMobileToggled = !this.appSettings.appHeaderMegaMenuMobileToggled;
	}

	constructor(private route: ActivatedRoute, private commonService: CommonService, private shared: SharedservicesService) {
	}

    

	// Add the bussiness logic here.
	ngOnInit() {
		
	}	

	logout() {
	}
}
