import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { TodoItem } from '../../shared';

@Component({
    selector: 'todo-item',
    templateUrl: './todo-item.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [MatListModule, MatCheckboxModule, FormsModule, DatePipe]
})
export class TodoItemComponent {
    public item = input.required<TodoItem>();
    public checked = output<boolean>()

    constructor() {

    }

    public onChecked(value: boolean) {
        this.checked.emit(value);
    }
}
