import { Component, EventEmitter, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TodoItem } from '../../shared';

@Component({
    selector: 'todo-add',
    templateUrl: './todo-add.component.html',
    styles: [ '.mat-mdc-card-content {padding-top: 10px; }']
})
export class TodoAddComponent {
    @Output()
    public add: EventEmitter<TodoItem> = new EventEmitter<TodoItem>();


    constructor(public snackBar: MatSnackBar) {

    }

    public onAdd(newItemDescription: string) {
        throw new Error('Unexpected Error: ' + newItemDescription);

        // this.add.emit({ description: newItemDescription, checked: false, lastModified: new Date(), id: 0 });
        // this.descriptionInput.nativeElement.value = '';
        // this.snackBar.open(`Item with description "${newItemDescription} added`, undefined, {duration: 1500});
    }
}
