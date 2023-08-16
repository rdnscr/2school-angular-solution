import { RouterModule } from '@angular/router';
import { TodoComponent } from './containers/todo.component';
import { canActivateTodo } from './services/can-activate-todo.guard';
import { canDeactivateTodo } from './services/can-deactivate-todo.guard';
import { todoResolver } from './services/initial-load-resolver';

const todoRoutes = [
    {
        path: '', children: [
            {
                path: '',
                component: TodoComponent,
                canActivate: [canActivateTodo],
                canDeactivate: [canDeactivateTodo],
                resolve: { todos: todoResolver }
            },
        ]
    },
];

export const todoRoutesModule = RouterModule.forChild(todoRoutes);
