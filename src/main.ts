import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

import { makeServer } from './mocks/server';  // Import du fichier MirageJS
import { environment } from './environments/environment';

makeServer();

if (!environment.production) {
  makeServer().then(() => {
    console.log('[>>>> MAIN] MirageJS API démarrée...');
  });
}

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).catch(err => console.error(err));
  