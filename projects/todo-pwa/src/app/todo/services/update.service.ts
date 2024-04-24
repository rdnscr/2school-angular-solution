import { Injectable } from '@angular/core';
import { SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { MatSnackBar } from '@angular/material/snack-bar';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {
  constructor(updates: SwUpdate, snackbar: MatSnackBar) {
    updates.versionUpdates.pipe(
      filter((evt): evt is VersionReadyEvent => evt.type === 'VERSION_READY')).subscribe(event => {
        const ref = snackbar.open('new version available', 'reload');
        ref.onAction().subscribe(() => {
          document.location.reload(); // trigger the refresh
        });
    });
  }
}
