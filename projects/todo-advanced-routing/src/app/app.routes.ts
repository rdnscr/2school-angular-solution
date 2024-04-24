import { Routes } from '@angular/router';
import { OtherComponent } from './other/other.component';

export const appRoutes: Routes = [
  { path: "", redirectTo: "todo", pathMatch: "full" },
  {
    path: "todo",
    loadChildren: () => import("./todo/todo.routes"),
    data: { title: "Advanced Routing" },
  },
];
