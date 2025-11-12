import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album } from '../interfaces/album';
import { Photo } from '../interface/photo';
@Injectable({
  providedIn: 'root'
})
export class ServiceAlbum {
  constructor(private vHttpClient: HttpClient) { }
  findAll(): Observable<Album[]> {
  return this.vHttpClient.get<Album[]>('https://jsonplaceholder.typicode.com/albums')
  }

  findById(pId: number): Observable<Album> {
    return this.vHttpClient.get<Album>('https://jsonplaceholder.typicode.com/albums'+pId);
  }

  updateAlbum(pAlbum: Album): Observable<Album> {
    return this.vHttpClient.put<Album>('https://jsonplaceholder.typicode.com/albums'+pAlbum.id, 
      pAlbum);
  }

  insertAlbum(pAlbum: Album): Observable<Album> {
    return this.vHttpClient.post<Album>('https://jsonplaceholder.typicode.com/albums', pAlbum);
  }

  deleteAlbum(pId: number): Observable<void> {
    return this.vHttpClient.delete<void>('https://jsonplaceholder.typicode.com/albums/'+pId);
  }

  findPhotosByAlbum(pAlbumId: number): Observable<Photo[]> {
    return this.vHttpClient.get<Photo[]>('https://jsonplaceholder.typicode.com/albums/' + pAlbumId+'/photos');
  }
}
