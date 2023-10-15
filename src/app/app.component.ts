import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular_Task3';

  images = [
    {
      imageSrc: 'https://source.unsplash.com/1600x1200/?Amsterdam',
      imageAlt: 'Amsterdamx',
    },
    {
      imageSrc: 'https://source.unsplash.com/1600x1200/?Beach',
      imageAlt: 'Beach',
    },
    {
      imageSrc: 'https://source.unsplash.com/1600x1200/?Universe',
      imageAlt: 'Universe',
    },
    {
      imageSrc: 'https://source.unsplash.com/1600x1200/?Cakes',
      imageAlt: 'Cake',
    }
  ]
}
