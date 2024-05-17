import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TodoItem } from '../../shared';
import { MatButtonModule } from '@angular/material/button';
import { TodoItemComponent } from './todo-item.component';
import { NgFor, NgIf } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'todo-list',
    templateUrl: './todo-list.component.html',
    standalone: true,
    imports: [MatCardModule, MatListModule, NgFor, TodoItemComponent, NgIf, MatButtonModule]
})
export class TodoListComponent {
    @Input()
    public items: TodoItem[] | undefined;
    @Input()
    public hasReset: boolean | undefined;
    @Input()
    public title: string | undefined;
    @Output()
    public resetItem = new EventEmitter<void>();

    constructor(private snackBar: MatSnackBar) {

    }

    public onChecked(checked: boolean, item: TodoItem) {
        item.checked = checked;
        item.lastModified = new Date();
        this.snackBar.open('checked / unchecked item', undefined, { duration: 1500 });
    }
}
