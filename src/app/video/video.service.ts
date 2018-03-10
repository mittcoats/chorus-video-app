import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Video, Comment } from './video.model';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/observable/of";
import "rxjs/add/operator/map";

const VIDEOS: Video[] = [
  new Video(
    '4d79041e-f25f-421d-9e5f-3462459b9934',
    '',
    []
  )
];

@Injectable()
export class VideoService {
  chorusAPIUrl = "https://static.chorus.ai/api/";

  constructor(private http: HttpClient) {}

  getVideos() {
    return Observable.of(VIDEOS);
  }

  getVideoUrl(id: string) {
    return this.chorusAPIUrl + id + '.mp4'
  }

  getTranscript(id: string) {
    return this.http.get<Comment[]>(this.chorusAPIUrl + id + ".json")
  }
}
