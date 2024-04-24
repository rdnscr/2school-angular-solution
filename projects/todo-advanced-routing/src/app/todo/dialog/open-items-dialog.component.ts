import { Component } from '@angular/core';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'todo-open-items-dialog',
    templateUrl: 'open-items-dialog.component.html',
    standalone: true,
    imports: [MatDialogModule, MatButtonModule],
})
export class OpenItemsDialogComponent {
    constructor(public dialogRef: MatDialogRef<OpenItemsDialogComponent>) { }
}
