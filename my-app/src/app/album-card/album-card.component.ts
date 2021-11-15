import {Component, Input, NgIterable, OnInit} from '@angular/core';
import {Album, AlbumBox, Playlists} from "../home-page/services/interface";

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.scss']
})
export class AlbumCardComponent implements OnInit {

  @Input() pl!: NgIterable<any> | null | undefined

  constructor() { }

  ngOnInit(): void {
    console.log(this.pl, "карточка" )
  }

}
