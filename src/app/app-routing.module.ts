import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './main/components/home/home.component';

const routes: Routes = [
  //{ path: '', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'main', loadChildren: './main/main.module#MainModule' },
  { path: 'gallery', loadChildren: './gallery/gallery.module#GalleryModule' }
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
