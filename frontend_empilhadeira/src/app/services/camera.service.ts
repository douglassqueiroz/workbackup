import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CameraService {
  private backendUrl = 'https://localhost:5000/video_feed';  // Substitua pelo URL real do seu backend

  constructor(private http: HttpClient) { }
  savePhoto(photoData: string): Observable<any> {
    const url = `${this.backendUrl}/save_photo`;
    return this.http.post(url, { photoData });
  }
}
