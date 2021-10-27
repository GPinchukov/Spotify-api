import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './home-page/login-page/login-page.component';
import {AlbumPageComponent} from "./home-page/album-page/album-page.component";
import { PlaylistPageComponent } from './home-page/playlist-page/playlist-page.component';
import { ProfilePageComponent } from './home-page/profile-page/profile-page.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    AlbumPageComponent,
    PlaylistPageComponent,
    ProfilePageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
