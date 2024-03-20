import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import IClip from '../models/clip.model';
import { DatePipe } from '@angular/common';
import videojs from 'video.js';


@Component({
  selector: 'app-clip',
  // standalone: true,
  // imports: [],
  templateUrl: './clip.component.html',
  styleUrl: './clip.component.css',
  encapsulation: ViewEncapsulation.None,
  providers: [DatePipe]
})
export class ClipComponent implements OnInit{
  @ViewChild('videoPlayer', {static: true}) target?: ElementRef
  //@ts-ignore
  player?: videojs.Player;
  // player?: unknown
  clip?: IClip
  constructor(public route: ActivatedRoute) { }
  
  ngOnInit(){
    this.player = videojs(this.target?.nativeElement)

    this.route.data.subscribe(data => {
      this.clip = data.clip as IClip

      this.player?.src({
        src: this.clip.url,
        type: 'video/mp4'
      }) 
    })
  }
}
