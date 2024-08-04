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
    comments:string[];

  } []=[{

    Name: "Hansi",
    imgPath: "./assets/img/banana.jpg",
    likeCounter: 123,
    isliked: false,
    comments:["tolle wurst"],
  },
  {
    Name: "Petri",
    imgPath: "./assets/img/currant.jpg",
    likeCounter: 555,
    isliked: false,
    comments:[],
  },
  {
    Name: "Dieter",
    imgPath: "./assets/img/orange.jpg",
    likeCounter: 666,
    isliked: true,
    comments:["nix los Arbeitslos"]
  },

  ];
 

  addItem(newComment: string , index: number) {
    this.posts[index].comments.push(newComment);
  }
}
