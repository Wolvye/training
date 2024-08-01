import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SinglepostComponent } from '../main/singlepost/singlepost.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterModule,SinglepostComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
