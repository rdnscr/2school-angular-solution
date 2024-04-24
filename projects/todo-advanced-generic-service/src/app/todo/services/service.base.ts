import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { cloneArray } from '../../shared';
import { Cache } from './cache';
import { Injectable } from '@angular/core';

@Injectable()
export abstract class ServiceBase<TItem> {
    public items: TItem[] | undefined;
    protected cache: Cache<TItem[]>;
    private origCache: Cache<TItem[]>;

    constructor(protected http: HttpClient, protected cacheKey: string) {
      this.cache = new Cache<TItem[]>(cacheKey);
      this.origCache = new Cache<TItem[]>(`${cacheKey}_orig`);
    }

    public load(forceReload: boolean = false): Observable<TItem[]> {
        if (this.cache.hasCache() && !forceReload) {
            this.items = this.cache.readCache();

            return new Observable((observer) => {
                observer.next(this.cache.readCache());
                console.log('cache read');
                observer.complete();
            });
        }
        const obs = this.http.get<TItem[]>(this.getServiceUrl());

        obs.subscribe((res) => {
            this.cache.writeCache(res);
            this.origCache.writeCache(res);
            console.log('cache written');
            this.items = res;
            return res as TItem[];
        });

        return obs;
    }

    public add(newItem: TItem): void {
        this.items?.push(newItem);

        this.persist();
    }

    public reset(): void {
      const orig = this.origCache.readCache();
      if(orig) {
        this.items = cloneArray(orig);
        this.persist();
      }
    }

    public persist(): void {
      if(this.items) {
        this.cache.writeCache(this.items);
      }
    }

    protected abstract getServiceUrl(): string;
}
