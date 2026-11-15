import { DOCUMENT, Injectable, effect, inject, signal } from '@angular/core';

export type Theme = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly root = inject(DOCUMENT).documentElement;

  // il valore iniziale lo imposta lo script in index.html
  readonly theme = signal<Theme>(this.root.dataset['theme'] === 'dark' ? 'dark' : 'light');

  constructor() {
    effect(() => {
      const theme = this.theme();
      this.root.dataset['theme'] = theme;
      try {
        localStorage.setItem('theme', theme);
      } catch {
        // localStorage non disponibile
      }
    });
  }

  toggle(): void {
    this.theme.update((current) => (current === 'dark' ? 'light' : 'dark'));
  }
}
