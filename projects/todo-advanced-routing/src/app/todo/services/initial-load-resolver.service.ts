import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { TodoItem } from '../../shared';
import { TodoService } from './todo.service';

@Injectable()
export class TodosResolve  {

  constructor(private todoService: TodoService) { }

  public resolve(route: ActivatedRouteSnapshot): Observable<TodoItem[]> {
    return this.todoService.load();
  }
}
