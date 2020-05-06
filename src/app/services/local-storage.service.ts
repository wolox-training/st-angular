import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

  constructor() { }

  save(key: string, data: string) {
    localStorage.setItem(key, data);
  }

  get(...keys: string[]): any[] {
    return keys.map(key => localStorage.getItem(key)).filter(key => key !== null);
  }

  clear() {
    localStorage.clear();
  }
}
