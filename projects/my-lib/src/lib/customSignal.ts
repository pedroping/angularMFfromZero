import { DestroyRef, effect, inject, signal } from '@angular/core';
import { filter, fromEvent } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

export function customSignal<T>(initialvalue: T, key: string) {
  const destroyRef = inject(DestroyRef);
  const actualSignal = signal(initialvalue);

  let lastVaule = hasValue<T>(key);

  if (lastVaule) actualSignal.set(lastVaule);
  else writeAtStorage(initialvalue, null, key);

  effect(() => {
    if (lastVaule != actualSignal()) {
      writeAtStorage(actualSignal(), lastVaule, key);
      lastVaule = actualSignal();
    }
  });

  fromEvent<StorageEvent>(window, 'storage')
    .pipe(
      takeUntilDestroyed(destroyRef),
      filter((event) => event.key === key && !!event.newValue)
    )
    .subscribe((event) => {
      actualSignal.set(JSON.parse(event.newValue!));
    });

  return actualSignal;
}

function hasValue<T>(key: string): T | null {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
}

function writeAtStorage<T>(newValue: T, oldValue: T, key: string) {
  localStorage.setItem(key, JSON.stringify(newValue));

  window.dispatchEvent(
    new StorageEvent('storage', {
      key: 'test',
      oldValue: JSON.stringify(oldValue),
      newValue: JSON.stringify(newValue),
    })
  );
}
