import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  posts = [{
    Name: "Hansi",
    imgPath: "./assets/img/banana.jpg",
    likeCounter: 123,
    isliked: false,
  },
  {
    Name: "Petri",
    imgPath: "./assets/img/currant.jpg",
    likeCounter: 555,
    isliked: false,
  },
  {
    Name: "Dieter",
    imgPath: "./assets/img/orange.jpg",
    likeCounter: 666,
    isliked: true,
  },

  ];
  toggleLiked(index: number) {
    if (this.posts[index].isliked) {
      this.posts[index].isliked = false;
      this.posts[index].likeCounter-=1;

    } else {
      this.posts[index].isliked = true;
      this.posts[index].likeCounter+=1;
    }
  }
}
