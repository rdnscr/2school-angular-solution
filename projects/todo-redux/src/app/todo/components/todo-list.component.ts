import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoItem } from '../models/todo.types';
import { MatButtonModule } from '@angular/material/button';
import { TodoItemComponent } from './todo-item.component';
import { NgFor, NgIf } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'todo-list',
    templateUrl: './todo-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
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
  @Output()
  public checked = new EventEmitter<{ checked: boolean; id: number }>();

  constructor() {}

  public onChecked(newChecked: boolean, item: TodoItem) {
    this.checked.emit({ checked: newChecked, id: item.id });
  }
}
