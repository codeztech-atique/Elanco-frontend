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
		// this.fromPage = CONSTANTS.PAGESTARTS_FROM;
		// this.pageSize = CONSTANTS.NOTIFICATION_PAGESIZE;
		// this.isVisited = false;
		
		// this.wbsocketService.receiveMessage();
		// this.currentUserSubscription = this.authenticationService.currentUser.subscribe(async user => {
		// 	this.currentUser = user;
		// 	this.userProfilePictureURL = this.currentUser['custom:profileurl'];
		// 	setTimeout(() => {
		// 		if(Object.keys(this.currentUser).length > 0) {
		// 			this.callNoticationAPI();
		// 		}
		// 	}, 3000);

		// 	if(Object.keys(this.currentUser).length > 0) {
		// 		this._subscription = this.commonService._subjectCommon.asObservable().pipe(debounceTime(1000)).subscribe((notification) => {
		// 			if(notification) {
		// 				this.callNoticationAPI();
		// 			}
		// 		});
		// 	}
		// });
		
		// this.commonService._subjectProfile$.subscribe((profilePicURL) => {
		// 	console.log("Header Component:", profilePicURL);
		// 	const userDetails = JSON.parse(localStorage.getItem('currentUser'));
		// 	userDetails['custom:profileurl'] = profilePicURL;
		// 	localStorage.setItem('currentUser', JSON.stringify(userDetails))
		// 	this.userProfilePictureURL = profilePicURL;
		// });
		
	}

    

	// Add the bussiness logic here.
	ngOnInit() {
		
	}	

	logout() {
	}
}
