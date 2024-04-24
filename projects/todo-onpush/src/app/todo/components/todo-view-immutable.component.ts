import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TodoViewComponent } from './todo-view.component';
import { TodoListComponent } from './todo-list.component';
import { FlexModule } from '@ngbracket/ngx-layout/flex';

@Component({
    selector: 'todo-immutable-view',
    templateUrl: './todo-view.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [FlexModule, TodoListComponent]
})
export class TodoViewImmutableComponent extends TodoViewComponent {
}
