import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from "@angular/forms";
import { MatBadgeModule } from '@angular/material/badge';

@NgModule({
   declarations: [
    MainComponent,
    HomeComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatSelectModule,
    MatBadgeModule,

    FormsModule
  ]
  
 
})
export class MainModule { }
