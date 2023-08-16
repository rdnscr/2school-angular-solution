import { Injectable, inject } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { CanDeactivateFn } from "@angular/router";
import { Observable, Subject } from "rxjs";
import { TodoComponent } from "../containers/todo.component";
import { OpenItemsDialogComponent } from "../dialog/open-items-dialog.component";

export const canDeactivateTodo: CanDeactivateFn<TodoComponent> = (
  component: TodoComponent
) => {
  if (component.todos.filter((item) => !item.checked).length > 0) {
    return inject(CanDeactivateTodoService).canDeactivate(inject(MatDialog));
  }

  return true;
};

@Injectable()
export class CanDeactivateTodoService {
  public canDeactivate(dialog: MatDialog): Observable<boolean> {
    const result$ = new Subject<boolean>();

    const dialogRef = dialog.open(OpenItemsDialogComponent);
    dialogRef.afterClosed().subscribe((result) => {
      if (result === "ok") {
        result$.next(true);
      } else {
        result$.next(false);
      }

      result$.complete();
    });

    return result$;
  }
}
