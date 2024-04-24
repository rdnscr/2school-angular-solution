import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TodoItem } from '../../shared';
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
    imports: [MatCardModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, FlexModule, MatInputModule, NgIf, MatButtonModule]
})
export class TodoAddComponent {
    @Output()
    public add: EventEmitter<TodoItem> = new EventEmitter<TodoItem>();
    public todoForm = new FormGroup({
      description: new FormControl('', [Validators.required, Validators.minLength(3)])
  });

    @ViewChild('addForm', { read: FormGroupDirective, static: true }) private form: FormGroupDirective | undefined;

    constructor(public snackBar: MatSnackBar) {

    }

    public onAdd(newItemDescription: string) {
        this.add.emit({ description: newItemDescription as string, checked: false, lastModified: new Date(), id: 0 });
        this.snackBar.open(`Item with description "${newItemDescription} added`, undefined, { duration: 1500 });
        this.revert();
    }

    public get descriptionControl(): AbstractControl | null | undefined {
      return this.todoForm?.get('description');
    }

    public revert() {
        this.form?.resetForm();
    }

    public get errorMessage() {
      if(this.descriptionControl) {
        return this.descriptionControl.hasError('required') ? 'Description is required.' :
        this.descriptionControl.hasError('minlength') ? 'Description must be at least 3 characters long.' :
            '';
      }

      return '';
    }
}
