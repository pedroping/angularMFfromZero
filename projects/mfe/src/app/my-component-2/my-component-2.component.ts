import { Component } from '@angular/core';
import { SharedCmpComponent } from '../shared-cmp/shared-cmp.component';

@Component({
  selector: 'app-my-component-2',
  templateUrl: './my-component-2.component.html',
  styleUrls: ['./my-component-2.component.scss'],
  standalone: true,
  imports: [SharedCmpComponent],
})
export class MyComponent2Component {}
