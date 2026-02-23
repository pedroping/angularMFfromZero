import { Routes } from '@angular/router';

export default [
  {
    path: 'login',
    loadComponent: async () =>
      (await import('./login-page/login-page.component')).LoginPageComponent,
  },
] as Routes;
