import { createCustomElement } from '@angular/elements';
import { createApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { LocationChangeListener, PlatformLocation } from '@angular/common';

class MockPlatformLocation implements PlatformLocation {
  getState() {}
  onPopState(fn: LocationChangeListener): VoidFunction {
    return () => {};
  }
  onHashChange(fn: LocationChangeListener): VoidFunction {
    return () => {};
  }
  get href(): string {
    return '';
  }
  get protocol(): string {
    return '';
  }
  get hostname(): string {
    return '';
  }
  get port(): string {
    return '';
  }
  historyGo?(relativePosition: number): void {}
  getBaseHrefFromDOM(): string {
    return '/';
  }
  get pathname(): string {
    return '/';
  }
  get search(): string {
    return '';
  }
  get hash(): string {
    return '';
  }
  pushState(state: any, title: string, url: string): void {}
  replaceState(state: any, title: string, url: string): void {}
  forward(): void {}
  back(): void {}
}

(async () => {
  setTimeout(() => {
    console.log(document.cookie);
  }, 1000);
  const app = await createApplication({
    providers: [
      provideRouter([
        {
          path: '',
          loadChildren: () => import('./app/domains/routes'),
        },
      ]),
      { provide: PlatformLocation, useClass: MockPlatformLocation },
    ],
  });
  const el = createCustomElement(AppComponent, {
    injector: app.injector,
  });
  customElements.define('my-root', el);
})();
