import { Component, OnInit } from '@angular/core';
import { YourtubeService } from 'src/app/services/yourtube.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  search: String = "";
  videosAux: any = [];
  videos: any = [];
  categorias: any = []
  murl = "https://www.youtube.com/embed/RK1RRVR9A2g?si=4xoFXecQBkCcR164"
  constructor(private yourtubeService: YourtubeService
  ) { }

  ngOnInit(): void {
    this.getVideos();
  }

  getVideos() {
    this.yourtubeService.get().subscribe((data) => {
      this.videos = data
      this.videosAux = this.videos;
      this.capturarCategorias()
      console.log(this.videos)
    });
  }

  eliminar(video: any) {
    this.yourtubeService.delete(video.id).subscribe(res => {
      alert("Se eliminó un Video correctamente")
      this.getVideos()
    })
  }

  buscar() {
    this.videosAux = this.videos.filter((vid: any) =>
      vid.title.toLowerCase().includes(this.search.toLowerCase())
    );
  }

  capturarCategorias() {
    for (let cat of this.videos) {
      if (!this.categorias.includes(cat.category)) {
        this.categorias.push(cat.category)
      }
    }
  }

  filtrarCategorias(cat:String) {

    this.videosAux = this.videos.filter((vid: any) => 
      vid.category.includes(cat)
    )
    console.log(this.videosAux);
  }
}
