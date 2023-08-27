import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export default class HeaderComponent {
  // eslint-disable-next-line class-methods-use-this
  public scrollTo(element: string): void {
    const el = document.getElementById(element) as HTMLElement;
    console.log(el);
    el.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  }
}
