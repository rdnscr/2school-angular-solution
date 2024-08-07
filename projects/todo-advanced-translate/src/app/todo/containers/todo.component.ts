import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { cloneArray, TodoItem } from '../../shared';
import { TodoService } from '../services/todo.service';
import { TodoViewComponent } from '../components/todo-view.component';
import { TodoAddComponent } from '../components/todo-add.component';
import { LangSwitchComponent } from '../components/lang-switch.component';
import { TranslateModule } from '@ngx-translate/core';
import { FlexModule } from '@ngbracket/ngx-layout/flex';

@Component({
    selector: 'todo-page',
    templateUrl: './todo.component.html',
    standalone: true,
    imports: [
        FlexModule,
        TranslateModule,
        LangSwitchComponent,
        TodoAddComponent,
        TodoViewComponent,
        MatSnackBarModule,
    ],
})
export class TodoComponent implements OnInit {
    public param: object;

    public todos: TodoItem[] | undefined;
    private orig: TodoItem[] | undefined;

    constructor(private todoService: TodoService, private snackBar: MatSnackBar) {
        this.param = { value: 'Fritz' };
    }

    public ngOnInit() {
        this.todoService.load()
            .subscribe((result) => {
                this.orig = result;
                this.todos = cloneArray(result);
            });
    }

    public onAdd(newItem: TodoItem): void {
        newItem.lastModified = new Date();
        this.todos?.push(newItem);
        this.snackBar.open('add item', undefined, { duration: 1500 });
    }

    public onReset(): void {
        this.todos = this.orig ? cloneArray(this.orig) : this.orig;
        this.snackBar.open('reset todos', undefined, { duration: 1500 });
    }
}
