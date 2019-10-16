import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { HomeComponent } from './home/home.component';
import { CameraViewComponent } from './camera-view/camera-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ControlPanelComponent,
    HomeComponent,
    CameraViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
