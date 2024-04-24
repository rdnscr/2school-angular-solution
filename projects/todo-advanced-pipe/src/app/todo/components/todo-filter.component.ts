import { Component, EventEmitter, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { tap, debounceTime } from 'rxjs/operators';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { FlexModule } from '@ngbracket/ngx-layout/flex';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'todo-filter',
    templateUrl: './todo-filter.component.html',
    standalone: true,
    imports: [
        MatCardModule,
        MatFormFieldModule,
        FlexModule,
        MatInputModule,
        FormsModule,
        MatButtonModule,
    ],
})
export class TodoFilterComponent {
  public filter: string | undefined;

  @Output()
  public filterChanged = new EventEmitter<string>();

  private keyPress$ = new Subject<string>();

  constructor() {
    this.keyPress$.pipe(debounceTime(500)).subscribe((value) => {
      this.filter = value;
      this.filterChanged.emit(value);
    });
  }

  public valueChanged(value: string) {
    this.keyPress$.next(value);
  }

  public resetFilter() {
    this.valueChanged('');
  }
}
