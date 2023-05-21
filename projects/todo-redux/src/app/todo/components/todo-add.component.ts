import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild
} from '@angular/core';
import { TodoItem } from '../models/todo.types';

@Component({
  selector: 'todo-add',
  templateUrl: './todo-add.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [ '.mat-mdc-card-content {padding-top: 10px; }']
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
