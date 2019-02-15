import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from './gallery.component';
import { ImagesComponent } from './components/images/images.component';
import { CartComponent } from './components/cart/cart.component';

const gallery_routes: Routes = [{
  path: '', component: GalleryComponent, children:
    [
      { path: '', component: ImagesComponent },
      { path: 'images', component: ImagesComponent },
      { path: 'images/cart', component: CartComponent }
    ]
}];

@NgModule({
  imports: [RouterModule.forChild(gallery_routes)],
  exports: [RouterModule]
})
export class GalleryRoutingModule { }
