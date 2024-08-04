import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core'; // First, import Input


@Component({
  selector: 'app-singlepost',
  standalone: true,
  imports: [NgClass],
  templateUrl: './singlepost.component.html',
  styleUrl: './singlepost.component.scss'
})
export class SinglepostComponent {
  @Input() singlepost!: {
comments: any;
    Name: string;
    imgPath: string;
    likeCounter: number;
    isliked: boolean;

  };
  @Output() newItemEvent = new EventEmitter<string>();
  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
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







