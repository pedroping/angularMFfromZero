import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyLibService } from '@my-lib';
import { TestComponentComponent } from 'mfe/Component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'shell';

  private readonly myLibService = inject(MyLibService);

  ngOnInit(): void {
    console.log(this.myLibService.value);

    this.myLibService.value = 10;

    console.log(this.myLibService.value);
  }
}
