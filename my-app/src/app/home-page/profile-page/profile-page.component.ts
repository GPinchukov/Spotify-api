import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Params} from "@angular/router";
import {Observable} from "rxjs";
import { map } from 'rxjs/operators';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../services/interface";

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})


export class ProfilePageComponent implements OnInit {

  token: any;
  user: User = {
    explicit_content: {
      filter_enabled: false,
      filter_locked: false
    },
    external_urls: {
      spotify: ''
    },
    country: '',
    display_name: '',
    email: '',
    followers: {
      href: '',
      total: 0,
    },
    href: '',
    id: '',
    images: [{
      height: 0,
      url: '',
      width: 0
    }],
    product: '',
    type: '',
    uri: ''
  }

  img: any;


  constructor(private route: ActivatedRoute,
              private http: HttpClient
             ){


  }

  fetchData(): any {
    return this.http.get<User>('https://api.spotify.com/v1/me',{
        headers: new HttpHeaders({
          'Authorization': `Bearer ${this.token}`
        })
      }
    ).subscribe(data =>{
      console.log(data.display_name)
      this.user = data;
      this.img = data.images[0].url;
      console.log(data.images,'картинка' )
      // this.user = data;
      // this.user.id = data.id;
    })
  }

  ngOnInit(): void {
    this.route.fragment.subscribe((data:any) =>{
      this.token = data.match(/access_token=(.*?)&/)[1];
    })
    this.fetchData()
    }





}
