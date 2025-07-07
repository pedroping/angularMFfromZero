import { Injectable, WritableSignal } from '@angular/core';
import { signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MyLibService {
  value = 5;

  globalState: WritableSignal<number> = signal<number>(1);

  constructor() {}

  init(window: (Window & typeof globalThis) | null) {
    if (!window) return;
    
    const typedWindow = window as typeof window & {
      globalState: WritableSignal<number>;
    };

    typedWindow.globalState = this.globalState;
  }
}
