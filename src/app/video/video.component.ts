import { Component, OnInit } from '@angular/core';
import { DecimalPipe } from "@angular/common";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/switchMap";

import { VideoService } from './video.service';
import { Video } from './video.model';

@Component({
  selector: "app-video",
  templateUrl: "./video.component.html",
  styleUrls: ["./video.component.css"],
  providers: [DecimalPipe]
})
export class VideoComponent implements OnInit {
  id;
  transcript = []
  videoUrl = ''

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private videoService: VideoService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params["id"];
      this.videoUrl = this.videoService.getVideoUrl(this.id);
    });

    this.route.paramMap
      .switchMap((params: ParamMap) =>
        this.videoService.getTranscript(params.get("id"))
      )
      .subscribe(res => {
        this.transcript = res
          .sort((a, b) => {
            const aTime = a.time;
            const bTime = b.time;
            return aTime - bTime;
          });
      });
  }
}

