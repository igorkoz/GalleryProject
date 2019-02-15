import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { MainComponent } from './main.component';

const main_children_routes: Routes = [{
  path: '', component: MainComponent, children: [
    //{ path: '', redirectTo: '/home', pathMatch: 'full'},
    //{ path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'home/admin', component: AdminComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(main_children_routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
