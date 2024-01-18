import { Component } from '@angular/core';
import {
  ButtonModule,
} from '@mozaic-ds/angular';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    ButtonModule,
  ],
})
export class AppComponent {
  title = 'Tour of Heroes';
}
