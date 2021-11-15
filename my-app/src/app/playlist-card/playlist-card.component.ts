import {Component, Input, OnInit} from '@angular/core';
import {Album, PlaylistCard, Playlists} from "../home-page/services/interface";

@Component({
  selector: 'app-playlist-card',
  templateUrl: './playlist-card.component.html',
  styleUrls: ['./playlist-card.component.scss']
})
export class PlaylistCardComponent implements OnInit {

  @Input() pl!: Playlists[]

  constructor() { }

  ngOnInit(): void {
  }

}
