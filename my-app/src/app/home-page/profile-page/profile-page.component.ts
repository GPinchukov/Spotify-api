import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Album, AlbumBox, Playlists, PlaylistsBox, User} from "../services/interface";
import {LoginService} from "../services/login.service";
import {PlaylistService} from "../services/playlist.service";
import {Observable, Observer, Subscription} from "rxjs";
import {observableToBeFn} from "rxjs/internal/testing/TestScheduler";

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})


export class ProfilePageComponent implements OnInit {

  ddata!: Album[]


  constructor(private route: ActivatedRoute,
              private router: Router,
              private http: HttpClient,
              public logserv: LoginService,
              public playlists: PlaylistService
             ){


  }

  fetchData(): Subscription {
    return this.http.get<User>('https://api.spotify.com/v1/me',{
        headers: new HttpHeaders({
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        })
      }
    ).subscribe(data =>{
      console.log(data.display_name)
      this.logserv.user = data;
      console.log(data.images,'картинка' )
    })
  }

  fetchPlaylistData():  Subscription {
    return this.http.get<PlaylistsBox>('https://api.spotify.com/v1/me/playlists?limit=16',{
        headers: new HttpHeaders({
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        })
      }
    ).subscribe(pdata =>{
       this.playlists.playlists = pdata.items;
      console.log(this.playlists.playlists, 'playlists2')
    })
  }

  fetchAlbumsData():  Subscription {
    return this.http.get<AlbumBox>('https://api.spotify.com/v1/me/albums?limit=16',{
        headers: new HttpHeaders({
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        })
      }
    ).subscribe(adata =>{
      this.ddata = adata.items
      console.log(adata, 'albums')
    })
  }


  ngOnInit(): void {
      this.route.fragment.subscribe((data: string | null ) => {
        if (data){
          const match = data?.match(/access_token=(.*?)&/)
          this.logserv.token = match? match[1] : '';

          localStorage.setItem('token', this.logserv.token);
        }
      })

    this.fetchData();
    this.fetchPlaylistData();
    this.fetchAlbumsData();
    }

}
