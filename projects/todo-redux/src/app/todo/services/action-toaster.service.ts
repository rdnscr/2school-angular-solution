import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Subscription } from 'rxjs';

@Injectable()
export class ActionToasterService {
        constructor(private snackBar: MatSnackBar, private actions$: Actions) {

    }

    public start(): Subscription {
        return this.actions$.subscribe((action: Action) => {
            this.snackBar.open(`Action with ${action.type} executed`, undefined, { duration: 1500 });
        });
    }
}
