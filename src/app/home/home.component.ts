import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  // standalone: true,
  // imports: [ClipsListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    // window.addEventListener('load', this.playVideo);
    this.playVideo();
  }
  playVideo(): void {
    const videoElement = document.getElementById(
      'intro-video'
    ) as HTMLVideoElement;
    videoElement.muted = true;
    if (videoElement) {
      videoElement.play().catch((error) => {
        console.log('Error playing video:', error);
      });
    }
  }
}
