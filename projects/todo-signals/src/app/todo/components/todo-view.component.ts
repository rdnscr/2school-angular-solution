import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { FlexModule } from '@ngbracket/ngx-layout/flex';
import { TodoChecked, TodoItem } from '../../shared';
import { TodoListComponent } from './todo-list.component';

@Component({
    selector: 'todo-view',
    templateUrl: './todo-view.component.html',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [FlexModule, TodoListComponent]
})
export class TodoViewComponent {
  public items = input.required<TodoItem[]>();
  public itemsDone = computed(() => this.items().filter((item) => item.checked === true));
  public itemsOpen = computed(() => this.items().filter((item) => item.checked === false));
  public checked = output<TodoChecked>()
  public resetItem = output<void>();

  constructor() {
  }
}
