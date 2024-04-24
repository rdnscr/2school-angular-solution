import { Route } from '@angular/router';
import { TodoComponent } from './containers/todo.component';
import { importProvidersFrom } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { todoFeatureKey } from './reducers/todo.selector';
import { todoReducer } from './reducers/todo.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from './effects/todo.effects';
import { ActionToasterService } from './services/action-toaster.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';

export default [
  {
      path: '',
      providers: [importProvidersFrom(MatSnackBarModule, StoreModule.forFeature(todoFeatureKey, todoReducer), EffectsModule.forFeature([TodoEffects])), ActionToasterService],
      children: [
          { path: '', component: TodoComponent },
      ]
  },
] satisfies Route[];
