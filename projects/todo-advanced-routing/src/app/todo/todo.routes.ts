import { Route } from '@angular/router';
import { TodoComponent } from './containers/todo.component';
import { CanActivateTodoService, canActivateTodo } from './services/can-activate-todo.guard';
import { CanDeactivateTodoService, canDeactivateTodo } from './services/can-deactivate-todo.guard';
import { todoResolver } from './services/initial-load-resolver';
import { importProvidersFrom } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

export default [
  {
      path: '',
      providers: [importProvidersFrom(MatDialogModule), CanActivateTodoService, CanDeactivateTodoService],
      children: [
        {
          path: '',
          component: TodoComponent,
          canActivate: [canActivateTodo],
          canDeactivate: [canDeactivateTodo],
          resolve: { todos: todoResolver }
        },
      ]
  },
] satisfies Route[];

