import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { TodoItem } from '../models/todo.types';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';

@Component({
    selector: 'todo-item',
    templateUrl: './todo-item.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [MatListModule, MatCheckboxModule, FormsModule, DatePipe]
})
export class TodoItemComponent {
  @Input()
  public item: TodoItem | undefined;
  @Output()
  public checked: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}

  public onChecked(value: boolean) {
    this.checked.emit(value);
  }
}
