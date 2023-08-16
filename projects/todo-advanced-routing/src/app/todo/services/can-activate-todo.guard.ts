import { Injectable, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { IsAdminDialogComponent } from '../dialog/is-admin-dialog.component';

export const canActivateTodo: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return inject(CanActivateTodoService).canActivate();
}

@Injectable()
export class CanActivateTodoService  {

    constructor(private dialog: MatDialog) {
    }

    public canActivate(): Observable<boolean> {
        const result$ = new Subject<boolean>();

        const dialogRef = this.dialog.open(IsAdminDialogComponent);
        dialogRef.afterClosed().subscribe((result) => {
            if (result === 'yes') {
                result$.next(true);
            } else {
                result$.next(false);
            }

            result$.complete();
        });

        return result$;
    }
}
