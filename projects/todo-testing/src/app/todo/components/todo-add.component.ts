import { MatSnackBar } from '@angular/material/snack-bar';
import { TodoItem } from '../../shared';
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'todo-add',
    templateUrl: './todo-add.component.html',
    styles: [ '.mat-mdc-card-content {padding-top: 10px; }']
})
export class TodoAddComponent {
    @Output()
    public add: EventEmitter<TodoItem> = new EventEmitter<TodoItem>();

    @ViewChild('description', { static: true }) private descriptionInput: ElementRef | undefined;

    constructor(public snackBar: MatSnackBar) {

    }

    public onAdd(newItemDescription: string) {
        this.add.emit({ description: newItemDescription, checked: false, lastModified: new Date(), id: 0 });

        if(this.descriptionInput) {
          this.descriptionInput.nativeElement.value = '';
        }

        this.snackBar.open(`Item with description "${newItemDescription} added`, undefined, {duration: 1500});
    }
}
