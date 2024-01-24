import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { video } from '../models/video';

@Injectable({
  providedIn: 'root'
})
export class YourtubeService {

  url: string = 'http://localhost:8080/videos'; //Una vez que funciona, probar con la barra al final

  constructor(private http: HttpClient) { }

  get(): Observable<any> {
    return this.http.get(this.url)
  }

  getById(id: any): Observable<video> {
    return this.http.get<video>(this.url+"/"+id)
  }
  
  delete(id: any): Observable<any> {
    return this.http.delete(this.url + "/" + id);
  }

  post(video: any): Observable<any> {
    return this.http.post(this.url, video, { observe: 'response', responseType: 'text' as 'json'  });
  }

  put(video: any, id: any): Observable<any> {
    console.log(video)
    return this.http.put(this.url + "/" + id, video,{ observe: 'response', responseType: 'text' as 'json'  });
  }

}
