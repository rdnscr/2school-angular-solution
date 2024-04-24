import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild
} from '@angular/core';
import { TodoItem } from '../models/todo.types';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FlexModule } from '@ngbracket/ngx-layout/flex';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'todo-add',
    templateUrl: './todo-add.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: ['.mat-mdc-card-content {padding-top: 10px; }'],
    standalone: true,
    imports: [FormsModule, MatCardModule, MatFormFieldModule, FlexModule, MatInputModule, MatButtonModule]
})
export class TodoAddComponent {
  @Output()
  public add: EventEmitter<TodoItem> = new EventEmitter<TodoItem>();

  @ViewChild('description', { static: true })
  private descriptionInput: ElementRef | undefined;

  constructor() {}

  public onAdd(newItemDescription: string) {
    this.add.emit({
      description: newItemDescription,
      checked: false,
      lastModified: new Date(),
      id: 0
    });

    if(this.descriptionInput) {
      this.descriptionInput.nativeElement.value = '';
    }
  }
}
