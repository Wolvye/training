import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SinglepostComponent } from "../singlepost/singlepost.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterModule, SinglepostComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  posts: {
    Name: string;
    imgPath: string;
    likeCounter: number;
    isliked: boolean; 

  } []=[{

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
}
