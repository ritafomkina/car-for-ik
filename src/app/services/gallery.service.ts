import { Injectable } from '@angular/core';
import { Gallery } from '../models/gallery.model';

@Injectable({
  providedIn: 'root',
})
export default class GalleryImgService {
  private galleryData: Array<Gallery> = [
    {
      imgSRC: './../../assets/gallery/IMG_6909.jpg',
      description: 'много штук',
    },
    {
      imgSRC: './../../assets/gallery/IMG_6910.jpg',
      description: 'две такие длинные штуки',
    },
    {
      imgSRC: './../../assets/gallery/IMG_6911.jpg',
      description: 'штука на фоне двери',
    },
    {
      imgSRC: './../../assets/gallery/IMG_6912.jpg',
      description: 'штука',
    },
    {
      imgSRC: './../../assets/gallery/IMG_6913.jpg',
      description: 'штука2',
    },
    {
      imgSRC: './../../assets/gallery/IMG_6914.jpg',
      description: 'с гравировкой',
    },
    {
      imgSRC: './../../assets/gallery/IMG_6916.jpg',
      description: 'фиолетовое',
    },
  ];

  public getData() {
    return this.galleryData;
  }
}
