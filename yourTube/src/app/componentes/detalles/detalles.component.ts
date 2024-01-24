import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { video } from 'src/app/models/video';
import { YourtubeService } from 'src/app/services/yourtube.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {
  idUrl: any;
  valoracion=0;
  votado:boolean=false;
  video: video = { url: "", title: "", description: "", category: "", likes: 0, dislikes: 0, views: 0, votes: 0, total: 0 };
  liked: boolean = false;
  dislaked: boolean = false;
  constructor(private yourtubeService: YourtubeService, private route: Router,
    private _activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._activateRoute.paramMap.subscribe(data => {
      this.idUrl = data.get('id');
      console.log("Tengo mi id" + this.idUrl)
    })
    this.getVideoById();

  }

  getVideoById() {
    this.yourtubeService.getById(this.idUrl).subscribe((data) => {
      this.video = data
      this.views();
      this.valoracion=this.video.total/this.video.votes;
      console.log(this.video)
    });
  }

  like() {
    this.video.likes += 1,
      this.yourtubeService.put(this.video, this.idUrl).subscribe((data) => {
        console.log("Video Likeado correctamente");
        this.liked = true;
        this.dislaked = true;
      });

  }

  disLike() {
    this.video.dislikes += 1,

      this.yourtubeService.put(this.video, this.idUrl).subscribe((data) => {
        console.log("Video DisLike correctamente");
        this.dislaked = true;
        this.liked = true;
      });
  }

  views() {
    this.video.views += 1
    this.yourtubeService.put(this.video, this.idUrl).subscribe((data) => {
      console.log("Vista video ");
    });
  }

  valorar(estrellas: number) {
    this.video.votes += 1;
    this.video.total += estrellas;
    this.votado=true;
    this.yourtubeService.put(this.video, this.idUrl).subscribe((data) => {
      console.log("Vista video ");
    });
  }

}
