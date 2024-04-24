import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoItem } from '../models/todo.types';
import { TodoListComponent } from './todo-list.component';
import { FlexModule } from '@ngbracket/ngx-layout/flex';

@Component({
    selector: 'todo-view',
    templateUrl: './todo-view.component.html',
    standalone: true,
    imports: [FlexModule, TodoListComponent]
})
export class TodoViewComponent {
  @Input()
  public items: TodoItem[] | null | undefined;
  @Output()
  public resetItem = new EventEmitter<void>();
  @Output()
  public checked = new EventEmitter<{ checked: boolean; id: number }>();

  public get itemsOpen(): TodoItem[] | undefined {
      return this.filterCheckedBy(false);
  }

  public get itemsDone(): TodoItem[] | undefined {
      return this.filterCheckedBy(true);
  }

  private filterCheckedBy(checked: boolean): TodoItem[] | undefined {
      if (this.items) {
          return this.items.filter((item) => item.checked === checked);
      }

      return undefined;
  }
}
