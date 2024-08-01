import { Component, Input } from '@angular/core'; // First, import Input


@Component({
  selector: 'app-singlepost',
  standalone: true,
  imports: [],
  templateUrl: './singlepost.component.html',
  styleUrl: './singlepost.component.scss'
})
export class SinglepostComponent {
  @Input() singlepost!: {
    Name: string;
    imgPath: string;
    likeCounter: number;
    isliked: boolean;

  };

  toggleLike(singlepost: {
    Name: string;
    imgPath: string;
    likeCounter: number;
    isliked: boolean;
  }) {
    if (singlepost.isliked) {
      singlepost.isliked = false;
      singlepost.likeCounter--;
    } else {
      singlepost.isliked = true;
      singlepost.likeCounter++;
    }
  }
}

