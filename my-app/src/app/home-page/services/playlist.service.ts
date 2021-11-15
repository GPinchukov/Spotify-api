import { Injectable } from '@angular/core';
import {PlaylistCard, Playlists} from "./interface";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {LoginService} from "./login.service";
import {Subscription} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  playlists: Playlists[] = [{
  collaborative: false,
  description: '',
  external_urls: {
    spotify: ''
  },
  href: '',
  id: '',
  images: [{
    height: 0,
    url: '',
    width: 0
  }],
  name: '',
  owner: {
    display_name: '',
    external_urls: {
      spotify: ''
    },
    href: '',
    id: '',
    type: '',
    uri: '',
  },
  primary_color: '',
  public: false,
  snapshot_id: '',
  tracks: {
    href: '',
    total: 0
},
  type: '',
  uri: ''
}]
  playlist_data!:  any
  public back!: string

  constructor(private http: HttpClient,
              public logserv: LoginService) { }

  getPlaylist(id: string): Subscription {
    return this.http.get<Playlists>(`https://api.spotify.com/v1/playlists/${id}`,{
        headers: new HttpHeaders({
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        })
      }
    ).subscribe(adata =>{
      console.log(adata, "пппп")
     this.playlist_data = adata
    })
}
}
