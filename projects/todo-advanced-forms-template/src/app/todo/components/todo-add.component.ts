import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TodoItem } from '../../shared';
import { NgForm, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { FlexModule } from '@ngbracket/ngx-layout/flex';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'todo-add',
    templateUrl: './todo-add.component.html',
    styles: ['.mat-mdc-card-content {padding-top: 10px; }'],
    standalone: true,
    imports: [FormsModule, MatCardModule, MatFormFieldModule, FlexModule, MatInputModule, NgIf, MatButtonModule]
})
export class TodoAddComponent {
    @Output()
    public add: EventEmitter<TodoItem> = new EventEmitter<TodoItem>();

    // required for AoT build
    public descriptionText: string = '';

    @ViewChild('myForm', { static: true }) form: NgForm | undefined;

    constructor(public snackBar: MatSnackBar) {

    }

    public onAdd() {
        this.add.emit({ description: this.descriptionText, checked: false, lastModified: new Date(), id: 0 });
        this.snackBar.open(`Item with description "${this.descriptionText}" added`, undefined, { duration: 1500 });
        this.form?.resetForm();
    }
}
