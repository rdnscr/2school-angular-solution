import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
    selector: 'todo-add',
    templateUrl: './todo-add.component.html',
    styles: [ '.mat-mdc-card-content {padding-top: 10px; }']
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
