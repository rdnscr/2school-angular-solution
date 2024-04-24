import { Pipe, PipeTransform } from '@angular/core';
import { TodoItem } from '../../shared';

@Pipe({
    name: 'myTodoFilter',
    standalone: true,
})
export class TodoFilterPipe implements PipeTransform {

  public transform(items: TodoItem[], filterStrings: string | undefined): any {
    if (!filterStrings) {
      return items;
    }

    const filterStr = filterStrings.toLowerCase();
    return items.filter((i) => i.description.toLowerCase().indexOf(filterStr) !== -1);
  }

}
