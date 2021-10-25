import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './home-page/login-page/login-page.component';
import {AlbumPageComponent} from "./home-page/album-page/album-page.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    AlbumPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
