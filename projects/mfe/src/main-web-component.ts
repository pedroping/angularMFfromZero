import { createCustomElement } from '@angular/elements';
import { createApplication } from '@angular/platform-browser';
import { TestComponentComponent } from 'mfe/Component';
import { appConfig } from './app/app.config';

(async () => {
  const app = await createApplication(appConfig);
  const el = createCustomElement(TestComponentComponent, {
    injector: app.injector,
  });
  customElements.define('my-custom-element', el);
})();
