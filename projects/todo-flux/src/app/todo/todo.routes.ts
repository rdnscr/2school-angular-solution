import { Route } from '@angular/router';
import { TodoComponent } from './containers/todo.component';
import { FLUX_CONFIG } from './services/flux.configuration';
import { FluxStore } from './services/flux-store.service';
import { importProvidersFrom } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';

export default [
  {
      path: '',
      providers: [...FLUX_CONFIG, FluxStore, importProvidersFrom(MatSnackBarModule)],
      children: [
          { path: '', component: TodoComponent },
      ]
  },
] satisfies Route[];
