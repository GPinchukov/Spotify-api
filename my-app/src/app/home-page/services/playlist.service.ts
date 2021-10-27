import { Injectable } from '@angular/core';
import {Playlists} from "./interface";

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

  constructor() { }
}
