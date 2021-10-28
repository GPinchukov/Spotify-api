import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from "./home-page/login-page/login-page.component";
import {AlbumPageComponent} from "./home-page/album-page/album-page.component";
import {PlaylistPageComponent} from "./home-page/playlist-page/playlist-page.component";
import {ProfilePageComponent} from "./home-page/profile-page/profile-page.component";
import {PlaylistComponent} from "./home-page/playlist/playlist.component";

const routes: Routes = [
   { path: '', component: LoginPageComponent },
   { path: 'albums', component: AlbumPageComponent },
   { path: 'playlists', component: PlaylistPageComponent },
   { path: 'playlist/:id', component: PlaylistComponent },
   { path: 'profile', component: ProfilePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
