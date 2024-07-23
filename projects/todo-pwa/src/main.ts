import { enableProdMode, importProvidersFrom } from '@angular/core';
import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { appRoutes } from './app/app.routes';
import { withPreloading, provideRouter, NoPreloading } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { provideAnimations } from '@angular/platform-browser/animations';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import {} from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, MatIconModule, MatSidenavModule, MatToolbarModule, HttpClientModule, MatSnackBarModule,
          ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })),
        provideAnimations(),
        provideRouter(appRoutes, withPreloading(NoPreloading)),
    ]
})
  .catch(err => console.log(err));
