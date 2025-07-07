import { WritableSignal } from '@angular/core';

declare global {
  interface Window {
    globalState: WritableSignal<number>;
  }
}
