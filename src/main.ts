import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { environment } from './environments/environment';

if (!environment.production) {
  import('./mocks/server')
    .then(({ makeServer }) => {
      makeServer().then(() => {
        console.log('[>>>> MAIN] MirageJS API started successfully...');
      }).catch(err => console.error('[>>>> ERROR] MirageJS failed to start:', err));
    })
    .catch(err => console.error('[>>>> ERROR] Failed to import MirageJS:', err));
}

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).catch(err => console.error('[>>>> ERROR] Angular Bootstrap Failed:', err));
