import { Component } from '@angular/core';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'todo-is-admin-dialog',
    templateUrl: 'is-admin-dialog.component.html',
    standalone: true,
    imports: [MatDialogModule, MatButtonModule],
})
export class IsAdminDialogComponent {
    constructor(public dialogRef: MatDialogRef<IsAdminDialogComponent>) { }
}
