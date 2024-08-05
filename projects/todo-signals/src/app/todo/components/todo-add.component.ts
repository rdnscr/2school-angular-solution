import { ChangeDetectionStrategy, Component, ElementRef, ViewChild, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FlexModule } from '@ngbracket/ngx-layout/flex';
import { TodoItem } from '../../shared';

@Component({
    selector: 'todo-add',
    templateUrl: './todo-add.component.html',
    styles: ['.mat-mdc-card-content {padding-top: 10px; }'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [FormsModule, MatCardModule, MatFormFieldModule, FlexModule, MatInputModule, MatButtonModule]
})
export class TodoAddComponent {
    public add = output<TodoItem>();

    @ViewChild('description', { static: true }) private descriptionInput: ElementRef | undefined;

    constructor(public snackBar: MatSnackBar) {

    }

    public onAdd(newItemDescription: string) {
        this.add.emit({ description: newItemDescription, checked: false, lastModified: new Date(), id: 0 });

        if(this.descriptionInput) {
          this.descriptionInput.nativeElement.value = '';
        }

        this.snackBar.open(`Item with description "${newItemDescription} added`, undefined, { duration: 1500 });
    }
}
