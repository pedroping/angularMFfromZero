import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponentComponent } from 'mfe/Component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
     TestComponentComponent
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'shell';
}
