import { enableProdMode, importProvidersFrom } from '@angular/core';
import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { appRoutes } from './app/app.routes';
import { withPreloading, withDebugTracing, provideRouter, NoPreloading } from '@angular/router';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { provideAnimations } from '@angular/platform-browser/animations';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

export const defaultReducers: ActionReducerMap<object> = {

};

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, MatIconModule, MatSidenavModule, MatToolbarModule, StoreModule.forRoot(defaultReducers), EffectsModule.forRoot([]), StoreDevtoolsModule.instrument({ logOnly: !environment.production, connectInZone: true })),
        provideHttpClient(withInterceptorsFromDi()),
        provideAnimations(),
        provideRouter(appRoutes, withPreloading(NoPreloading), withDebugTracing()),
    ]
})
  .catch(err => console.log(err));
