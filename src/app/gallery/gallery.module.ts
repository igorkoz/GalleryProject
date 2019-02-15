import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagesComponent } from './components/images/images.component';
import { GalleryComponent } from './gallery.component';
import { GalleryRoutingModule } from './gallery-routing.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ModelModule } from "../models/model.module";
import { CartComponent } from './components/cart/cart.component';

@NgModule({
  declarations: [
    ImagesComponent,
    GalleryComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    MatGridListModule,
    MatCheckboxModule,
    MatSidenavModule,

    ModelModule
  ]
})
export class GalleryModule { }
