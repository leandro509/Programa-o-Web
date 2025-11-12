import { Component } from '@angular/core';
import { ServiceAlbum } from '../../services/service-album';
import { Album } from '../../interfaces/album';
import { FormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Photo } from '../../interface/photo';
@Component({
  selector: 'app-cad-album',
  imports: [FormsModule],
  templateUrl: './cad-album.html',
  styleUrl: './cad-album.css',
})
export class CadAlbum {
  vetAlbuns: Album[] = [];
  vAlbum : Album = {
    userId: 0,
    title: ''
  };

  vAlbumEdit: Album = {
    userId: 0,
    title: ''
  };

  vetPhotos: Photo[] = [];

  constructor( private vServiceAlbum: ServiceAlbum) {}

  buscaAlbuns(): void {
   this.vServiceAlbum.findAll().subscribe({
    next: (pVetAlbuns) =>  this.vetAlbuns = pVetAlbuns, 
    error: (pErro) => console.log(pErro)
   });
  }

  buscaAlbum(): void {
    this.vServiceAlbum.findById(this.vAlbum.id!).subscribe({
      next: (pAlbum) => this.vAlbum = pAlbum, 
      error: (pErro : HttpErrorResponse) => console.log(pErro.status+ ' - ' +pErro.message)
    })
  }

  alteraAlbum(): void {
    this.vServiceAlbum.updateAlbum(this.vAlbum).subscribe({
      next: (pAlbum) => this.vAlbumEdit = pAlbum
    });
  }

  insereAlbum(): void {
    this.vServiceAlbum.insertAlbum(this.vAlbum).subscribe({
      next: (pAlbum) => this.vAlbumEdit = pAlbum
    });
  }

  excluirAlbum(): void {
    this.vServiceAlbum.deleteAlbum(this.vAlbum.id!).subscribe({
      next: () => alert('Album ' + this.vAlbum.id + ' foi excluido com sucesso!' )  
    })
  }

  mostraFotos(): void {
    this.vServiceAlbum.findPhotosByAlbum(this.vAlbum.id!).subscribe({
      next: (pVetFotos) => this.vetPhotos = pVetFotos
    });
  }
}
