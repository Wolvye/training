import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BehaviorSubject, throttle, interval } from 'rxjs';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'RXJS';
  timer = new BehaviorSubject<number>(0);

  ngOnInit() {
    this.timer
    .pipe(throttle(val => interval(2000)))
    .subscribe((timePassed) =>{
      console.log(timePassed);
  });

  setInterval(() => {
    let newValue = this.timer.value + 1000;
    this.timer.next(newValue)
  }, 100);
}
} 
//Dieser Timer unterstützt mich für Datenbanken. Ich bekomme regelmäßig Daten übermittelt