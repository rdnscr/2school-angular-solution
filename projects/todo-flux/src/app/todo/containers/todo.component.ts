import { Component, Inject, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { FluxAction, FluxActionTypes } from '../services/actions.type';
import { FluxStore } from '../services/flux-store.service';
import { fluxDispatcherToken } from '../services/flux.configuration';
import { TodoViewComponent } from '../components/todo-view.component';
import { TodoAddComponent } from '../components/todo-add.component';
import { FlexModule } from '@ngbracket/ngx-layout/flex';

@Component({
    selector: 'todo-page',
    templateUrl: './todo.component.html',
    standalone: true,
    imports: [
        FlexModule,
        TodoAddComponent,
        TodoViewComponent,
    ],
})
export class TodoComponent implements OnInit {
    constructor(public store: FluxStore, @Inject(fluxDispatcherToken) private dispatcher: Subject<FluxAction>) {

    }

    public ngOnInit() {
        this.dispatcher.next(new FluxAction(FluxActionTypes.Load));
    }

    public onAdd(description: string): void {
        this.dispatcher.next(new FluxAction(FluxActionTypes.Add, 0, description));
    }

    public onReset(): void {
        this.dispatcher.next(new FluxAction(FluxActionTypes.Reset));
    }
}
