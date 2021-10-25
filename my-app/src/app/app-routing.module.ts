import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from "./home-page/login-page/login-page.component";
import {AlbumPageComponent} from "./home-page/album-page/album-page.component";

const routes: Routes = [
   { path: '', component: LoginPageComponent },
   { path: 'albums', component: AlbumPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
