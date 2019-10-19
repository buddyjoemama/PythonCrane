import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CameraViewComponent } from './camera-view/camera-view.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'view/:id', component: CameraViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
