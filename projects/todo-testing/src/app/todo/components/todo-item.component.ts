import { TodoItem } from '../../shared';
import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';

@Component({
    selector: 'todo-item',
    templateUrl: './todo-item.component.html',
    standalone: true,
    imports: [MatListModule, MatCheckboxModule, FormsModule, DatePipe]
})
export class TodoItemComponent {
    @Input()
    public item: TodoItem | undefined;
    @Output()
    public checked: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor() {

    }

    public onChecked(value: boolean) {
        this.checked.emit(value);
    }
}
