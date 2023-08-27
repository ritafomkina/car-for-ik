import { Component } from '@angular/core';
import { Gallery } from 'src/app/models/gallery.model';
import GalleryService from 'src/app/services/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export default class GalleryComponent {
  constructor(
    private galleryService: GalleryService,
  ) {
  }

  public galleryData = this.galleryService.getData();

  public showedData: Array<Gallery> = this.galleryData.slice(0, 3);

  // public lastShowedItem: Gallery = this.showedData[this.showedData.length - 1];

  public numberOfClick: number = 0;

  public switchData(goTo: string) {
    if (goTo === 'right') {
      const ind = this.galleryData.indexOf(this.showedData[this.showedData.length - 1]);
      if (this.galleryData.length === ind + 1) {
        this.showedData.push(this.galleryData[0]);
      } else {
        this.showedData.push(this.galleryData[ind + 1]);
      }
      this.showedData.shift();
    } else {
      const ind = this.galleryData.indexOf(this.showedData[0]);
      if (!ind) {
        this.showedData.unshift(this.galleryData[(this.galleryData.length - 1)]);
      } else {
        this.showedData.unshift(this.galleryData[(ind - 1)]);
      }
      this.showedData.pop();
    }
  }
}
