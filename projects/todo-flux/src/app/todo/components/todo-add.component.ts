import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FlexModule } from '@ngbracket/ngx-layout/flex';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'todo-add',
    templateUrl: './todo-add.component.html',
    styles: ['.mat-mdc-card-content {padding-top: 10px; }'],
    standalone: true,
    imports: [FormsModule, MatCardModule, MatFormFieldModule, FlexModule, MatInputModule, MatButtonModule]
})
export class TodoAddComponent {
    @Output()
    public add: EventEmitter<string> = new EventEmitter<string>();

    @ViewChild('description', { static: true }) private descriptionInput: ElementRef | undefined;

    public onAdd(newItemDescription: string) {
        this.add.emit(newItemDescription);

        if(this.descriptionInput) {
          this.descriptionInput.nativeElement.value = '';
        }
    }
}
