import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  posts = [{
    Name: "Hansi",
    imgPath: "./assets/img/banana.jpg",
    likeCounter: 123,

  },
  {
    Name: "Petri",
    imgPath: "./assets/img/currant.jpg",
    likeCounter: 555,
  },
  {
    Name: "Dieter",
    imgPath: "./assets/img/heart-black.png",
    likeCounter: 666,
  },

  ];





}
