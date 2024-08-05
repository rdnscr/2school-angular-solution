import { NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TodoChecked, TodoItem } from '../../shared';
import { TodoItemComponent } from './todo-item.component';

@Component({
    selector: 'todo-list',
    templateUrl: './todo-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [MatCardModule, MatListModule, NgFor, TodoItemComponent, NgIf, MatButtonModule]
})
export class TodoListComponent {
    public items = input.required<TodoItem[]>();
    public hasReset = input<boolean>(false);
    public title = input.required<string>();
    public checked = output<TodoChecked>()
    public resetItem = output<void>();

    constructor(private snackBar: MatSnackBar) {

    }

    public onChecked(checked: boolean, item: TodoItem) {
        item.checked = checked;
        item.lastModified = new Date();
        this.snackBar.open('checked / unchecked item', undefined, { duration: 1500 });
    }
}
