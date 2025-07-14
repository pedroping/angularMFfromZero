import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { customSignal, MyLibService } from '@my-lib';
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

  signal = customSignal('test', 'initialSignal');

  private readonly myLibService = inject(MyLibService);

  ngOnInit(): void {
    console.log(this.myLibService.value, this.signal());

    console.log(this.signal());

    this.myLibService.value = 10;

    console.log(this.myLibService.value);
  }

  update() {
    this.signal.update((value) => 'Test ' + Math.floor(Math.random() * 10));
  }
}
