import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TodoItem } from '../../shared';
import { PushService } from '../services/push.service';
import { TodoService } from '../services/todo.service';
import { TodoViewComponent } from '../components/todo-view.component';
import { TodoAddComponent } from '../components/todo-add.component';
import { FlexModule } from '@ngbracket/ngx-layout/flex';

@Component({
    selector: 'todo-page',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.scss'],
    standalone: true,
    imports: [FlexModule,
      TodoAddComponent,
      TodoViewComponent]
})
export class TodoComponent implements OnInit {
    constructor(private todoService: TodoService, private snackBar: MatSnackBar, private pushService: PushService) {

    }

    public get todos(): TodoItem[] {
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
}
