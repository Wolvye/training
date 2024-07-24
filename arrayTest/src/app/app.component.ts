import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

export class AppComponent {
  theBoss: (string | number | boolean |(string|number)[]) [] =[8, 3, true]; //hier typ anpassen
  theFinalBoss: (string|(string|number|boolean|(number)[])[]|null)[] = ["das ist ein test"];  //hier typ anpassen
  theArray: (string|boolean)[] = [];  //hier typ anpassen
  theNumbers:number[] = [100, 200, 300];  //hier typ anpassen
  theWhat: (string|number);  //hier nicht anpassen
  theBig: (number|string);  //hier ggf. anpassen
  theString:string;

  constructor() {
    this.theBoss = [[1, 2, 7, "9"], [66]];  //hier nicht anpassen
    this.theFinalBoss = ["das ist ein langer test", ["ein weiterer Test", true, [3, 6, 9]], null];  //hier nicht anpassen
    this.theArray = ["Marion", true];  //hier nicht anpassen
    this.theNumbers = [100];  //hier anpassen
    this.theWhat = 200;  //hier anpassen
    this.theBig = "1000";  //hier ggf. anpassen
    this.theString="Hallo Welt"
  }
}