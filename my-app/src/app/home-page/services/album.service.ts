import { Injectable } from '@angular/core';
import {Album, Playlists} from "./interface";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {LoginService} from "./login.service";
import {Subscription} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  album_data!: Album
  public back!: string

  constructor(private http: HttpClient,
              public logserv: LoginService) { }

  getAlbum(id: string): Subscription {
    return this.http.get<Album>(`https://api.spotify.com/v1/albums/${id}`,{
        headers: new HttpHeaders({
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        })
      }
    ).subscribe(adata =>{
      console.log(adata, "ddd")
     this.album_data = adata
    })
}
}
