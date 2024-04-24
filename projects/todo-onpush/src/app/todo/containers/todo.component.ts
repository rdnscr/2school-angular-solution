import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { cloneArray, TodoItem } from '../../shared';
import { TodoViewImmutableComponent } from '../components/todo-view-immutable.component';
import { TodoViewComponent } from '../components/todo-view.component';
import { TodoAddComponent } from '../components/todo-add.component';

@Component({
    selector: 'todo-page',
    templateUrl: './todo.component.html',
    standalone: true,
    imports: [
        TodoAddComponent,
        TodoViewComponent,
        TodoViewImmutableComponent,
        MatSnackBarModule,
    ],
})
export class TodoComponent implements OnInit {
    public todos: TodoItem[] | undefined;
    private orig: TodoItem[] | undefined;

    constructor(private http: HttpClient, private snackBar: MatSnackBar) {

    }

    public ngOnInit() {
        this.http.get<TodoItem[]>('assets/mock-data/todos.json')
            .subscribe((result) => {
                this.orig = result;
                this.todos = cloneArray(result);
            });
    }

    public onAdd(newItem: TodoItem): void {
        this.todos?.push(newItem);
        this.snackBar.open('add item', undefined, { duration: 1500 });
    }

    public onAddClone(newItem: TodoItem): void {
        const todos = this.todos ? cloneArray(this.todos) : this.todos;
        todos?.push(newItem);
        this.todos = todos;
        this.snackBar.open('add item', undefined, { duration: 1500 });
    }

    public onReset(): void {
        this.todos = this.orig ? cloneArray(this.orig) : this.orig;
        this.snackBar.open('reset todos', undefined, { duration: 1500 });
    }
}
