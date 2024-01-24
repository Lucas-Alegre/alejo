import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { YourtubeService } from 'src/app/services/yourtube.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  constructor(private videoService: YourtubeService, private route: Router) { }

  url: string = '';
  titulo: string = '';
  descripcion: string = '';
  categoria: string = '';

  enviar(form: any): void {

    const formData = {
      url: this.url,
      description: this.descripcion,
      title: this.titulo,
      category: this.categoria
    };

    this.videoService.post(formData).subscribe(res => {
      alert("Se agrego un video correctamente")
      console.log(res)
      this.route.navigate(['/', 'listado'])
    });

  }

  limpiar() {
    this.url = "";
    this.titulo = "";
    this.descripcion = "";
    this.categoria = "";
  }
}
