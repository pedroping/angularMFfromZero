import { Component, inject, OnInit } from '@angular/core';
import { MyLibService } from '@my-lib';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.scss'],
  standalone: true,
})
export class TestComponentComponent implements OnInit {
  private readonly myLibService = inject(MyLibService);

  ngOnInit(): void {
    console.log(this.myLibService.value);

    this.myLibService.value = 10;

    console.log(this.myLibService.value);
  }
}
