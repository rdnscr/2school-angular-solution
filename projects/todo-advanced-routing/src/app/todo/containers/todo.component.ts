import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TodoItem } from '../../shared';
import { TodoService } from '../services/todo.service';

@Component({
    selector: 'todo-page',
    templateUrl: './todo.component.html',
})
export class TodoComponent  {
    constructor(private todoService: TodoService, private snackBar: MatSnackBar) {

    }

    public get todos(): TodoItem[] {
        return this.todoService.todos;
    }

    public onAdd(newItem: TodoItem): void {
        this.todoService.add(newItem);
        this.snackBar.open('add item', undefined, { duration: 1500 });
    }

    public onReset(): void {
        this.todoService.reset();
        this.snackBar.open('reset todos', undefined, { duration: 1500 });
    }
}
