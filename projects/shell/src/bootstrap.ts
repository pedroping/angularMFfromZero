import { DOCUMENT } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { MyLibService } from '@my-lib';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err))
  .then((appRef) => {
    if (!appRef) return;

    const myService = appRef.injector.get(MyLibService);

    const window = appRef.injector.get(DOCUMENT).defaultView;

    myService.init(window);
  });
