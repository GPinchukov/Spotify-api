import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './home-page/login-page/login-page.component';
import {AlbumPageComponent} from "./home-page/album-page/album-page.component";
import { PlaylistPageComponent } from './home-page/playlist-page/playlist-page.component';
import { ProfilePageComponent } from './home-page/profile-page/profile-page.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { PlaylistComponent } from './home-page/playlist/playlist.component';
import { SongsRowComponent } from './home-page/songs-row/songs-row.component';
import { AlbumComponent } from './home-page/album/album.component';
import { SongsColumComponent } from './home-page/songs-colum/songs-colum.component';
import { AudioPlayerComponent } from './home-page/audio-player/audio-player.component';
import { PlayerComponent } from './player/player.component';
import { DynamicDirective } from './home-page/login-page/dynamic.directive';
import { MeeterComponent } from './home-page/login-page/meeter/meeter.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    AlbumPageComponent,
    PlaylistPageComponent,
    ProfilePageComponent,
    PlaylistComponent,
    SongsRowComponent,
    AlbumComponent,
    SongsColumComponent,
    PlayerComponent,
    DynamicDirective,
    MeeterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [MeeterComponent]
})
export class AppModule { }
