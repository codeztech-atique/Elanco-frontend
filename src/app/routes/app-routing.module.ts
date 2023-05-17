// Common
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';


// Dashboard
import { Dashboard } from '../components/dashboard/dashboard';

// List of component
import { Applications } from '../components/applications/applications';
import { Resources } from '../components/resources/resources';
import { Product_Details } from '../components/product-details/product-details';


var routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: Dashboard, data: { title: 'Dashboard' } },
    { path: 'product/applications', component: Applications, data: { title: 'Application' } },
    { path: 'product/resources', component: Resources, data: { title: 'Resouces' } },              
    { path: 'product/details', component: Product_Details, data: { title: 'Product Details' } },              
];

@NgModule({
    imports: [CommonModule, RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: []
})


export class AppRoutingModule {
    // currentUser: Userdetails;
    // currentUserSubscription: Subscription;
}
