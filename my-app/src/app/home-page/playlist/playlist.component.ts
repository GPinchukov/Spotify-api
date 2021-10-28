import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {PlaylistService} from "../services/playlist.service";

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              public playlistserv: PlaylistService) {

  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
         this.playlistserv.getPlaylist(params.id)
          console.log(this.playlistserv.playlist_data, 'data of playlist')
    })
  }

}
