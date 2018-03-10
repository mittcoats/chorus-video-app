import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { VideoComponent } from './video/video.component';
import { VideoService } from './video/video.service';
import { VideoListComponent } from './video-list/video-list.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    VideoComponent,
    VideoListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [VideoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
