import { Component, OnInit } from '@angular/core';
import { Video } from '../video/video.model';
import { VideoService } from '../video/video.service';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  videos: Observable<Video[]>;

  constructor(
    private videoService: VideoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.videos = this.route.paramMap
      .switchMap((params: ParamMap) => {
        return this.videoService.getVideos()
      });
  }

}
