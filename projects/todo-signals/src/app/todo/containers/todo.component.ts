import { ChangeDetectionStrategy, Component, OnInit, WritableSignal } from '@angular/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { TodoChecked, TodoItem } from '../../shared';
import { TodoService } from '../services/todo.service';
import { TodoViewComponent } from '../components/todo-view.component';
import { TodoAddComponent } from '../components/todo-add.component';
import { FlexModule } from '@ngbracket/ngx-layout/flex';

@Component({
    selector: 'todo-page',
    templateUrl: './todo.component.html',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        FlexModule,
        TodoAddComponent,
        TodoViewComponent,
        MatSnackBarModule,
    ],
})
export class TodoComponent implements OnInit {
    constructor(private todoService: TodoService, private snackBar: MatSnackBar) {

    }

    public get todos(): WritableSignal<TodoItem[]> {
        return this.todoService.todos;
    }

    public ngOnInit() {
        this.todoService.load();
    }

    public onAdd(newItem: TodoItem): void {
        this.todoService.add(newItem);
        this.snackBar.open('add item', undefined, { duration: 1500 });
    }

    public onReset(): void {
        this.todoService.reset();
        this.snackBar.open('reset todos', undefined, { duration: 1500 });
    }

    public onChecked(checkedItem: TodoChecked) {
      checkedItem.item.checked = checkedItem.checked;
      checkedItem.item.lastModified = new Date();
      this.todoService.todos.set([...this.todoService.todos()]); //trigger CD because it is immutable
      this.snackBar.open('checked / unchecked item', undefined, { duration: 1500 });
  }
}
