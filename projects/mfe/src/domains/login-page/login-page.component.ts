import { Component, OnInit } from '@angular/core';

declare const __webpack_public_path__: string;
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  standalone: true,
})
export class LoginPageComponent implements OnInit {
  assetUrl = __webpack_public_path__;

  ngOnInit(): void {
    console.log(this.assetUrl);
  }
}
