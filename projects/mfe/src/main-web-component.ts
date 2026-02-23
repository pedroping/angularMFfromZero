import { createCustomElement } from '@angular/elements';
import { createApplication } from '@angular/platform-browser';
import { TestComponentComponent } from 'mfe/Component';
import { appConfig } from './app/app.config';
import { MyComponent2Component } from './my-component-2/my-component-2.component';

(async () => {
  const app = await createApplication(appConfig);
  const el = createCustomElement(TestComponentComponent, {
    injector: app.injector,
  });
  customElements.define('my-custom-element', el);

  const el2 = createCustomElement(MyComponent2Component, {
    injector: app.injector,
  });
  customElements.define('my-custom-element-2', el2);
})();
