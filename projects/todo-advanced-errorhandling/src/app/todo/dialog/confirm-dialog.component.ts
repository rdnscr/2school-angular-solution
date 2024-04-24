import { Component } from '@angular/core';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'todo-confirm-dialog',
    templateUrl: './confirm-dialog.component.html',
    standalone: true,
    imports: [MatDialogModule, MatButtonModule]
})
export class ConfirmDialogComponent {

    public title: string | undefined;
    public message: string | undefined;

    constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>) {

    }
}
