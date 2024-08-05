import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { cloneArray, TodoItem } from '../../shared';

@Injectable({providedIn: 'root'})
export class TodoService {
    public todos = signal<TodoItem[]>([]);
    private orig: TodoItem[] = [];

    constructor(private http: HttpClient) {

    }

    public load(): Observable<TodoItem[]> {
        const obs = this.http.get<TodoItem[]>('assets/mock-data/todos.json');
        obs.subscribe((result) => {
            this.orig = result;
            this.todos.set(cloneArray(this.orig));
        });

        return obs;
    }

    public add(newItem: TodoItem): void {
        newItem.lastModified = new Date();
        this.todos.set([...this.todos(), newItem]);
    }

    public reset(): void {
        this.todos.set(cloneArray(this.orig));
    }
}
