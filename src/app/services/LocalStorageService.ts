import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {

    private storageKey: string = 'mobile-cashbox';

    getItem(key) {
        return localStorage.getItem(this.storageKey + '_' + key);
    }

    setItem(key, data) {
        localStorage.setItem(this.storageKey + '_' + key, data);
    }

    remove(key) {
        localStorage.removeItem(this.storageKey + '_' + key);
    }

    removeByPrefix(key) {
        key = this.storageKey + '_' + key;
        for (var i in localStorage) {
            if (i.substring(0, key.length) == key) {
                localStorage.removeItem(i);
            }
        }
    }

    setObject(key, data) {
        this.setItem(key, JSON.stringify(data));
    }

    getObject(key) {
        var result = this.getItem(key);

        try {
            return JSON.parse(result);
        } catch (e) {
            return null;
        }
    }

    get(key: string): any | null {
        return localStorage.getItem(key);
    }

    has(key: string): boolean {
        return !!this.get(key);
    }

    set(key: string, data: string): void {
        localStorage.setItem(key, data);
    }

    clear() {
        localStorage.clear();
    }
}
