import { Route } from '@angular/router';
import { TodoComponent } from './containers/todo.component';

export default [
  {
      path: '',
      children: [
          { path: '', component: TodoComponent },
      ]
  },
] satisfies Route[];
