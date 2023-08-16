import { ResolveFn } from "@angular/router";
import { TodoItem } from "../../shared";
import { TodoService } from "./todo.service";
import { inject } from "@angular/core";

export const todoResolver: ResolveFn<TodoItem[]> = () => {
  return inject(TodoService).load();
};
