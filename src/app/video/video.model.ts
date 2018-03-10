export class Comment {
  constructor(
    public snippet: string,
    public speaker: string,
    public time: number,
  )
  {
    this.snippet = snippet;
    this.speaker = speaker;
    this.time = time;
  }
}

export class Video {
  public id: string;
  public url: string;
  public transcript: Comment[];

  constructor(
    id: string,
    url: string,
    transcript: Comment[]
  ) {
    this.id = id;
    this.url = url;
    this.transcript = transcript;
  }
}
