import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptor } from './app/interceptors/loader.interceptor';

bootstrapApplication(AppComponent, {
  ...appConfig, // Utilisation directe de l'appConfig
  providers: [
    ...appConfig.providers, // Garde les providers existants
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true } // Ajoute l'interceptor
  ]
}).catch(err => console.error(err));


